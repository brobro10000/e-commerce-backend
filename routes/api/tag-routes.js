const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
//?
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTags = await Tag.findAll({
    include:
      [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id',]
        }
      ]
  }
  )

  res.json(allTags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagById = await Tag.findOne({
    where: {
      id: req.params.id
    },
    include:
      [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
        }
      ]
  })

  res.json(tagById)
});

router.post('/', async (req, res) => {
  // create a new tag
  const createTag = await Tag.create({
    tag_name: req.body.tag_name
  })

  res.json(createTag)
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  })

  res.json(updateTag)
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  // delete a category by its `id` value
  const deleteTag = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })

  res.json(deleteTag)
});

module.exports = router;
