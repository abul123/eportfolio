var express = require('express');
var router = express.Router();

// Require controller modules.
var about_controller = require('../controllers/about');
var project_controller = require('../controllers/projectController');
var projectdetail_controller = require('../controllers/projectdetailController');
var experience_controller = require('../controllers/experienceController');
var imageUpload_controller = require('../controllers/imageuploadController');
//About Controler

router.get('/about', about_controller.about_get);
router.post('/about/create', about_controller.about_create_post);



//Project controller
router.post('/project/create', project_controller.project_create_post);
router.post('/projectdetail/create', projectdetail_controller.project_create_detail_post);
router.get('/projectdetail/:id', project_controller.projectDetails_get);

router.get('/project', project_controller.project_get);
router.get('/project/:id', projectdetail_controller.projectDetail_get);

router.post('/upload',imageUpload_controller.s3_upload);


router.post('/experience/create', experience_controller.experience_create_post);
router.get('/experience',experience_controller.exp_get);
module.exports = router;
