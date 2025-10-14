Ext.define('ExtMVC.view.contato.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.contatoform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Editar/Crear Contato',
    layout: 'fit',
    autoShow: true,
    width: 280,
    
    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },

                items: [
					{
					    xtype: 'textfield',
					    name : 'id',
					    fieldLabel: 'id',
					    hidden:true
					},    
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Nombre'
                    },
                    {
                        xtype: 'textfield',
                        name : 'phone',
                        fieldLabel: 'Apellido'
                    },
                    {
                        xtype: 'datefield',
                        name : 'date',
                        fieldLabel: 'Fecha Nacimiento'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Tipo Cuenta'
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Salvar',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
