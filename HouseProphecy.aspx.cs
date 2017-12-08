using System;
using System.Web;
using System.Web.UI;
using System.Configuration;
using static WebForecast.Components.Constants;
using HouseProphecy.Components;
using static HouseProphecy.Components.Constants;

namespace HouseProphecy
{
    public partial class HouseProphecy : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {           
            if (!IsPostBack)
            {
                string result = string.Empty;
                if (IsAjaxRequest(Request))
                {
                    try
                    {
                        HouseProphecyLib houseProphecyLib = new HouseProphecyLib(JSObjectOperation.Instance.DeserializeJSObject<ForecastObject>(Request.Form[0]));                      
                        //try to predict price
                        if(houseProphecyLib.Json.Action == HPModelConstants.GetPrice)
                        {
                            result = houseProphecyLib.PredictPrice().ToString();
                        }
                        //get info from DataBase
                        else if(houseProphecyLib.Json.Action == HPModelConstants.GetInfo)
                        {
                            houseProphecyLib.SetConnectionString(ConnectionString());
                            result = houseProphecyLib.GetPropertyInfoList();
                        }
                    }
                    catch(Exception ex)
                    {
                        Response.Write(ex.Message);
                        Response.End();
                    }
                    Response.Write(result);
                    Response.End();
                }
            }
        }

        //checks if the respobse is async
        public bool IsAjaxRequest(HttpRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException("request");
            }
            var context = HttpContext.Current;
            var isCallbackRequest = false; // callback requests are ajax requests
            if (context != null && context.CurrentHandler != null && context.CurrentHandler is System.Web.UI.Page)
            {
                isCallbackRequest = ((System.Web.UI.Page)context.CurrentHandler).IsCallback;
            }
            return isCallbackRequest || (request["X-Requested-With"] == "XMLHttpRequest") || (request.Headers["X-Requested-With"] == "XMLHttpRequest");
        }

        #region private methods
        /// <summary>
        /// returns default connectionString
        /// </summary>
        private string ConnectionString()
        {   
               
            string connectionStringName = ConnectionNames.ForecastAzureConnection;
            foreach(ConnectionStringSettings connectionStringSettings in ConfigurationManager.ConnectionStrings)
            {
                if(string.Equals(connectionStringSettings.Name, connectionStringName))
                {
                    return connectionStringSettings.ConnectionString;
                }
            }
            return string.Empty;              
            
        }
        #endregion
    }
}