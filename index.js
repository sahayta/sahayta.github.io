$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "data/needhelp.json",
        columns: ["State", "District", "City", "Pincode", "Name", "Condition", "Phone", "Emergency", "Status", "Priority"],
        showBorders: true
    });
});
