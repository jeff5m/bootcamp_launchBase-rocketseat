const db = require('../../config/db');
const { date, grade } = require('../../lib/utils');

module.exports = {
  all(callback) {
    const newStudents = new Array()

    db.query(`SELECT * FROM students ORDER BY name ASC`, function (err, results) {
      if (err) throw `Database error! ${err}`
      for(student of results.rows) {
        const formatedGrade = grade(student.grade)
        newStudents.push({
          ...student,
          grade: formatedGrade
        })
      }
      callback(newStudents)
    })
  },
  create(data, callback) {
    const query = `
			INSERT INTO students (
				avatar_url,
				name,
				birth_date,
				email,
				grade,
				hours
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
		`;

    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.email,
      data.grade,
      Number(data.hours),
    ];

    db.query(query, values, function (err, results) {
      if (err)
        throw `Database error! ${err}`;
      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`
      SELECT *
      FROM students
      WHERE id = $1`, [id], function (err, results) {
      if (err) throw `Database error! ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
      UPDATE students SET
        avatar_url=($1),
        name=($2),
        birth_date=($3),
        email=($4),
        grade=($5),
        hours=($6)
      WHERE id = $7
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth_date).iso,
      data.email,
      data.grade,
      data.hours,
      data.id
    ]

    db.query(query, values, function (err, results) {
      if (err) throw `Database error! ${err}`

      callback()
    })
  },
  delete(id, callback) {
    db.query(`
      DELETE FROM students
      WHERE id = $1`, [id], function(err, results) {
        if (err) throw `Database error! ${err}`

        callback()
      })
  }
};