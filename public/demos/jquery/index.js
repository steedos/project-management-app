$(function(){
    
    $("#gridContainer").dxDataGrid({
        showBorders: true,
        dataSource: {
            store: {
                type: "odata",
                version: 4,
                url: "/api/v4/project_task__c"
            },
            select: [
                "name",
                "project__c",
                "assignees__c",
                "due_date__c",
                "priority__c",
                "completed__c",
                "state__c",
                "owner"
            ],
        },
        columns: [
            {
                dataField: "name",
                width: 250
            },
            "project__c",
            "assignees__c",
            "due_date__c",
            "priority__c",
            "completed__c",
            "state__c",
            "owner"
        ],
        editing: {
            mode: 'row',
            allowUpdating: true, 
            allowAdding: true, 
            allowDeleting: true,
            confirmDelete: true
        }
    });
});