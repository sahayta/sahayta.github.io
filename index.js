$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "data/needhelp.json",
        columns: [
            "State", 
            {dataField : "District", visible: false},
            {dataField : "City", visible: false}, 
            {dataField : "Pincode", visible: false}, 
            "Name", 
            "Condition", 
            {dataField : "Phone", visible: false}, 
            "Emergency", 
            {dataField : "Status", visible: false},
            {dataField : "Priority", visible: false}
        ],
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
    
    $("#gridContainer1").dxDataGrid({
        dataSource: "data/needhelp.json",
        columns: [
            "State", 
            {dataField : "District", visible: false},
            {dataField : "City", visible: false}, 
            {dataField : "Pincode", visible: false}, 
            "Name", 
            "Condition", 
            {dataField : "Phone", visible: false}, 
            "Emergency", 
            {dataField : "Status", visible: false},
            {dataField : "Priority", visible: false}
        ],
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
