async function getDate(req, res, next) {
    try {
        console.log('test');
        // console.log(req.params.date);
        // res.json();
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}