const table = require('./../model/model');
module.exports = function (router) {
        router.get('/',(req,res)=>{
            res.render('index');
        });
        router.get('/san-pham/:loai',(req,res)=>{
            table.sanpham.find({path:req.params.loai}).exec((err,result)=>{
                res.render('view_san_pham',{name:result[0].name,result:result[0].url})
            })
        });
        router.get('/cong-ty',(req,res)=>{
            res.render('congty');
        });
        router.get('/vat-lieu',(req,res)=>{
            res.render('vatlieu');
        });
        router.get('/san-pham',(req,res)=>{
            res.render('sanpham');
        });
        router.get('/tin-tuc',(req,res)=>{
            table.congtrinhnoibat.find({}).exec((err,result)=>{
                console.log(result)
               // res.render('tintuc',{result:result[0].url})
            })
        });
        router.get('/lien-he',(req,res)=>{
            res.render('lienhe')
        });



};