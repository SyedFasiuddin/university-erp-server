const {
    getAllStudents,
    getStudentById,
    deleteStudentById,
    addStudent,
    getStudentLeaveById,
    addStudentLeaveById,
    getStudentAttendanceById,
    addStudentAttendanceById
} = require("../controller/students")
const { Router } = require("express")

const router = new Router()

router.get("/", getAllStudents)
router.get("/:id", getStudentById)
router.post("/", addStudent)
router.delete("/:id", deleteStudentById)
router.get("/:id/leave", getStudentLeaveById)
router.post("/:id/leave", addStudentLeaveById)
router.get("/:id/attendance", getStudentAttendanceById)
router.post("/:id/attendance", addStudentAttendanceById)

router.put("/:id", (req, res) => {
    res.send({
        "msg": req.params.id + " put"
    })
})

module.exports = router

