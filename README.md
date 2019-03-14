# MVC ReactJS
Here, I am using .Net MVC4 application and  React@16 CDN link to respactive view. where I am calling created React Component.
Kindly see the solution folder structure
	
	----------------------------------------------------------------------------------------------------------------------------
	|-MVCReactJSExamples (project)
		|-Controllers  (have action method)
		|   |-HomeController.cs
		|   |-ReactJSButtonController.cs ( have action method Index,ReactConst)
		|   |-ReactJSController.cs ( have action method Index,ReactLoadData,ReactLoadDataButtonClick, ReactJSFilterData,ReactBootstrapTable, ReactBootstrapTableCRUD and other method that return data)
		|
		|-Scripts
		|   |-reactjs  ( based on data we manipulate DOM)
		|   |   |-FilterDataComponent.jsx
		|   |   |-HelloWorld.jsx
		|   |   |-ProductLoadDataButtonClickComponent.jsx
		|   |   |-ProductLoadDataComponent.jsx
		|   |   |-ProductTableComponent.jsx
		|   |   |-ReactBootstrapTableComponent.jsx
		|   |   |-ReactBootstrapTableCRUDComponent.jsx
		|   |   |-TextBoxComponent.jsx
		|   | 
		|   |-reactjscomponent (Basic react component)
		|   |     |-ButtonComponent.jsx
		|   |     |-ChildButtonComponent.jsx
		|   |     |-ChildCompReceivePropComponent.jsx
		|   |     |-TextBoxChangeEventUpdateStateComponent.jsx (explain state and props of component, and pass data between component)
		|   |     |-TextBoxComponent.jsx
		|   |     |-UseConstComponent.jsx
		|   |     |- 
		|   |     |- 
		|-Views
		|   |-Home (provide other view link that have react component example)
		|   |	|-Index.cshtml ( have example link)
		|   |	 
		|   |-ReactJS
		|   |   |-Index.cshtml  ( React@16 CDN Link, and  HelloWorld.jsx)
		|   |	|-ReactJSFilterData.cshtml ( take user input and filter data)
		|   |	|-ReactLoadData.cshtml  
		|   |	|-ReactLoadDataButtonClick.cshtml  
		|   |	|-ReactBootstrapTable.cshtml  ( here I am using 
		|   |	|-ReactBootstrapTableCRUD.cshtml  
		|   |-ReactJSButton (basic example of reactJS component)
		|   |     |-Index.cshtml  
		|   |     |-ReactConst.cshtml ( use of const instead of component  )
		|   |

	----------------------------------------------------------------------------------------------------------------------------

     ReactJS CDN
     <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
     <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
     Since we are using .Net MVC application, below is the example how am i using in below file Path "ReactJS/Index.cshtml"
	
	-------------ReactJS/Index.cshtml-------------------------------------------------------------------------------------------
 	     @{
 	         ViewBag.Title = "Index";
 	     }
 	     <div>ReactJS example</div>
 	     <div id="root" class="container"></div>

 	     @section Scripts{
   	       @*<script src="~/Scripts/react/react-0.12.2.min.js"></script>*@
  	        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
   	       <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
 		
   	       <script type="module" src="@Url.Content("~/Scripts/reactjscomponent/HelloWorld.jsx")"></script> 
  	    }    
	----------------------------------------------------------------------------------------------------------------------------
		For BootstrapTable you can use any one of link, I have use in two example 
		1. view > ReactBootstrapTable.cshtml 
			and react component  Scripts>ReactBootstrapTableComponent.jsx where I have make ajax call to
			bring script/dummydata/sampleProduct.json data and bind the grid
		2. view > ReactBootstrapTableCRUD.cshtml 
			and react component Scripts>ReactBootstrapTableCRUDComponent.jsx here only in UI I have perform CRUD 
			operation on  BootstrapTable data.
			
			
		 <script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap-table/4.3.1/react-bootstrap-table.js"  >
        <script>  
		-----OR-----
       <script type="text/javascript" src='@Url.Content("~/Scripts/react-bootstrap-table-4.3.1.js")'></script>
