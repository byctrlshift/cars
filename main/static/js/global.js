$(function () {
    //glue nav
    var navPos,
        winPos,
        navHeight;

    function refreshVar() {
        navPos = $("header").offset().top;
        navHeight = $("header").outerHeight(true);
    }

    refreshVar()
    $(window).scroll(function () {
        winPos = $(window).scrollTop();
        if (winPos >= navPos) {
            $("header").addClass("fixed shadow");
            $(".clone-nav").show();
        }
        if (winPos == 0) {
            $("header").removeClass("fixed shadow");
            $(".clone-nav").hide();
        }
    });

    $("<div class='clone-nav'></div>").insertBefore("header").css("height", navHeight).hide();

    $('.yearselect').yearselect();
    $('.yrselectdesc').yearselect({step: 5, order: 'desc'});
    $('.yrselectasc').yearselect({order: 'asc'});

    $('#find_cars').click(function () {
        data = {}

    })


    $('#filter_brand').change(function () {
        console.log(this.value)
        $.get('http://localhost:8000/ajax/models/' + this.value, function(data)
        {
            $(".result").html(data);
            console.log(data);
            $('#filter_model').html('')
            for (let item of data.data) {
                console.log(item.name)
                $('#filter_model').append(`<option value="${item.id}">${item.name}</option>`)
            }

        })
    });
// });).success(function (data) {
//             console.log('good', data)
//         }).error(function (data) {
//             console.log('bad', data)
//         })
//     });

            $('.toggle').click(function (e) {
                e.preventDefault();

                var $this = $(this);

                if ($this.next().hasClass('show')) {
                    $this.next().removeClass('show');
                    $this.parent().removeClass('show');
                    $this.next().slideUp(350);

                } else {
                    $this.parent().parent().find('li .inner').removeClass('show');
                    $this.parent().parent().find('li .inner').slideUp(350);
                    $this.next().toggleClass('show');
                    $this.parent().toggleClass('show');
                    $this.next().slideToggle(350);
                }
                if ($this.parent().hasClass('show')) {
                    $this.next().on("mouseleave", function () {
                        $this.next().removeClass('show');
                        $this.parent().removeClass('show');
                        $this.next().slideUp(350);
                    })
                }

            });

//price
            $('.price_pick input').bind('keypress', function (event) {
                var regex = new RegExp("^[0-9]+$");
                var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (!regex.test(key)) {
                    event.preventDefault();
                    return false;
                }
            });

// button show_more/hide 
            $(".about_car").elimore({
                maxLength: 340
            });
            var about_w = $(".description").width();
            $(".about_car").width(about_w);
            $(window).resize(function () {
                refreshVar();
                var about_w = $(".description").width();
                $(".about_car").width(about_w);
            })


            //pit to top
            $(".star").on("click", function () {
                $(this).toggleClass("clicked");
            });

            // Chart.platform.disableCSSInjection = true;
            //chart
            // Any of the following formats may be used
            let canvas = document.getElementById("myChart");
            let ctx = canvas.getContext("2d");
            let masPopChart = new Chart(myChart, {
                type: 'line',
                data: {
                    labels: ['0', '1', '2', '3', '4'],
                    datasets: [{
                        label: null,
                        data: [
                            16000,
                            10000,
                            20000,
                            15000,
                            25000
                        ],
                        backgroundColor: "",
                        borderColor: "#2482C2",
                        borderWidth: 2,
                        steppedLine: false
                    }],

                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                        }],
                        yAxes: [{
                            display: false,
                        }]
                    },
                    tooltips: {
                        enabled: false
                    }
                }
            });
        }
    )