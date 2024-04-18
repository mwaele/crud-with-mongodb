const express = require("express");
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.router("/").get(getAllBlogs).post(createBlog)
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;