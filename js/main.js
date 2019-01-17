
var table = null;
$(document).ready(function() {
    prepareDataTable();
    prepareTimeAgo();
}); 

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
})

function prepareDataTable(){
table = $('#register').DataTable({
        select: true,
        data: sampleData,
        columns: colDefs,
        pagingType: 'full_numbers',
        lengthMenu: [3, 6, 9, 12, 15, 18, 20],
        pageLength: 6,
        fnDrawCallback: function() {
            $("#register thead").remove();
        }
    });
    table
        .on('select', function(e, dt, type, indexes) {
            var rowData = table.rows(indexes).data().toArray();
            console.log(rowData);
        })
        .on('deselect', function(e, dt, type, indexes) {
            var rowData = table.rows(indexes).data().toArray();
        });

    $('#btToggleDisplay').on('click', function() {
        $("#register").toggleClass('cards')
        $("#register thead").toggle()
    });
}

function prepareTimeAgo() {
    var elements = document.getElementsByClassName('usage');
    
    for (var i in elements) {
        var $this = elements[i];
        if (typeof $this === 'object') {
            var text = $this.innerText;
            $this.innerHTML = '<abbr class="timeago" title="' + text + '">' + text + '</abbr>';
        }
    }
    timeAgo();
}


var sampleData = [{
        "GITTIGIYER": "ABC FiRMASI",
        "GELDIGIYER": "XYZ FİRMASI",
        "KONU_ACIKLAMA": "TOPLANTI",
        "GONDERME_TARIHI": "14/01/2019 14:07:55",
    },
    {
        "GITTIGIYER": "MN FİRMASI",
        "GELDIGIYER": "XY FİRMASI",
        "KONU_ACIKLAMA": "TALEP",
        "GONDERME_TARIHI": "14/01/2019 14:07:14"
    }
];

var colDefs = [{
        data: "GITTIGIYER",
        name: "GITTIGIYER",
        title: "Gittiği Yer",
        visible: true,
        render: function(data, type, full, meta) { return '<i class="material-icons tiny">arrow_upward</i>' + data.removeKurumAdi().toCamelCase(); },
        createdCell: function(td, cellData, rowData, row, col) {
            $(td).attr('data-toggle', 'tooltip').attr('title', 'Gittiği Yer');
        }
    },{
        data: "GELDIGIYER",
        name: "GELDIGIYER",
        title: "Geldiği Yer",
        visible: true,
        render: function(data, type, full, meta) { return '<i class="material-icons tiny">arrow_downward</i>' + data.removeKurumAdi().toCamelCase(); },
        createdCell: function(td, cellData, rowData, row, col) {
            $(td).attr('data-toggle', 'tooltip').attr('title', 'Geldiği Yer');
        }
    },  {
        data: "GONDERME_TARIHI",
        name: "GONDERME_TARIHI",
        title: "Geliş Tarihi",
        visible: true,
        render: function(data, type, full, meta) { return '<i class="material-icons tiny">calendar_today</i><span class="usage">' + data + '</span>'; },
        createdCell: function(td, cellData, rowData, row, col) {
            $(td).attr('data-toggle', 'tooltip').attr('title', 'Geliş Tarihi');
        }
    }, {
        data: "KONU_ACIKLAMA",
        name: "KONU_ACIKLAMA",
        title: "Konu Açıklama",
        visible: true,
        render: function(data, type, full, meta) { return '<i class="material-icons tiny">notes</i><span>' + data.toCamelCase(); },
        createdCell: function(td, cellData, rowData, row, col) {
            $(td).attr('data-toggle', 'tooltip').attr('title', 'Konu Açıklama');
        }
    }, {
        orderable: false,
        data: 'Actions',
        name: 'Actions',
        orderable: false,
        defaultContent: '',
        title: 'Actions',
        visible: true,
        createdCell: function(td, cellData, rowData, row, col) {
            var $ctl = $('<button type="button" class="btn btn-primary"><i class="material-icons tiny">attach_file</i><span>Ek Listesi</span></button>');
            $(td).append($ctl);
        }
    }
];