const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  const filePath = path.join(__dirname, 'BlogsDetails.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading data' });  // Responding with JSON error
    }

    try {
      const blogDetails = JSON.parse(data);
      const blog = blogDetails.find(blog => blog.id.toString() === blogId);

      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });  // Responding with JSON error
      }

      res.json(blog);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return res.status(500).json({ error: 'Error parsing JSON' });  // Responding with JSON error
    }
  });
});

module.exports = router;
