const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/:skillId', (req, res) => {
  const skillId = req.params.skillId;
  const filePath = path.join(__dirname, 'SkillsDetails.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).send('Error reading data');
    }

    try {
      const courseDetails = JSON.parse(data);
      const course = courseDetails.find(course => course.skillId === skillId);

      if (!course) {
        return res.status(404).send('Course not found');
      }

      res.json(course);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
  });
});

module.exports = router;
