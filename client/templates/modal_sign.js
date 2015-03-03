Meteor.startup(function() {
	var shareDialogInfo = {
		template: Template.appShareDialog,
		title: "Houstaurants",
		modalDialogClass: "share-modal-dialog",
		modalBodyClass: "share-modal-body",
		modalFooterClass: "share-modal-footer",
		removeOnHide: true,
		buttons: {
			"cancel": {
				class: 'btn-danger',
				label: 'Cancel'
			},
			"ok": {
				closeModalOnClick: false,
				class: 'btn-info',
				label: 'Ok'
			}
		},
		doc: { 
			app: "Houstaurants" 
		}
	}
	
	var rd = ReactiveModal.initDialog(shareDialogInfo);
});