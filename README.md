# MVC ReactJS
Here, I am using .Net MVC4 application and  React@16 CDN link to respactive view. where I am calling created React Component.
Kindly see the solution folder structure
	-----------------------------------------------------------------------------------------------------------------------------------
	|-MVCReactJSExamples (project)
		|-Controllers  (have acton method)
		|    |-HomeController.cs
		|    |-ReactJSButtonController.cs
		|    |-ReactJSController.cs
		|
		|-Scripts
		|    |-reactjscomponent
		|         |-HelloWorld.jsx
		|         |-TextBoxComponent.jsx
		|         |-TextBoxChangeEventUpdateStateComponent.jsx
		|         |-ChildButtonComponent.jsx (eplain state and props of component, and pass data between component)
		|         |-ChildCompReceivePropComponent.jsx
		|         |-ProductTableComponent.jsx
		|         |-ButtonComponent.jsx
		|         |-FilterDataComponent.jsx
		|-Views
		|   |-Home (provide other view link that have react component example)
		|   |-ReactJS
		|   |     |-Index.cshtml  ( React@16 CDN Link, and  HelloWorld.jsx)
		|   |-ReactJSButton
		|   |     |-Index.cshtml ( React@16 CDN Link, and  ButtonComponent.jsx and other component that is imported in ButtonComponent)
		|   |     |-ReactJSFilterData.cshtml ( React@16 CDN Link, and ProductTableComponent.jsx, FilterDataComponent.jsx)
		|   |
	-------------------------------------------------------------------------------------------------------------------------------------
 
 ReactJS CDN
     <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
     <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
     Since we are using .Net MVC application, below is the example how am i using in below file Path "ReactJS/Index.cshtml"
	-------------ReactJS/Index.cshtml----------------------------------------------------------------------------------------------------
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
     --------------------------------------------------------------------------------------------------------------------------------------

