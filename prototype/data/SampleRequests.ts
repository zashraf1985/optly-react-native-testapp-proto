export const sampleRequests = [
  {
    "request_key": 1,
    "call_api": "activate",
    "body": {
      "num_runs": "0",
      "payload": {
        "context": {
          "custom_event_dispatcher": "ProxyEventDispatcher",
          "request_id": "d327d15a-7015-410a-92ab-22f063951581",
          "user_profile_service": "NoOpService",
          "with_listener": [
            {
              "type": "Activate",
              "count": 1
            }
          ],
          "datafile": "audience_targeting.json",
          "user_profiles": []
        },
        "experiment_key": "ab_running_exp_audience_combo_exact_foo_or_42",
        "user_id": "test_user_1",
        "attributes": {
          "s_foo": "foo",
          "b_true": "N/A",
          "i_42": 44,
          "d_4_2": "N/A"
        }
      }
    }
  },
  {
    "request_key": 2,
    "call_api": "activate",
    "body": {
      "num_runs": "0",
      "payload": {
        "context": {
          "custom_event_dispatcher": "ProxyEventDispatcher",
          "request_id": "15e086dc-70a2-4940-8a5f-8b756ef3a52c",
          "user_profile_service": "NoOpService",
          "with_listener": [
            {
              "type": "Activate",
              "count": 1
            }
          ],
          "datafile": "audience_targeting.json",
          "user_profiles": []
        },
        "experiment_key": "ab_running_exp_audience_combo_exact_foo_or_42",
        "user_id": "test_user_1",
        "attributes": {
          "s_foo": "not_foo",
          "b_true": "N/A",
          "i_42": 42,
          "d_4_2": "N/A"
        }
      }
    }
  },
  {
    "request_key": 433,
    "call_api": "is_feature_enabled",
    "body": {
      "num_runs": "0",
      "payload": {
        "context": {
          "dispatched_events": [],
          "with_listener": [],
          "custom_event_dispatcher": "ProxyEventDispatcher",
          "request_id": "c7a57a1f-d4f4-42ba-9f07-a1ab25ca4afb",
          "force_variations": [
            {
              "user_id": "test_user_feature_experiment_tracking",
              "experiment_bucket_map": {
                "feature_running_exp": {
                  "variation_id": "var_1"
                }
              }
            }
          ],
          "timing_data": {},
          "datafile": "feature_experiments.json",
          "user_profile_service": "NoOpService",
          "user_profiles": []
        },
        "feature_flag_key": "feature_running",
        "user_id": "test_user_feature_experiment_tracking"
      }
    }
  },
  {
    "request_key": 598,
    "call_api": "get_variation",
    "body": {
      "num_runs": "0",
      "payload": {
        "context": {
          "custom_event_dispatcher": "ProxyEventDispatcher",
          "request_id": "1a75fd4e-9672-425f-bd48-d586cc414cbb",
          "user_profile_service": "NoOpService",
          "with_listener": [
            {
              "type": "Activate",
              "count": 1
            }
          ],
          "datafile": "bucketing_id.json",
          "user_profiles": []
        },
        "experiment_key": "ab_running_exp_untargeted",
        "user_id": "test_user",
        "attributes": {
          "$opt_bucketing_id": 5.5
        }
      }
    }
  },
];
