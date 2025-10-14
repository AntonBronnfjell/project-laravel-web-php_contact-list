Ext.define('ExtMVC.view.contato.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.contatogrid',
    
    requires: ['Ext.toolbar.Paging'],
    
    iconCls: 'icon-grid',

    title : 'Contatos',
    store: 'Contatos',

    columns: [{
    	header: "Nombre",
		width: 170,
		flex:1,
		dataIndex: 'name'
	},{
		header: "Apellido",
		width: 160,
		flex:1,
		dataIndex: 'phone'
	},{
		header: "Fecha Nacimiento",
		width: 160,
		flex:1,
		dataIndex: 'date'
	},{
		header: "Tipo de Cuenta",
		width: 170,
		flex:1,
		dataIndex: 'email'
	}],
	
	initComponent: function() {
		
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Agregar',
                action: 'add'
            },{
                iconCls: 'icon-delete',
                text: 'Borrar',
                action: 'delete'
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'top',
            store: 'Contatos',
            displayInfo: true,
            displayMsg: 'Mostrando Usuarios {0} - {1} de {2}',
            emptyMsg: "Usuarios."
        }];
		
		this.callParent(arguments);
	}
});
