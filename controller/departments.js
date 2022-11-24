const db = require("../db")

const getAllDepartments = async (_req, res) => {
    try {
        const queryRes = await db.query("SELECT * FROM departments")
        res.status(200).json({ ...queryRes.rows })
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}

const addDepartment = async (req, res) => {
    try {
        const queryRes = await db.query(`INSERT INTO departments
        (full_name, short_code, hod_lecturer_id)
        VALUES ($1, $2, $3) RETURNING *`,
            [req.body.full_name, req.body.short_code, req.body.hod_lecturer_id])
        res.status(200).send({ ...queryRes.rows })
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}

const getAllLecturersByDepartment = async (req, res) => {
    try {
        const queryRes = await db.query(`
            SELECT * FROM lecturers WHERE department = $1`,
            [req.query.departmentId])
        res.status(200).send({ ...queryRes.rows })
    } catch (e) {
        console.log(e)
        res.status(500).end()
    }
}

module.exports = {
    getAllDepartments,
    addDepartment,
    getAllLecturersByDepartment,
}
