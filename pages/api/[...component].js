import { db } from "../../config/db";
import NextCors from 'nextjs-cors';
export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  switch (req.method) {
    case "GET":
      if (req.query.component == 'partner') {
        return await getAllPartner(req, res);
      }
      if (req.query.component == 'testimonial') {
        return await getAllTestimonial(req, res);
      }
      if (req.query.component == 'userdetails') {
        return await getUserDetails(req, res);
      }
      if (req.query.component == 'headermenu') {
        return await getHeaderMenu(req, res);
      } 
      if (req.query.component == 'footerlink') {
        return await getFooterLink(req, res);
      }
      if (req.query.component == 'footerlink2') {
        return await getFooterLink2(req, res);
      }
      if (req.query.component == 'getallslug') {
        return await getpageslug(req, res);
      }
      if (req.query.component[0] == 'get_product_by_slug') {
        return await GetProductBySlug(req, res);
      }
      if (req.query.component[0] == 'get_product_by_catid') {
        return await GetProductByCatId(req, res);
      }
      if (req.query.component[0] == 'get_rating_bybpid') {
        return await GetRatingByBankProductId(req, res);
      }
      if (req.query.component[0] == 'get_product_bycatid') {
        return await GetProductByCatId(req, res);
      }

      // Mobile APP API
      if (req.query.component == 'allcategory') {
        return await getAllCategory(req, res);
      }
      if (req.query.component[0] == 'get_all_data_by_catid') {
        return await getAllDataByCatId(req, res);
      }
    case "POST":
      if (req.query.component == 'add-rating') {
        return await insertRating(req, res);
      }
      if (req.query.component == 'get_ids_by_slug') {
        return await GetIdsBySlug(req, res);
      }

    default:
      return res.status(400).send("Method not allowed");
  }
}

const GetProductBySlug = async (req, res) => {
  try {
    let slug;
    if(req.query.component[2])
    {
      slug = req.query.component[1]+'/'+req.query.component[2];
    
    }
    else
    {
       slug = req.query.component[1];
    }
    const results = await db.query("SELECT * FROM `view_product` WHERE `slug` = '"+slug +"' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const GetIdsBySlug = async (req, res) => {
  try {
    let slug;

    slug = req.body.slug

    const results = await db.query("SELECT id,name,slug,categories_id,product_id,bank_product_id,bank_id FROM `pages` WHERE `slug` = '"+slug +"' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getpageslug = async (req, res) => {
  try {
    const results = await db.query("SELECT slug FROM `pages` WHERE `status` = '1' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const GetProductByCatId = async (req, res) => {
  try {
    let cat_id = req.query.component[1];

    const results = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '"+cat_id +"' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllPartner = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `partners` WHERE `is_active` = '1' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllTestimonial = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM `testimonials` WHERE `is_active` = '1' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const results = await db.query("SELECT full_name, phone_no FROM `customers`  ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


const getHeaderMenu = async (req, res) => {
  try {
    const query_cat = await db.query("SELECT * FROM `view_category` WHERE `status` = '1' and `is_menu` = '1' and `slug` != '' ");

    if (!query_cat || query_cat.length === 0) {
      return res.status(200).json([]);
    }

    const categoryIds = query_cat.map(category => category.id);

    const [query_products, query_pages] = await Promise.all([
      db.query("SELECT * FROM `view_product` WHERE `cat_id` IN (?) AND `status` = '1' and `is_menu` = '1' and `slug` != '' ORDER BY `searial_by` ", [categoryIds]),
      db.query("SELECT * FROM `pages` WHERE `categories_id` IN (?) AND status = '1' ORDER BY name ASC ", [categoryIds])
    ]);

    const productsByCategoryId = query_products.reduce((accumulator, product) => {
      const categoryId = product.cat_id;
      accumulator[categoryId] = accumulator[categoryId] || [];
      accumulator[categoryId].push(product);
      return accumulator;
    }, {});

    const temp = query_cat.map(category => {
      const categoryCopy = { ...category };

      if (category.hierarchy === 'Product_BankProduct') {
        const products = productsByCategoryId[category.id] || [];
        categoryCopy.product = products.map(product => {
          const productCopy = { ...product };
          productCopy.bank_product = []; // Default value

          const query_bank_product = db.query("SELECT *, IF(searial_by IS NULL, 99999, searial_by) as order_by FROM `view_bank_product` WHERE `status`='1' and `product_id` = ? ORDER BY name ASC  ", [product.id]);

          return query_bank_product.then(bankProducts => {
            productCopy.bank_product = bankProducts || [];
            return productCopy;
          });
        });
      } else {
        categoryCopy.page = query_pages.filter(page => page.categories_id === category.id);
      }

      return categoryCopy;
    });

    const resolvedTemp = await Promise.all(temp.map(async category => {
      if (Array.isArray(category.product)) {
        category.product = await Promise.all(category.product);
      }
      return category;
    }));

    res.setHeader('Cache-Control', 'public, max-age=36000, s-maxage=36000,stale-while-revalidate=59');
    return res.status(200).json(resolvedTemp);
  } catch (error) {
    return res.status(500).json({ error });
  }
};



const getFooterLink = async (req, res) => {
  try {
    const temp = { 'loanP': [], 'loanBP': [], 'ccBP': [] };

    // Loan - 2, CC - 1, Other - 7
    const [results1, results2, results3] = await Promise.all([
      db.query("SELECT id,name,slug FROM `view_product` where cat_id = '2' LIMIT 0,5 "),
      db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '2'  LIMIT 0,5 "),
      db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '1' LIMIT 0,5 ")
    ]);

    temp['loanP'].push(results1);
    temp['loanBP'].push(results2);
    temp['ccBP'].push(results3);

    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(temp);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


const getFooterLink2 = async (req, res) => {
  try {
    const temp = { 'loan': [], 'cc': [] };

    // Loan - 2, CC - 1, Other - 7
    const [results1, results2] = await Promise.all([
      db.query("SELECT id, name , slug FROM `view_product` where cat_id = '2' LIMIT 0,5 "),
      db.query("SELECT id,name,slug FROM `view_bank_product` where cat_id = '1' LIMIT 0,5 ")
    ]);

    temp['loan'].push(results1);
    temp['cc'].push(results2);

    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(temp);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


const GetRatingByBankProductId = async (req, res) => {
  try {
    let bank_product_id = req.query.component[1];

    const results = await db.query("SELECT * FROM `view_rating` WHERE `bank_product_id` = '"+bank_product_id +"' ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const insertRating = async (req, res) => {
  try {
    const results = await db.query("INSERT INTO `ratings` SET `bank_product_id` = '"+ req.body.bank_product_id +"' ,`session_id` = '"+ req.body.session_id +"' ,`rating` = '"+ req.body.rating +"'  ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};


// Make API For Mobile APP
const getAllCategory = async (req, res) => {
  try {
    const results = await db.query(" SELECT * FROM `view_category` WHERE `status` = '1' and `is_menu` = '1' and `slug` != ''  ");
    res.setHeader('Cache-Control', 's-maxage=86400');
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllDataByCatId = async (req, res) => {
  try {
    let catid = req.query.component[1];
    let result1 = await db.query(" SELECT * FROM `view_category` WHERE `id` = '" + catid + "'  ");
    let hierarchy = result1[0]['hierarchy'];
    let results;

    let query_product;
    let query_bank_product;
    let product_id;

    if(hierarchy=='Product_BankProduct')
    {
        query_product = await db.query("SELECT * FROM `view_product` WHERE `cat_id` = '" + catid + "' AND `status` = '1' ORDER BY `searial_by` ");

        if (query_product) {
          for (let j in query_product) 
          {
             product_id = query_product[j].id;
           
             query_bank_product = await db.query("SELECT *, IF(searial_by IS NULL, 99999, searial_by) as order_by FROM `view_bank_product` WHERE `status`='1' and `product_id` = '" + product_id + "' ORDER BY order_by  ");
             query_product[j]['bank_product'] = query_bank_product;
          }
        }
        res.setHeader('Cache-Control', 's-maxage=86400');
        return res.status(200).json(query_product);
    }
    else
    {
      results = await db.query("SELECT * FROM `pages` WHERE `categories_id` = '" + catid + "' AND status = '1' ");
      res.setHeader('Cache-Control', 's-maxage=86400');
      return res.status(200).json(results);
    }
    
  } catch (error) {
    return res.status(500).json({ error });
  }
};
