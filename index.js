$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "data/needhelp.json",
        columns: [
            {dataField : "State", width: 125},
            {dataField : "District", visible: false, width: 125},
            {dataField : "City", visible: false}, 
            {dataField : "Pincode", visible: false}, 
            {dataField : "Name", width: 125}, 
            {dataField : "Condition", width: 300}, 
            {dataField : "Phone", visible: false}, 
            {dataField : "Emergency", width: 20},
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
            {dataField : "State", width: 125},
            {dataField : "District", visible: false, width: 125},
            {dataField : "City", visible: false}, 
            {dataField : "Pincode", visible: false}, 
            {dataField : "Name", width: 125}, 
            {dataField : "Condition", width: 300}, 
            {dataField : "Phone", visible: false}, 
            {dataField : "Emergency", width: 20},
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
