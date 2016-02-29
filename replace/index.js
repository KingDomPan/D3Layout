$(document).ready(function() {
  var updater = new Updater();
  updater.init();
  updater.start();
});

function Updater() {
  this.oldNum = 0; // 初始化现有服务数量, 默认为0个
  this.newNum = 0; // 初始化要更新后的服务数量, 默认为0个

  this.r = 1;

  this.oldServiceTemplate = '<div class="animated service"></div>';
  this.newServiceTemplate = '<div class="animated service success"></div>';

  this.main = $('.mian');
  this.old = $('.old');
  this.new = $('.new');

  this.setNum = function(oldNum, newNum) {
    this.oldNum = oldNum;
    this.newNum = newNum;
  };

  this.init = function() {
    var data = this.request();
    this.setNum(data.old, data.new);
    for (var i = 0; i < data.old; i++) {
      $(this.oldServiceTemplate).addClass('fadeIn').appendTo(this.old);
    }
    for (var j = 0; j < data.new; j++) {
      $(this.newServiceTemplate).addClass('fadeIn').appendTo(this.new);
    }
  };

  this.request = function() {

    if (this.r === 1) {
      this.r = 2;
      return {
        old: 6,
        new: 0
      };
    } else if (this.r === 2) {
      this.r = 3;
      return {
        old: 5,
        new: 1
      };
    } else if (this.r === 3) {
      this.r = 4;
      return {
        old: 4,
        new: 2
      }
    } else if (this.r === 4) {
      this.r = 5;
      return {
        old: 3,
        new: 3
      }
    } else if (this.r === 5) {
      this.r = 6;
      return {
        old: 2,
        new: 4
      }
    } else if (this.r === 6) {
      this.r = 7;
      return {
        old: 1,
        new: 5
      }
    } else if (this.r === 7) {
      this.r = 8;
      return {
        old: 0,
        new: 6
      }
    }
  };

  this.diff = function(data) {
    var diff = {
      old: Math.abs(data.old - this.oldNum),
      new: Math.abs(data.new - this.newNum)
    };
    this.setNum(data.old, data.new);
    return diff;
  };

  this._delete = function(diffOld) {
    var $oldService = this.old.find('.service');
    var $delete = this.old.find('.service').filter(function(index) {
      return (index + 1) > ($oldService.length - diffOld);
    });
    $delete.each(function(item) {
      var self = this;
      $(self).addClass('fadeOut')
        .one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          function() {
            $(self).remove();
          });
    });
  };

  this._add = function(diffNew) {
      for (var i = 0; i < diffNew; i++) {
        $(this.newServiceTemplate).addClass('fadeIn').appendTo(this.new);
      }
    },

    this.update = function() {
      var data = this.request();
      var diff = this.diff(data);
      var diffOld = diff.old;
      var diffNew = diff.new;
      this._delete(diffOld);
      this._add(diffNew);
      if (data.old === 0) clearInterval(this.timer);
    };

  this.uninit = function() {
    this.old.html('');
    this.new.html('');
  };

  this.start = function() {
    var self = this;
    this.timer = setInterval(function() {
      self.update();
    }, 2000);
  };

}
