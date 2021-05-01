$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "data/needhelp.json",
        columns: ["State", "District", "City", "Pincode", "Name", "Condition", "Phone", "Emergency", "Status", "Priority"],
        showBorders: true,
        paging: {
            pageSize: 10
        },  
        groupPanel: {
            visible: true
        },
        grouping: {
            autoExpandAll: true,
        },
        searchPanel: {
            visible: true
        },
    });
});
