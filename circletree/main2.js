var pubs = {
  "name": "prod",
  "alias": "评论服务",
  "type": "thrift",
  "language": "java",
  "in_docker": true,
  "children": [{
    "name": "CommentSensitiveWordServ",
    "alias": "敏感词服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "ProductServ",
    "alias": "商品服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": [{
      "name": "managesecurity-service-storeadmin",
      "alias": "managesecurity-service-storeadmin",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }]
  }, {
    "name": "trade-promotion-serv",
    "alias": "商品排期服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "trade-comment-solr",
    "alias": "公共solr服务",
    "type": "solr",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "OrderBackEndServ",
    "alias": "订单还需评价商品服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "RefundServ",
    "alias": "售后服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": [{
      "name": "data_dict_refund_reason_serv",
      "alias": "data_dict_refund_reason_serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "deduct-serv",
      "alias": "deduct-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": [{
        "name": "return-pickup-serv",
        "alias": "return-pickup-serv",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": [{
          "name": "data_refund_complain_comment_serv",
          "alias": "data_refund_complain_comment_serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "data_dict_refund_reason_serv",
            "alias": "data_dict_refund_reason_serv",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "managesecurity-service-storeadmin",
            "alias": "managesecurity-service-storeadmin",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }]
        }]
      }, {
        "name": "refund_monitor_serv",
        "alias": "refund_monitor_serv",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }, {
        "name": "OrderServ",
        "alias": "订单服务",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": [{
          "name": "seckill-queue-task",
          "alias": "seckill-queue-task",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "settlement-assistant-serv",
          "alias": "settlement-assistant-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "managesecurity-service-storeadmin",
            "alias": "managesecurity-service-storeadmin",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }]
        }, {
          "name": "data_refund_complain_comment_serv",
          "alias": "data_refund_complain_comment_serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "account_transfer_serv",
          "alias": "account_transfer_serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "user_info",
          "alias": "user_info",
          "type": "http",
          "language": "ruby",
          "in_docker": false,
          "children": null
        }, {
          "name": "pay-result-handler-task",
          "alias": "pay-result-handler-task",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "seller-serv",
          "alias": "seller-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "seckill-queue-task",
            "alias": "seckill-queue-task",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "order-delivernotify-task",
            "alias": "order-delivernotify-task",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": [{
              "name": "manager_serv",
              "alias": "manager_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }]
          }, {
            "name": "manager_serv",
            "alias": "manager_serv",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "OrderServ",
            "alias": "订单服务",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "ComplainServ",
            "alias": "维权服务",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": [{
              "name": "refund-advance-permission_serv",
              "alias": "refund-advance-permission_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "data_dict_refund_reason_serv",
              "alias": "data_dict_refund_reason_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "prod-comment-server",
              "alias": "评论服务",
              "type": "thrift",
              "language": "java",
              "in_docker": true,
              "children": null
            }, {
              "name": "order-confirm-task",
              "alias": "order-confirm-task",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "manager_serv",
              "alias": "manager_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "data_refund_complain_comment_serv",
              "alias": "data_refund_complain_comment_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "OrderServ",
              "alias": "订单服务",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "return-address-serv",
              "alias": "return-address-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "promotion-serv",
              "alias": "promotion-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "orderDaybook-task",
                "alias": "orderDaybook-task",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "zhaoshang-thrift-frontend",
                "alias": "zhaoshang-thrift-frontend",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": [{
                  "name": "schedule-serv",
                  "alias": "schedule-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": [{
                    "name": "managesecurity-service-storeadmin",
                    "alias": "managesecurity-service-storeadmin",
                    "type": "thrift",
                    "language": "java",
                    "in_docker": false,
                    "children": null
                  }]
                }]
              }, {
                "name": "settlement-serv",
                "alias": "settlement-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": [{
                  "name": "deduct-serv",
                  "alias": "deduct-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "downupload_serv",
                  "alias": "downupload_serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": [{
                    "name": "downupload-confirm-task",
                    "alias": "downupload-confirm-task",
                    "type": "thrift",
                    "language": "java",
                    "in_docker": false,
                    "children": [{
                      "name": "downupload_serv",
                      "alias": "downupload_serv",
                      "type": "thrift",
                      "language": "java",
                      "in_docker": false,
                      "children": null
                    }, {
                      "name": "managesecurity-service-storeadmin",
                      "alias": "managesecurity-service-storeadmin",
                      "type": "thrift",
                      "language": "java",
                      "in_docker": false,
                      "children": null
                    }]
                  }]
                }, {
                  "name": "seller-serv",
                  "alias": "seller-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "zhaoshang-thrift-frontend",
                  "alias": "zhaoshang-thrift-frontend",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "OrderServ",
                  "alias": "订单服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "RefundServ",
                  "alias": "售后服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "ComplainServ",
                  "alias": "维权服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "promotion-serv",
                  "alias": "promotion-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }]
              }, {
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "deduct-serv",
              "alias": "deduct-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }]
          }]
        }, {
          "name": "pay-server",
          "alias": "pay-server",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "managesecurity-service-storeadmin",
            "alias": "managesecurity-service-storeadmin",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }]
        }, {
          "name": "settlement-serv",
          "alias": "settlement-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }]
      }, {
        "name": "managesecurity-service-storeadmin",
        "alias": "managesecurity-service-storeadmin",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }, {
        "name": "RefundServ",
        "alias": "售后服务",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }]
    }, {
      "name": "subject-serv-new",
      "alias": "subject-serv-new",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": [{
        "name": "data_dict_refund_reason_serv",
        "alias": "data_dict_refund_reason_serv",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }, {
        "name": "recommend-data-service",
        "alias": "recommend-data-service",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": [{
          "name": "recommender-themePavilion-service",
          "alias": "recommender-themePavilion-service",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }]
      }, {
        "name": "order-sendmail-task",
        "alias": "order-sendmail-task",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": [{
          "name": "order-sendmail_serv",
          "alias": "order-sendmail_serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "user_info",
            "alias": "user_info",
            "type": "http",
            "language": "ruby",
            "in_docker": false,
            "children": null
          }]
        }]
      }, {
        "name": "zhe800_zhaoshang_cpc",
        "alias": "zhe800_zhaoshang_cpc",
        "type": "http",
        "language": "ruby",
        "in_docker": false,
        "children": [{
          "name": "common-serv",
          "alias": "common-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "zhe800_zhaoshang_cpc",
            "alias": "zhe800_zhaoshang_cpc",
            "type": "http",
            "language": "ruby",
            "in_docker": false,
            "children": null
          }, {
            "name": "manager_serv",
            "alias": "manager_serv",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "OrderServ",
            "alias": "订单服务",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "product_image_serv",
            "alias": "product_image_serv",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }, {
            "name": "ProductServ",
            "alias": "商品服务",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }]
        }, {
          "name": "memcached[192.168.10.125:11211]",
          "alias": "memcached[192.168.10.125:11211]",
          "type": "memcached",
          "language": "",
          "in_docker": false,
          "children": [{
            "name": "zhe800",
            "alias": "zhe800",
            "type": "http",
            "language": "ruby",
            "in_docker": false,
            "children": [{
              "name": "common-serv",
              "alias": "common-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "prod-comment-server",
              "alias": "评论服务",
              "type": "thrift",
              "language": "java",
              "in_docker": true,
              "children": null
            }, {
              "name": "express-serv",
              "alias": "express-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "ComplainServ",
                "alias": "维权服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "stock-serv",
              "alias": "stock-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "zhe800_zhaoshang_cpc",
                "alias": "zhe800_zhaoshang_cpc",
                "type": "http",
                "language": "ruby",
                "in_docker": false,
                "children": null
              }, {
                "name": "seller_quality_task",
                "alias": "seller_quality_task",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "zhaoshang-thrift-frontend",
                "alias": "zhaoshang-thrift-frontend",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "product",
              "alias": "product",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "common-serv",
                "alias": "common-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "stock-serv",
                "alias": "stock-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "discount-serv",
                "alias": "discount-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": [{
                  "name": "discount-active-task",
                  "alias": "discount-active-task",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "seller_quality_serv",
                  "alias": "seller_quality_serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": [{
                    "name": "seller_quality_task",
                    "alias": "seller_quality_task",
                    "type": "thrift",
                    "language": "java",
                    "in_docker": false,
                    "children": null
                  }]
                }, {
                  "name": "OrderServ",
                  "alias": "订单服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }]
              }, {
                "name": "zhe800_zhaoshang_cpc",
                "alias": "zhe800_zhaoshang_cpc",
                "type": "http",
                "language": "ruby",
                "in_docker": false,
                "children": null
              }, {
                "name": "seller_quality_serv",
                "alias": "seller_quality_serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "subject-serv-new",
                "alias": "subject-serv-new",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "seller-serv",
                "alias": "seller-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "cart-serv",
                "alias": "cart-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": [{
                  "name": "OrderServ",
                  "alias": "订单服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }, {
                  "name": "promotion-serv",
                  "alias": "promotion-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }]
              }, {
                "name": "seller_quality_task",
                "alias": "seller_quality_task",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "zhaoshang-thrift-frontend",
                "alias": "zhaoshang-thrift-frontend",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "RefundServ",
                "alias": "售后服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "notification_serv",
                "alias": "notification_serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": [{
                  "name": "stock-serv",
                  "alias": "stock-serv",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": false,
                  "children": null
                }]
              }, {
                "name": "ComplainServ",
                "alias": "维权服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "promotion-serv",
                "alias": "promotion-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "recommender-similar-service",
              "alias": "recommender-similar-service",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "recommend-data-service",
                "alias": "recommend-data-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "discount-serv",
              "alias": "discount-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "subject-serv-new",
              "alias": "subject-serv-new",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "seller-serv",
              "alias": "seller-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "pay-server",
              "alias": "pay-server",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "score2cash-serv",
              "alias": "score2cash-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "managesecurity-service-storeadmin",
                "alias": "managesecurity-service-storeadmin",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "passport-service",
              "alias": "passport-service",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "settlement-serv",
              "alias": "settlement-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "activity-serv",
              "alias": "activity-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "recommend-data-service",
                "alias": "recommend-data-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "promotion-serv",
                "alias": "promotion-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "zhaoshang-thrift-frontend",
              "alias": "zhaoshang-thrift-frontend",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "recommender-topic-service",
              "alias": "recommender-topic-service",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "recommend-data-service",
                "alias": "recommend-data-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "OrderServ",
              "alias": "订单服务",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "memcached[192.168.10.95:11211]",
              "alias": "memcached[192.168.10.95:11211]",
              "type": "memcached",
              "language": "",
              "in_docker": false,
              "children": [{
                "name": "zhe800",
                "alias": "zhe800",
                "type": "http",
                "language": "ruby",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "recommender-guang2-service",
              "alias": "recommender-guang2-service",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "subject-serv",
              "alias": "subject-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "product_image_serv",
              "alias": "product_image_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "passport800",
              "alias": "passport800",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": [{
                "name": "account",
                "alias": "account",
                "type": "http",
                "language": "ruby",
                "in_docker": false,
                "children": null
              }, {
                "name": "memcached[192.168.10.178:11211]",
                "alias": "memcached[192.168.10.178:11211]",
                "type": "memcached",
                "language": "",
                "in_docker": false,
                "children": null
              }, {
                "name": "passport-service",
                "alias": "passport-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "grade",
                "alias": "grade",
                "type": "thrift",
                "language": "ruby",
                "in_docker": false,
                "children": [{
                  "name": "prod-comment-server",
                  "alias": "评论服务",
                  "type": "thrift",
                  "language": "java",
                  "in_docker": true,
                  "children": null
                }]
              }, {
                "name": "recommender-label-service",
                "alias": "recommender-label-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "product_backend",
              "alias": "product_backend",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "promotion-serv",
              "alias": "promotion-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "tb_shop",
              "alias": "tb_shop",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": [{
                "name": "shangcheng_erp_serv",
                "alias": "shangcheng_erp_serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "address-serv",
              "alias": "address-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "seckill-queue-task",
                "alias": "seckill-queue-task",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "OrderServ",
                "alias": "订单服务",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "managesecurity-service-storeadmin",
                "alias": "managesecurity-service-storeadmin",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "recommender-shop-service",
              "alias": "recommender-shop-service",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "recommend-data-service",
                "alias": "recommend-data-service",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "productsales-serv",
              "alias": "productsales-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "seller_quality_task",
                "alias": "seller_quality_task",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "managesecurity-service-storeadmin",
                "alias": "managesecurity-service-storeadmin",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "deliver_candy_server",
              "alias": "deliver_candy_server",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": null
            }, {
              "name": "score",
              "alias": "score",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": null
            }, {
              "name": "activity_server",
              "alias": "activity_server",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": null
            }, {
              "name": "bank_detail",
              "alias": "bank_detail",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": null
            }, {
              "name": "ProductServ",
              "alias": "商品服务",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "seller_quality_serv",
              "alias": "seller_quality_serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": null
            }, {
              "name": "nginx[172.17.0.9:443,80]",
              "alias": "nginx[172.17.0.9:443,80]",
              "type": "nginx",
              "language": "",
              "in_docker": false,
              "children": null
            }, {
              "name": "coupon-server",
              "alias": "coupon-server",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "managesecurity-service-storeadmin",
                "alias": "managesecurity-service-storeadmin",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "order-downup-serv",
              "alias": "order-downup-serv",
              "type": "thrift",
              "language": "java",
              "in_docker": false,
              "children": [{
                "name": "express-serv",
                "alias": "express-serv",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }, {
                "name": "managesecurity-service-storeadmin",
                "alias": "managesecurity-service-storeadmin",
                "type": "thrift",
                "language": "java",
                "in_docker": false,
                "children": null
              }]
            }, {
              "name": "user_info",
              "alias": "user_info",
              "type": "http",
              "language": "ruby",
              "in_docker": false,
              "children": null
            }]
          }]
        }, {
          "name": "stock-serv",
          "alias": "stock-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "product",
          "alias": "product",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "subject-serv-new",
          "alias": "subject-serv-new",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "pay-server",
          "alias": "pay-server",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "settlement-serv",
          "alias": "settlement-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "promotion-serv",
          "alias": "promotion-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "seller_invoice_serv",
          "alias": "seller_invoice_serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": [{
            "name": "managesecurity-service-storeadmin",
            "alias": "managesecurity-service-storeadmin",
            "type": "thrift",
            "language": "java",
            "in_docker": false,
            "children": null
          }]
        }, {
          "name": "guang",
          "alias": "guang",
          "type": "thrift",
          "language": "ruby",
          "in_docker": false,
          "children": null
        }, {
          "name": "ProductServ",
          "alias": "商品服务",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }, {
          "name": "express-serv",
          "alias": "express-serv",
          "type": "thrift",
          "language": "java",
          "in_docker": false,
          "children": null
        }]
      }, {
        "name": "product_backend",
        "alias": "product_backend",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }]
    }, {
      "name": "seller-serv",
      "alias": "seller-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "return-pickup-serv",
      "alias": "return-pickup-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "order-delivernotify-task",
      "alias": "order-delivernotify-task",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "zhe-sendsms-serv",
      "alias": "zhe-sendsms-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": [{
        "name": "sms-send-task",
        "alias": "sms-send-task",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": [{
          "name": "user_info",
          "alias": "user_info",
          "type": "http",
          "language": "ruby",
          "in_docker": false,
          "children": null
        }]
      }, {
        "name": "return-pickup-serv",
        "alias": "return-pickup-serv",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }, {
        "name": "ComplainServ",
        "alias": "维权服务",
        "type": "thrift",
        "language": "java",
        "in_docker": false,
        "children": null
      }]
    }, {
      "name": "manager_serv",
      "alias": "manager_serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "account_transfer_serv",
      "alias": "account_transfer_serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "OrderServ",
      "alias": "订单服务",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "return-address-serv",
      "alias": "return-address-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "ComplainServ",
      "alias": "维权服务",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }, {
      "name": "promotion-serv",
      "alias": "promotion-serv",
      "type": "thrift",
      "language": "java",
      "in_docker": false,
      "children": null
    }]
  }, {
    "name": "Score",
    "alias": "积分服务",
    "type": "thrift",
    "language": "ruby",
    "in_docker": false,
    "children": null
  }, {
    "name": "OrderServ",
    "alias": "订单服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "Grade",
    "alias": "用户等级服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "ComplainServ",
    "alias": "维权服务",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }, {
    "name": "grade",
    "alias": "grade",
    "type": "thrift",
    "language": "ruby",
    "in_docker": false,
    "children": null
  }, {
    "name": "productDetail",
    "alias": "productDetail",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": [{
      "name": "prod-comment-server",
      "alias": "评论服务",
      "type": "thrift",
      "language": "java",
      "in_docker": true,
      "children": null
    }]
  }, {
    "name": "managesecurity-service-storeadmin",
    "alias": "managesecurity-service-storeadmin",
    "type": "thrift",
    "language": "java",
    "in_docker": false,
    "children": null
  }]
};

var diameter = 960;

var width = diameter,
  height = diameter;

var i = 0,
  duration = 350,
  root;

var tree = d3.layout.tree()
  .size([360, diameter / 2 - 120])
  .separation(function(a, b) {
    return (a.parent == b.parent ? 1 : 2) / a.depth;
  });

var diagonal = d3.svg.diagonal.radial()
  .projection(function(d) {
    return [d.y, d.x / 180 * Math.PI];
  });

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

root = pubs;
root.x0 = height / 2;
root.y0 = 0;

root.children.forEach(collapse);
update(root);

function update(source) {

  var nodes = tree.nodes(root),
    links = tree.links(nodes);

  nodes.forEach(function(d) {
    d.y = d.depth * 80;
  });

  var node = svg.selectAll("g.node")
    .data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .on("click", click);

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function(d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  nodeEnter.append("text")
    .attr("x", 10)
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .text(function(d) {
      return d.name;
    })
    .style("fill-opacity", 1e-6);

  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
    })

  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("fill", function(d) {
      return d._children ? "#f5f5dc" : "#fff";
    });

  nodeUpdate.select("text")
    .style("fill-opacity", 1)
    .attr('text-anchor', function(d) {
      return d.x < 180 ? 'start': 'end';
    })
    .attr("transform", function(d) {
      return d.x < 180 ? "translate(0)translate(" + (d.name.length - 10) + ")" : "rotate(180)translate(-" + (d.name.length + 20) + ")";
    });

  var nodeExit = node.exit().transition()
    .duration(duration)
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  var link = svg.selectAll("path.link")
    .data(links, function(d) {
      return d.target.id;
    });

  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
      var o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    });

  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
      var o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    })
    .remove();

  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }

  update(d);
}

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}
