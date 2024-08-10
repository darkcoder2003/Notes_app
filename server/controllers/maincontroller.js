/**
 * GET/
 * HOMEPAGE
*/

exports.homepage = async(req,res) => {
    const locals = {
        title : 'NodeJs Notes',
        description : 'Free NodeJs Notes App'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * GET/
 * ABOUT
*/

exports.about = async(req,res) => {
    const locals = {
        title : 'About - NodeJs Notes',
        description : 'Free NodeJs Notes App'
    }
    res.render('about',locals);
}