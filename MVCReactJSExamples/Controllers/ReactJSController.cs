using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactJSExamples.Controllers
{
    public class ReactJSController : Controller
    {
        // GET: ReactJS
        public ActionResult Index()
        {
            return View();
        } 
       
        public ActionResult ReactLoadData()
        {
            return View();
        }
        public ActionResult ReactLoadDataButtonClick()
        {
            return View();
        }
        public ActionResult ReactJSFilterData()
        {
            return View();
        }
        public ActionResult ReactBootstrapTable()
        {
            return View();
        }
        public ActionResult ReactBootstrapTableCRUD()
        {
            return View();
        }

        //-------------------------------------------
        public JsonResult GetMessage()
        {
            return Json(new { result = "Hello World From ReactJS Controller" }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetProductItems()
        {
            IList<Product> lst = GetAllProduct();
            return Json(new { result = lst }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult GetProductItem(string item)
        {
            IList<Product> lst = GetAllProduct();
            List<Product> flst = lst.Where(x => x.item.ToUpper().Contains(item.ToUpper())).ToList();
            return Json(new { result = flst });
        }
        private IList<Product> GetAllProduct()
        {
            return new List<Product> {
                new Product { item = "A1", description = "A1 apple" },
                new Product { item = "A2", description = "A2 apple" },
                new Product { item = "A3", description = "A3 apple" },
                new Product { item = "A4", description = "A4 apple" },
                new Product { item = "A5", description = "A5 apple" },
                new Product { item = "A6", description = "A6 apple" },
                new Product { item = "A7", description = "A7 apple" },
                new Product { item = "A8", description = "A8 apple" },
                new Product { item = "A9", description = "A9 apple" },
                 new Product { item = "A10", description = "A10 apple" },
           };
        }
        public class Product
        {
            public string item { get; set; }
            public string description { get; set; }
        }
    }
}