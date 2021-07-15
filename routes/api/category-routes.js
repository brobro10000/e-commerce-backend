const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const allCategories = await Category.findAll();
  res.json(allCategories)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryById = await Category.findOne({
    where: {
      id: req.params.id
    }
  });

  res.json(categoryById)
});

router.post('/', async (req, res) => {
  // create a new category
  const createCategory = await Category.create({
    category_name: req.body.category_name
  })

  res.json(createCategory)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  })

  res.json(updateCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })

  res.json(deleteCategory)
});

module.exports = router;
