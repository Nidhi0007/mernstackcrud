const router = require('express').Router();
let Students = require('../models/Student');

router.route('/getUser').get((req, res) => {
    Students.find()
      .then(Students => res.json(Students))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.post('/add',(req, res) => {
    const name = req.body.name;
    const marks=req.body.marks;
    
      const newStudent = new Students({
          name,
          marks
      });
    newStudent.save()
    .then(() => res.json({message:'student added!'}))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    Students.findByIdAndDelete(req.params.id)
      .then(() => res.json('Student deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;