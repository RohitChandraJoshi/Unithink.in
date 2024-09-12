const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const app = express();
dotenv.config(); 

const PORT = process.env.PORT || 5000;

app.use(cors());  // Allow all origins
app.options('*', cors()); 
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const countryRoutes = require('./Country'); 
const countryDetailsRoutes = require('./CountryDetails'); 
const faqRoutes = require('./faq'); 
const coursesRoutes = require('./Courses'); 
const coursesDetailsRoutes = require('./CoursesDetails'); 
const contactRoutes = require('./Contact'); 
const registrationRoutes = require('./Registration'); // Add this line
const skillingRoute = require('./Skilling');
const blogRoutes = require('./Blogs');  // Add this line
const blogDetailsRoutes = require('./BlogsDetails');  // Add this l
const SkillDetailsRoutes = require('./SkillsDetails')

app.use('/api/country', countryRoutes);
app.use('/api/countryDetails', countryDetailsRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/coursesdetails', coursesDetailsRoutes);
app.use('/api/consultation', contactRoutes); 
app.use('/api/register', registrationRoutes); // Add this line
app.use('/api/skilling', skillingRoute);
app.use('/api/blogs', blogRoutes);  // Add this line to serve blogs list
app.use('/api/blogDetails', blogDetailsRoutes);  // Add this line to serve blog details
app.use('/api/skillingDetails', SkillDetailsRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
