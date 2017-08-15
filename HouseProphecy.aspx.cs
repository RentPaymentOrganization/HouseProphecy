using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using HouseProphecy.Components;
using System.Globalization;
using RentPayment.DataProviders;
using System.Data;
using WebForecast.Components;
using System.Web.Script.Serialization;

namespace HouseProphecy
{
    public partial class HouseProphecy : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (IsAjaxRequest(Request))
                {
                    var s= Request.Form[0];
                    ForecastJSON user = JSObjectOperation.Instance.DeserializeJSObject<ForecastJSON>(Request.Form[0]);
                    Response.Write("request ok");
                    Response.End();
                }
            }
        }
        
        public bool IsAjaxRequest(HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }
            var context = HttpContext.Current;
            var isCallbackRequest = false;// callback requests are ajax requests
            if (context != null && context.CurrentHandler != null && context.CurrentHandler is System.Web.UI.Page)
            {
                isCallbackRequest = ((System.Web.UI.Page)context.CurrentHandler).IsCallback;
            }
            return isCallbackRequest || (request["X-Requested-With"] == "XMLHttpRequest") || (request.Headers["X-Requested-With"] == "XMLHttpRequest");
        }
    }
}