
(function(){


	 function notifyUser(content) {
               var title;
               var options;

                  title = 'What up';
                  options = {
                     body: content,
                     tag: 'preset',
                     icon : ''
                  };

               Notification.requestPermission(function() {
                  var notification = new Notification(title, options);
               });
            }

    $(window).ready(function(){
    	notifyUser("Its Senti time");
    	d = new Date();

    	$("#ihd").val(d.getDay());
    	$("#ihm").val(d.getMonth());
    	$("#ihy").val(d.getFullYear());

    })

	function Calendar(year, month) { 
		days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
		  var table = ['<table><tr>']
			for(i=0;i<7;i++){
				table.push("<td class=\"dayt\">"+days[i]+"</td>");
			}
			table.push("</tr>");

			  var mon = month ;
		  var d = new Date(year, mon)
		  for (var i=0; i<d.getDay(); i++) {
		    table.push('<td></td>')
		  }
		  while(d.getMonth() == mon) {
		    table.push('<td><span class="date">'+d.getDate()+'</span></td>')
		    if (d.getDay() % 7 == 6) {   // (4)
		      table.push('</tr><tr>')
		    }
		    d.setDate(d.getDate()+1)  
		  }
		  
		  for (var i=d.getDay(); i<7; i++) {
		    table.push('<td></td>')
		  }
		  table.push('</tr></table>')
		  return table.join('\n');
		}

	

	$.fn.serializeObject = function()
    {

    	/*
			Src : Douglous crockford
    	*/

        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

	var reminders = Backbone.Model.extend({
		urlRoot : "core/newTodo.php"
	})

	var UserData = Backbone.View.extend({
		el : "#cal-type-1",
		render : function(){
			var temp = _.template($("#todo-form-template").html(),{});
			d = new Date();
			y = ($("#ihy").val() === undefined) ? d.getFullYear() : $("#ihy").val();
			m = ($("#ihm").val() === undefined) ? d.getMonth(): $("#ihm").val();

			if($("#ihy").val() === undefined){
				$("#ihy").val(d.getFullYear());
			}
			if($("#ihm").val() === undefined){
				$("#ihm").val(d.getMonth());
			}
			$("#days").html(Calendar(y,m));
			this.$el.find("#remind").html(temp);
		},
		events: {
			'submit .new_remainder' : "newTodo",
			'click #days td' : "daySelect",
			'click #months > li' : "monthSelect",
			'change #year' : "yearSelect"
		},

		yearSelect : function(ev){
			$("#ihy").val($(ev.currentTarget).val());
		},

		newTodo : function(ev){
			router.navigate("home",{});
			d = new Date();
			if($("#ihd").val() === undefined){
				$("#ihd").val(d.getDay()+1);
			}  
			if($("#ihy").val() === undefined){
				$("#ihy").val(d.getFullYear());
			}
			if($("#ihm").val() === undefined){
				$("#ihm").val(d.getMonth()+1);
			}
			var formData = $(ev.currentTarget).serializeObject();
			var rm = new reminders();
			console.log($(ev.currentTarget).serialize());
			rm.save(formData , {
				success : function(data){
					notifyUser("Reminder Created");
					router.navigate("",{trigger : true});
				},
				error : function(er){
				}
			});
			return false;
		},

		daySelect : function(ev){

			var ele = $(ev.currentTarget).children(".date")[0]
			var vl = ele.innerHTML;
			
			temp = $("#days td.active");
			$(temp).removeClass("active")

			$(ele).parent().addClass("active");
			$("#ihd").val(vl);


		},

		monthSelect : function(ev){

			var ele = $(ev.currentTarget);
			var temp = $("#months li.active");
			$(temp).removeClass("active");
			$(ele).addClass("active");

			$("#ihm").val($(ele).attr("data-id"));

			this.render();

		}


	});

	var todayStuff = Backbone.Collection.extend({
		url : "core/getTimeline.php"
	})

	var todayModel = Backbone.Model.extend({
		urlRoot : "core/getTimeline.php"
	})

	var Timeline = Backbone.View.extend({
		el : "#thisday",
		render  : function(){
			$("#thisday").fadeIn();
			var temp = _.template($("#timeline-template").html(),{});
			$("#thisday").html(temp)
			var todaystuff = new todayStuff();
			var that = this;
				todaystuff.fetch({
					success : function(todaystuff){
						var temp = _.template($("#timeline-template").html(),{data : todaystuff.models});
						that.$el.html(temp);
						// console.log(JSON.parse(data))
					},
					error : function(er){
						alert("error");
						console.log(er);
					}
				});
		},
		events : {
			"click .modal-close" : "closeTimeline"
		},
		closeTimeline : function(){
			$("#thisday").fadeOut();
			router.navigate("",{trigger : true});
		}
	})

	var Router = Backbone.Router.extend({
		routes : {
			"" : "home",
			"today": "timeline"
		}
	});

	userData = new UserData();

	var router = new Router();
	// Home or Root of the app

	router.on("route:home" , function(){
		userData.render();
	});

	var timeline = new Timeline();

	router.on("route:timeline",function(){
		userData.render();
		timeline.render();
	})




	Backbone.history.start();
})()