let AJAX_URL='/HouseProphecy.aspx';
if(process.env.NODE_ENV==='development'){
   AJAX_URL="http://localhost:57861/HouseProphecy.aspx";
}

export {AJAX_URL};