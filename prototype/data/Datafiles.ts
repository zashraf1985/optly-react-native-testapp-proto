export const datafiles: Map<string, any> = new Map([
  ['audience_targeting.json', {
    "version": "4",
    "rollouts": [],
    "anonymizeIP": true,
    "projectId": "10431130345",
    "variables": [],
    "featureFlags": [],
    "experiments": [
      {
        "status": "Running",
        "key": "ab_running_exp_single_exact_match_string_audience",
        "layerId": "10420273888",
        "trafficAllocation": [
          {
            "entityId": "10416523121",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["10413101794"],
        "variations": [
          {
            "variables": [],
            "id": "10416523121",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977673"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_untargeted",
        "layerId": "10420273889",
        "trafficAllocation": [
          {
            "entityId": "10416523122",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "variations": [
          {
            "variables": [],
            "id": "10416523122",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977674"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_exact_match",
        "layerId": "10420273889",
        "trafficAllocation": [
          {
            "entityId": "10416523122",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101794", "20413101795", "20413101796", "20413101797" ,"20413101798"],
        "variations": [
          {
            "variables": [],
            "id": "10416523122",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "103909776741"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_exists_match",
        "layerId": "10420273890",
        "trafficAllocation": [
          {
            "entityId": "10416523123",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101799", "20413101800", "20413101801" ,"20413101802"],
        "variations": [
          {
            "variables": [],
            "id": "10416523123",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977675"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_lt_43_match",
        "layerId": "10420273891",
        "trafficAllocation": [
          {
            "entityId": "10416523124",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101803", "20413101804"],
        "variations": [
          {
            "variables": [],
            "id": "10416523124",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977676"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_41_match",
        "layerId": "10420273892",
        "trafficAllocation": [
          {
            "entityId": "10416523125",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101805", "20413101806"],
        "variations": [
          {
            "variables": [],
            "id": "10416523125",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977677"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_substring_match",
        "layerId": "10420273893",
        "trafficAllocation": [
          {
            "entityId": "10416523126",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101807"],
        "variations": [
          {
            "variables": [],
            "id": "10416523126",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977678"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_41_and_lt_43",
        "layerId": "10420273894",
        "trafficAllocation": [
          {
            "entityId": "10416523127",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101808"],
        "variations": [
          {
            "variables": [],
            "id": "10416523127",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977679"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_exact_match_missing_value",
        "layerId": "10420273895",
        "trafficAllocation": [
          {
            "entityId": "10416523128",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101810", "20413101811", "20413101812", "20413101813"],
        "variations": [
          {
            "variables": [],
            "id": "10416523128",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977680"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_s_foo_or_s_bar",
        "layerId": "10420273896",
        "trafficAllocation": [
          {
            "entityId": "10416523129",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101814"],
        "variations": [
          {
            "variables": [],
            "id": "10416523129",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977681"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_b_true_or_i_lt_43",
        "layerId": "10420273897",
        "trafficAllocation": [
          {
            "entityId": "10416523130",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101815"],
        "variations": [
          {
            "variables": [],
            "id": "10416523130",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977682"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_lt_4_3_match",
        "layerId": "10420273898",
        "trafficAllocation": [
          {
            "entityId": "10416523131",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101804"],
        "variations": [
          {
            "variables": [],
            "id": "10416523131",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977683"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_4_1_match",
        "layerId": "10420273899",
        "trafficAllocation": [
          {
            "entityId": "10416523132",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101806"],
        "variations": [
          {
            "variables": [],
            "id": "10416523132",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977684"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_4_1_and_lt_4_3",
        "layerId": "10420273900",
        "trafficAllocation": [
          {
            "entityId": "10416523133",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101809"],
        "variations": [
          {
            "variables": [],
            "id": "10416523133",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977685"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_exact_match",
        "layerId": "10420273901",
        "trafficAllocation": [
          {
            "entityId": "10416523134",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101816", "20413101817", "20413101818" ,"20413101819"],
        "variations": [
          {
            "variables": [],
            "id": "10416523134",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977686"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_s_foo_exists_match",
        "layerId": "10420273902",
        "trafficAllocation": [
          {
            "entityId": "10416523135",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101820"],
        "variations": [
          {
            "variables": [],
            "id": "10416523135",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977687"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_b_true_exists_match",
        "layerId": "10420273903",
        "trafficAllocation": [
          {
            "entityId": "10416523136",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101821"],
        "variations": [
          {
            "variables": [],
            "id": "10416523136",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977688"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_i_42_exists_match",
        "layerId": "10420273904",
        "trafficAllocation": [
          {
            "entityId": "10416523137",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101822"],
        "variations": [
          {
            "variables": [],
            "id": "10416523137",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977689"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_d_4_2_exists_match",
        "layerId": "10420273905",
        "trafficAllocation": [
          {
            "entityId": "10416523138",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101823"],
        "variations": [
          {
            "variables": [],
            "id": "10416523138",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977690"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_lt_43_match",
        "layerId": "10420273906",
        "trafficAllocation": [
          {
            "entityId": "10416523139",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101824"],
        "variations": [
          {
            "variables": [],
            "id": "10416523139",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977691"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_lt_4_3_match",
        "layerId": "10420273907",
        "trafficAllocation": [
          {
            "entityId": "10416523140",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101825"],
        "variations": [
          {
            "variables": [],
            "id": "10416523140",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977692"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_41_match",
        "layerId": "10420273908",
        "trafficAllocation": [
          {
            "entityId": "10416523141",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101826"],
        "variations": [
          {
            "variables": [],
            "id": "10416523141",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977693"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_4_1_match",
        "layerId": "10420273909",
        "trafficAllocation": [
          {
            "entityId": "10416523142",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101827"],
        "variations": [
          {
            "variables": [],
            "id": "10416523142",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977694"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_substring_match",
        "layerId": "10420273910",
        "trafficAllocation": [
          {
            "entityId": "10416523143",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101828"],
        "variations": [
          {
            "variables": [],
            "id": "10416523143",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977695"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_41_and_lt_43",
        "layerId": "10420273911",
        "trafficAllocation": [
          {
            "entityId": "10416523144",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101829"],
        "variations": [
          {
            "variables": [],
            "id": "10416523144",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977696"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_4_1_and_lt_4_3",
        "layerId": "10420273912",
        "trafficAllocation": [
          {
            "entityId": "10416523145",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101830"],
        "variations": [
          {
            "variables": [],
            "id": "10416523145",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977697"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_invalid_attribute_type",
        "layerId": "10420273913",
        "trafficAllocation": [
          {
            "entityId": "10416523146",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101831", "20413101832"],
        "variations": [
          {
            "variables": [],
            "id": "10416523146",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977698"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_unknown_match_type",
        "layerId": "10420273914",
        "trafficAllocation": [
          {
            "entityId": "10416523147",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101833"],
        "variations": [
          {
            "variables": [],
            "id": "10416523147",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977699"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_missing_match_type",
        "layerId": "10420273915",
        "trafficAllocation": [
          {
            "entityId": "10416523148",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["20413101834"],
        "variations": [
          {
            "variables": [],
            "id": "10416523148",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977700"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_lt_match_null_value",
        "layerId": "10420273916",
        "trafficAllocation": [
          {
            "entityId": "10416523149",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101835"],
        "variations": [
          {
            "variables": [],
            "id": "10416523149",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977701"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_lt_match_string_value",
        "layerId": "10420273917",
        "trafficAllocation": [
          {
            "entityId": "10416523150",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101836"],
        "variations": [
          {
            "variables": [],
            "id": "10416523150",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977702"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_lt_match_missing_value",
        "layerId": "10420273918",
        "trafficAllocation": [
          {
            "entityId": "10416523151",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101837"],
        "variations": [
          {
            "variables": [],
            "id": "10416523151",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977703"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_match_null_value",
        "layerId": "10420273919",
        "trafficAllocation": [
          {
            "entityId": "10416523152",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101838"],
        "variations": [
          {
            "variables": [],
            "id": "10416523151",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977704"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_match_string_value",
        "layerId": "10420273920",
        "trafficAllocation": [
          {
            "entityId": "10416523153",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101839"],
        "variations": [
          {
            "variables": [],
            "id": "10416523153",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977705"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_gt_match_missing_value",
        "layerId": "10420273921",
        "trafficAllocation": [
          {
            "entityId": "10416523154",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101840"],
        "variations": [
          {
            "variables": [],
            "id": "10416523154",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977706"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_substring_match_missing_value",
        "layerId": "10420273922",
        "trafficAllocation": [
          {
            "entityId": "10416523155",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101841"],
        "variations": [
          {
            "variables": [],
            "id": "10416523155",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977707"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_substring_match_null_value",
        "layerId": "10420273923",
        "trafficAllocation": [
          {
            "entityId": "10416523156",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101842"],
        "variations": [
          {
            "variables": [],
            "id": "10416523156",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977708"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_substring_match_boolean_value",
        "layerId": "10420273924",
        "trafficAllocation": [
          {
            "entityId": "10416523157",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101843"],
        "variations": [
          {
            "variables": [],
            "id": "10416523157",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977709"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_typed_audiences_substring_match_number_value",
        "layerId": "10420273925",
        "trafficAllocation": [
          {
            "entityId": "10416523158",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "20413101844"],
        "variations": [
          {
            "variables": [],
            "id": "10416523158",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977710"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_and_42",
        "layerId": "10420273926",
        "trafficAllocation": [
          {
            "entityId": "10416523159",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", "20413101795", "20413101797"],
        "variations": [
          {
            "variables": [],
            "id": "10416523159",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977711"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_or_42",
        "layerId": "10420273927",
        "trafficAllocation": [
          {
            "entityId": "10416523160",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["or", "20413101795", "20413101797"],
        "variations": [
          {
            "variables": [],
            "id": "10416523160",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977712"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_and__42_or_4_2",
        "layerId": "10420273928",
        "trafficAllocation": [
          {
            "entityId": "10416523161",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", "20413101795", ["or", "20413101797", "20413101798"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523161",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977713"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_or_true__and__42_or_4_2",
        "layerId": "10420273929",
        "trafficAllocation": [
          {
            "entityId": "10416523162",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", ["or", "20413101795", "20413101796"], ["or", "20413101797", "20413101798"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523162",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977714"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_and_true__and__42_and_4_2",
        "layerId": "10420273929",
        "trafficAllocation": [
          {
            "entityId": "10416523162",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", ["and", "20413101795", "20413101796"], ["and", "20413101797", "20413101798"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523162",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977715"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_and_true__or__42_and_4_2",
        "layerId": "10420273930",
        "trafficAllocation": [
          {
            "entityId": "10416523163",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["or", ["and", "20413101795", "20413101796"], ["and", "20413101797", "20413101798"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523163",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977716"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_exact_foo_and_true_and_42_and_4_2",
        "layerId": "10420273931",
        "trafficAllocation": [
          {
            "entityId": "10416523164",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", "20413101795", "20413101796", "20413101797", "20413101798"],
        "variations": [
          {
            "variables": [],
            "id": "10416523164",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977717"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not_foo",
        "layerId": "10420273932",
        "trafficAllocation": [
          {
            "entityId": "10416523165",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["not", "20413101795"],
        "variations": [
          {
            "variables": [],
            "id": "10416523165",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977718"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not__foo_or_42",
        "layerId": "10420273933",
        "trafficAllocation": [
          {
            "entityId": "10416523166",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["not", ["or", "20413101795", "20413101797"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523166",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977719"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not__foo_and_42",
        "layerId": "10420273934",
        "trafficAllocation": [
          {
            "entityId": "10416523167",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["not", ["and", "20413101795", "20413101797"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523167",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977720"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not_foo__and__not_42",
        "layerId": "10420273935",
        "trafficAllocation": [
          {
            "entityId": "10416523168",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["and", ["not", "20413101795"], ["not", "20413101797"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523168",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977721"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not_foo__or__not_42",
        "layerId": "10420273936",
        "trafficAllocation": [
          {
            "entityId": "10416523169",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["or", ["not", "20413101795"], ["not", "20413101797"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523169",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977722"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_empty_conditions",
        "layerId": "10420273937",
        "trafficAllocation": [
          {
            "entityId": "10416523170",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": [],
        "variations": [
          {
            "variables": [],
            "id": "10416523170",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977723"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_not_foo_with_additional_audience",
        "layerId": "10420273938",
        "trafficAllocation": [
          {
            "entityId": "10416523170",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["not", "20413101795", "20413101797"],
        "variations": [
          {
            "variables": [],
            "id": "10416523170",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977724"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_with_exact_foo_match_audience_id_and_empty_audience_conditions",
        "layerId": "10420273939",
        "trafficAllocation": [
          {
            "entityId": "10416523171",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["10413101794"],
        "audienceConditions": [],
        "variations": [
          {
            "variables": [],
            "id": "10416523171",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977725"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_untyped_audience_combo_exact_foo_and_bar",
        "layerId": "10420273940",
        "trafficAllocation": [
          {
            "entityId": "10416523172",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["and", "10413101796", "10413101797"],
        "variations": [
          {
            "variables": [],
            "id": "10416523172",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977726"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_missing_operand_exact_foo_or_42",
        "layerId": "10420273941",
        "trafficAllocation": [
          {
            "entityId": "10416523173",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": ["20413101795", "20413101797"],
        "variations": [
          {
            "variables": [],
            "id": "10416523173",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977727"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_leaf_root",
        "layerId": "10420273942",
        "trafficAllocation": [
          {
            "entityId": "10416523174",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "audienceConditions": "20413101795",
        "variations": [
          {
            "variables": [],
            "id": "10416523174",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977728"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_ids_unknown_audience_or_exact_foo",
        "layerId": "10420273943",
        "trafficAllocation": [
          {
            "entityId": "10416523175",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["0000000000", "20413101795"],
        "variations": [
          {
            "variables": [],
            "id": "10416523175",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977729"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_unknown_audience_or_exact_foo",
        "layerId": "10420273944",
        "trafficAllocation": [
          {
            "entityId": "10416523176",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["or", "0000000000", "20413101795"],
        "variations": [
          {
            "variables": [],
            "id": "10416523176",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977730"
      },
      {
        "status": "Running",
        "key": "ab_running_exp_audience_combo_unknown_audience_and_exact_foo",
        "layerId": "10420273945",
        "trafficAllocation": [
          {
            "entityId": "10416523177",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["and", "0000000000", "20413101795"],
        "variations": [
          {
            "variables": [],
            "id": "10416523177",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977731"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_exact_match_missing_value",
        "layerId": "10420273895",
        "trafficAllocation": [
          {
            "entityId": "10416523128",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", ["or", "20413101810", "20413101811", "20413101812", "20413101813"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523128",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977732"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_lt_match_null_value",
        "layerId": "10420273916",
        "trafficAllocation": [
          {
            "entityId": "10416523149",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101835"],
        "variations": [
          {
            "variables": [],
            "id": "10416523149",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977733"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_lt_match_string_value",
        "layerId": "10420273917",
        "trafficAllocation": [
          {
            "entityId": "10416523150",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101836"],
        "variations": [
          {
            "variables": [],
            "id": "10416523150",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977734"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_lt_match_missing_value",
        "layerId": "10420273918",
        "trafficAllocation": [
          {
            "entityId": "10416523151",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101837"],
        "variations": [
          {
            "variables": [],
            "id": "10416523151",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977735"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_match_null_value",
        "layerId": "10420273919",
        "trafficAllocation": [
          {
            "entityId": "10416523152",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101838"],
        "variations": [
          {
            "variables": [],
            "id": "10416523151",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977736"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_match_string_value",
        "layerId": "10420273920",
        "trafficAllocation": [
          {
            "entityId": "10416523153",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101839"],
        "variations": [
          {
            "variables": [],
            "id": "10416523153",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977737"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_gt_match_missing_value",
        "layerId": "10420273921",
        "trafficAllocation": [
          {
            "entityId": "10416523154",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101840"],
        "variations": [
          {
            "variables": [],
            "id": "10416523154",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977738"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_substring_match_missing_value",
        "layerId": "10420273922",
        "trafficAllocation": [
          {
            "entityId": "10416523155",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101841"],
        "variations": [
          {
            "variables": [],
            "id": "10416523155",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977739"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_substring_match_null_value",
        "layerId": "10420273923",
        "trafficAllocation": [
          {
            "entityId": "10416523156",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101842"],
        "variations": [
          {
            "variables": [],
            "id": "10416523156",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977740"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_substring_match_boolean_value",
        "layerId": "10420273924",
        "trafficAllocation": [
          {
            "entityId": "10416523157",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101843"],
        "variations": [
          {
            "variables": [],
            "id": "10416523157",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977741"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_substring_match_number_value",
        "layerId": "10420273925",
        "trafficAllocation": [
          {
            "entityId": "10416523158",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101844"],
        "variations": [
          {
            "variables": [],
            "id": "10416523158",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977742"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_invalid_attribute_type",
        "layerId": "10420273913",
        "trafficAllocation": [
          {
            "entityId": "10416523146",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", ["or", "20413101831", "20413101832"]],
        "variations": [
          {
            "variables": [],
            "id": "10416523146",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977743"
      },
      {
        "status": "Running",
        "key": "negated_ab_running_exp_typed_audiences_unknown_match_type",
        "layerId": "10420273914",
        "trafficAllocation": [
          {
            "entityId": "10416523147",
            "endOfRange": 10000
          }
        ],
        "audienceIds": ["$opt_dummy_audience"],
        "audienceConditions": ["not", "20413101833"],
        "variations": [
          {
            "variables": [],
            "id": "10416523147",
            "key": "all_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10390977744"
      }
    ],
    "audiences": [
      {
        "id": "10413101794",
        "conditions": "[\"and\", [\"or\", [\"or\", {\"type\": \"custom_attribute\", \"name\": \"string_attribute\", \"value\": \"exact_match\"}]]]",
        "name": "untyped_single_condition_exact_string_match"
      },
      {
        "id": "10413101796",
        "conditions": "[\"and\", [\"or\", [\"or\", {\"type\": \"custom_attribute\", \"name\": \"s_foo\", \"value\": \"foo\"}]]]",
        "name": "untyped_single_condition_exact_foo_string_match"
      },
      {
        "id": "10413101797",
        "conditions": "[\"and\", [\"or\", [\"or\", {\"type\": \"custom_attribute\", \"name\": \"s_bar\", \"value\": \"bar\"}]]]",
        "name": "untyped_single_condition_exact_bar_string_match"
      },
      {
        "_comment": "Dummy audience that is overridden by a typedAudience with the same id",
        "id": "20413101798",
        "conditions": "[\"and\", [\"or\", [\"or\", {\"type\": \"custom_attribute\", \"name\": \"$opt_dummy_attribute\", \"match\": \"exact\", \"value\": \"$opt_dummy_value\"}]]]",
        "name": "dummy_audience_overridden_by_typed_audience"
      },
      {
        "_comment": "Dummy audience that is targeted by audienceIds for experiments with backwards-incompatible audienceConditions",
        "id": "$opt_dummy_audience",
        "conditions": "[\"and\", [\"or\", [\"or\", {\"type\": \"custom_attribute\", \"name\": \"$opt_dummy_attribute\", \"match\": \"exact\", \"value\": \"$opt_dummy_value\"}]]]",
        "name": "dummy_audience"
      }
    ],
    "typedAudiences": [
      {
        "id": "20413101794",
        "conditions": { "type": "custom_attribute", "name": "s_foo", "match": "exact", "value": "leaf_root" },
        "name": "single_condition_leaf_root"
      },
      {
        "id": "20413101795",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exact", "value": "foo" } ] ] ],
        "name": "single_condition_exact_string_match"
      },
      {
        "id": "20413101796",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exact", "value": true } ] ] ],
        "name": "single_condition_exact_boolean_match"
      },
      {
        "id": "20413101797",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "exact", "value": 42 } ] ] ],
        "name": "single_condition_exact_int_match"
      },
      {
        "id": "20413101798",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "exact", "value": 4.2 } ] ] ],
        "name": "single_condition_exact_double_match"
      },
      {
        "id": "20413101799",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exists" } ] ] ],
        "name": "single_condition_exists_string_match"
      },
      {
        "id": "20413101800",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exists" } ] ] ],
        "name": "single_condition_exists_boolean_match"
      },
      {
        "id": "20413101801",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "exists" } ] ] ],
        "name": "single_condition_exists_int_match"
      },
      {
        "id": "20413101802",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "exists" } ] ] ],
        "name": "single_condition_exists_double_match"
      },
      {
        "id": "20413101803",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "lt", "value": 43 } ] ] ],
        "name": "single_condition_lt_int_match"
      },
      {
        "id": "20413101804",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "lt", "value": 4.3 } ] ] ],
        "name": "single_condition_lt_double_match"
      },
      {
        "id": "20413101805",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "gt", "value": 41 } ] ] ],
        "name": "single_condition_gt_int_match"
      },
      {
        "id": "20413101806",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "gt", "value": 4.1 } ] ] ],
        "name": "single_condition_gt_double_match"
      },
      {
        "id": "20413101807",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring", "value": "foo" } ] ] ],
        "name": "single_condition_substring_match"
      },
      {
        "id": "20413101808",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "lt", "value": 43 } ] ], [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "gt", "value": 41 } ] ] ],
        "name": "multiple_conditions_integer_range_match"
      },
      {
        "id": "20413101809",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "lt", "value": 4.3 } ] ], [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "gt", "value": 4.1 } ] ] ],
        "name": "multiple_conditions_double_range_match"
      },
      {
        "id": "20413101810",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_missing_value"
      },
      {
        "id": "20413101811",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_missing_value"
      },
      {
        "id": "20413101812",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_missing_value"
      },
      {
        "id": "20413101813",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_missing_value"
      },
      {
        "id": "20413101814",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exact", "value": "foo" }, { "type": "custom_attribute", "name": "s_bar", "match": "exact", "value": "bar" } ] ] ],
        "name": "multiple_or_string_conditions_exact_match"
      },
      {
        "id": "20413101815",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exact", "value": true }, { "type": "custom_attribute", "name": "i_42", "match": "lt", "value": 43 } ] ] ],
        "name": "multiple_or_conditions_mixed_types"
      },
      {
        "id": "20413101816",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exact", "value": "foo" } ] ] ] ],
        "name": "negated_single_condition_exact_string_match"
      },
      {
        "id": "20413101817",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exact", "value": true } ] ] ] ],
        "name": "negated_single_condition_exact_boolean_match"
      },
      {
        "id": "20413101818",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "exact", "value": 42 } ] ] ] ],
        "name": "negated_single_condition_exact_int_match"
      },
      {
        "id": "20413101819",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "exact", "value": 4.2 } ] ] ] ],
        "name": "negated_single_condition_exact_double_match"
      },
      {
        "id": "20413101820",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "exists" } ] ] ] ],
        "name": "negated_single_condition_exists_string_match"
      },
      {
        "id": "20413101821",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "b_true", "match": "exists" } ] ] ] ],
        "name": "negated_single_condition_exists_boolean_match"
      },
      {
        "id": "20413101822",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "exists" } ] ] ] ],
        "name": "negated_single_condition_exists_int_match"
      },
      {
        "id": "20413101823",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "exists" } ] ] ] ],
        "name": "negated_single_condition_exists_double_match"
      },
      {
        "id": "20413101824",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "lt", "value": 43 } ] ] ] ],
        "name": "negated_single_condition_lt_int_match"
      },
      {
        "id": "20413101825",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "lt", "value": 4.3 } ] ] ] ],
        "name": "negated_single_condition_lt_double_match"
      },
      {
        "id": "20413101826",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "gt", "value": 41 } ] ] ] ],
        "name": "negated_single_condition_gt_int_match"
      },
      {
        "id": "20413101827",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "gt", "value": 4.1 } ] ] ] ],
        "name": "negated_single_condition_gt_double_match"
      },
      {
        "id": "20413101828",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring", "value": "foo" } ] ] ] ],
        "name": "negated_single_condition_substring_match"
      },
      {
        "id": "20413101829",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "lt", "value": 43 } ] ], [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "gt", "value": 41 } ] ] ] ] ],
        "name": "negated_multiple_conditions_integer_range_match"
      },
      {
        "id": "20413101830",
        "conditions": [ "and", [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "lt", "value": 4.3 } ] ], [ "or", [ "not", [ "or", { "type": "custom_attribute", "name": "d_4_2", "match": "gt", "value": 4.1 } ] ] ] ] ],
        "name": "negated_multiple_conditions_double_range_match"
      },
      {
        "id": "20413101831",
        "conditions": [ "and", [ "or", [ "or", { "type": "unknown", "name": "s_foo", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_string_unknown_attribute_type"
      },
      {
        "id": "20413101832",
        "conditions": [ "and", [ "or", [ "or", { "name": "s_foo", "match": "exact" } ] ] ],
        "name": "single_condition_exact_match_string_missing_attribute_type"
      },
      {
        "id": "20413101833",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "unknown" } ] ] ],
        "name": "single_condition_unknown_match_string"
      },
      {
        "id": "20413101834",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "value": "foo" } ] ] ],
        "name": "single_condition_missing_match_string"
      },
      {
        "id": "20413101835",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "value": null, "match": "lt" } ] ] ],
        "name": "single_condition_lt_match_null_value"
      },
      {
        "id": "20413101836",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "value": "41", "match": "lt" } ] ] ],
        "name": "single_condition_lt_match_string_value"
      },
      {
        "id": "20413101837",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "lt" } ] ] ],
        "name": "single_condition_lt_match_missing_value"
      },
      {
        "id": "20413101838",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "value": null, "match": "gt" } ] ] ],
        "name": "single_condition_gt_match_null_value"
      },
      {
        "id": "20413101839",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "value": "41", "match": "gt" } ] ] ],
        "name": "single_condition_gt_match_string_value"
      },
      {
        "id": "20413101840",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "i_42", "match": "gt" } ] ] ],
        "name": "single_condition_gt_match_missing_value"
      },
      {
        "id": "20413101841",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring" } ] ] ],
        "name": "single_condition_substring_match_missing_value"
      },
      {
        "id": "20413101842",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring", "value": null } ] ] ],
        "name": "single_condition_substring_match_null_value"
      },
      {
        "id": "20413101843",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring", "value": true } ] ] ],
        "name": "single_condition_substring_match_boolean_value"
      },
      {
        "id": "20413101844",
        "conditions": [ "and", [ "or", [ "or", { "type": "custom_attribute", "name": "s_foo", "match": "substring", "value": 400 } ] ] ],
        "name": "single_condition_substring_match_number_value"
      }
    ],
    "groups": [],
    "attributes": [
      {
        "id": "10401066170",
        "key": "string_attribute"
      },
      {
        "id": "10401066171",
        "key": "s_foo"
      },
      {
        "id": "10401066172",
        "key": "b_true"
      },
      {
        "id": "10401066172",
        "key": "i_42"
      },
      {
        "id": "10401066173",
        "key": "d_4_2"
      },
      {
        "id": "10401066174",
        "key": "s_bar"
      },
      {
        "id": "10401066175",
        "key": "b_false"
      },
      {
        "id": "10401066176",
        "key": "i_43"
      },
      {
        "id": "10401066177",
        "key": "d_4_3"
      }
    ],
    "accountId": "10367498574",
    "events": [
      {
        "experimentIds": [
          "10390977673"
        ],
        "id": "10404198135",
        "key": "event_single_targeted_exp"
      },
      {
        "experimentIds": [
          "10390977674"
        ],
        "id": "10404198136",
        "key": "event_single_untargeted_exp"
      }
    ],
    "revision": "241"
  }],
  ['feature_experiments.json', {
    "accountId": "8293278051",
    "anonymizeIP": true,
    "attributes": [
      {
        "id": "8279638019",
        "key": "customattr"
      }
    ],
    "audiences": [
      {
        "conditions": "[\"and\", {\"name\": \"customattr\", \"type\": \"custom_attribute\", \"value\": \"yes\"}]",
        "id": "8285558039",
        "name": "feature_audience"
      },
      {
        "conditions": "[\"or\", {\"match\": \"exact\", \"name\": \"$opt_dummy_attribute\", \"type\": \"custom_attribute\", \"value\": \"$opt_dummy_value\"}]",
        "id": "$opt_dummy_audience",
        "name": "Optimizely-Generated Audience for Backwards Compatibility"
      }
    ],
    "botFiltering": false,
    "events": [
      {
        "experimentIds": [],
        "id": "8262168034",
        "key": "unused_event"
      },
      {
        "experimentIds": [
          "8264088068"
        ],
        "id": "8273548053",
        "key": "ab_test_zero_alloc_event"
      },
      {
        "experimentIds": [
          "8277518041"
        ],
        "id": "8287378044",
        "key": "winning"
      }
    ],
    "experiments": [
      {
        "audienceIds": [
          "8285558039"
        ],
        "forcedVariations": {},
        "id": "8262198016",
        "key": "feature_targeted_exp",
        "layerId": "8275628105",
        "status": "Running",
        "trafficAllocation": [
          {
            "endOfRange": 10000,
            "entityId": "8283518021"
          }
        ],
        "variations": [
          {
            "featureEnabled": false,
            "id": "8271728042",
            "key": "var_1",
            "variables": []
          },
          {
            "featureEnabled": true,
            "id": "8283518021",
            "key": "var_2",
            "variables": [
              {
                "id": "8287418052",
                "value": "3"
              },
              {
                "id": "8283538034",
                "value": "true"
              },
              {
                "id": "8271768045",
                "value": "10.5"
              },
              {
                "id": "8285558038",
                "value": "s"
              }
            ]
          }
        ]
      },
      {
        "audienceIds": [],
        "forcedVariations": {},
        "id": "8264088068",
        "key": "ab_test_zero_alloc",
        "layerId": "8260448035",
        "status": "Running",
        "trafficAllocation": [
          {
            "endOfRange": 0,
            "entityId": "8295288022"
          }
        ],
        "variations": [
          {
            "id": "8295288022",
            "key": "no_traffic_variation",
            "variables": []
          }
        ]
      },
      {
        "audienceIds": [],
        "forcedVariations": {},
        "id": "8266148059",
        "key": "feature_running_noalloc_exp",
        "layerId": "8271798021",
        "status": "Running",
        "trafficAllocation": [
          {
            "endOfRange": 0,
            "entityId": "8281748029"
          },
          {
            "endOfRange": 0,
            "entityId": "8283608052"
          }
        ],
        "variations": [
          {
            "featureEnabled": false,
            "id": "8281748029",
            "key": "var_1",
            "variables": []
          },
          {
            "featureEnabled": true,
            "id": "8283608052",
            "key": "var_2",
            "variables": [
              {
                "id": "8287478039",
                "value": "true"
              },
              {
                "id": "8289418074",
                "value": "10.5"
              },
              {
                "id": "8287428054",
                "value": "3"
              },
              {
                "id": "8262168031",
                "value": "s"
              }
            ]
          }
        ]
      },
      {
        "audienceIds": [],
        "forcedVariations": {
          "feature_disabled_user": "var_1",
          "feature_enabled_user": "var_2"
        },
        "id": "8277518041",
        "key": "feature_running_exp",
        "layerId": "8264228023",
        "status": "Running",
        "trafficAllocation": [
          {
            "endOfRange": 10000,
            "entityId": "8261998046"
          }
        ],
        "variations": [
          {
            "featureEnabled": false,
            "id": "8271678048",
            "key": "var_1",
            "variables": []
          },
          {
            "featureEnabled": true,
            "id": "8261998046",
            "key": "var_2",
            "variables": [
              {
                "id": "8269628115",
                "value": "true"
              },
              {
                "id": "8263988102",
                "value": "s"
              },
              {
                "id": "8283368087",
                "value": "10.5"
              },
              {
                "id": "8269568039",
                "value": "3"
              }
            ]
          }
        ]
      },
      {
        "audienceIds": [],
        "forcedVariations": {},
        "id": "8283608050",
        "key": "feature_running_disabled_exp",
        "layerId": "8263948051",
        "status": "Running",
        "trafficAllocation": [
          {
            "endOfRange": 10000,
            "entityId": "8287608024"
          }
        ],
        "variations": [
          {
            "featureEnabled": false,
            "id": "8287608024",
            "key": "disabled",
            "variables": []
          },
          {
            "featureEnabled": true,
            "id": "8281748027",
            "key": "enabled",
            "variables": [
              {
                "id": "8265848083",
                "value": "s"
              },
              {
                "id": "8264008132",
                "value": "10.5"
              },
              {
                "id": "8298528093",
                "value": "true"
              },
              {
                "id": "8297308021",
                "value": "3"
              }
            ]
          }
        ]
      }
    ],
    "featureFlags": [
      {
        "experimentIds": [
          "8277518041"
        ],
        "id": "8269708048",
        "key": "feature_running",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "s",
            "id": "8263988102",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8269568039",
            "key": "i",
            "type": "integer"
          },
          {
            "defaultValue": "true",
            "id": "8269628115",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "10.5",
            "id": "8283368087",
            "key": "d",
            "type": "double"
          }
        ]
      },
      {
        "experimentIds": [
          "8262198016"
        ],
        "id": "8273668100",
        "key": "feature_targeted",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "10.5",
            "id": "8271768045",
            "key": "d",
            "type": "double"
          },
          {
            "defaultValue": "true",
            "id": "8283538034",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "s",
            "id": "8285558038",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8287418052",
            "key": "i",
            "type": "integer"
          }
        ]
      },
      {
        "experimentIds": [],
        "id": "8273768040",
        "key": "feature_paused",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "3",
            "id": "8262078037",
            "key": "i",
            "type": "integer"
          },
          {
            "defaultValue": "s",
            "id": "8271558074",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "true",
            "id": "8279438045",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "10.5",
            "id": "8295008054",
            "key": "d",
            "type": "double"
          }
        ]
      },
      {
        "experimentIds": [
          "8266148059"
        ],
        "id": "8283608051",
        "key": "feature_running_noalloc",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "s",
            "id": "8262168031",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8287428054",
            "key": "i",
            "type": "integer"
          },
          {
            "defaultValue": "true",
            "id": "8287478039",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "10.5",
            "id": "8289418074",
            "key": "d",
            "type": "double"
          }
        ]
      },
      {
        "experimentIds": [],
        "id": "8285408044",
        "key": "feature_archived",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "10.5",
            "id": "8269708045",
            "key": "d",
            "type": "double"
          },
          {
            "defaultValue": "true",
            "id": "8271768042",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "s",
            "id": "8273658074",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8285398087",
            "key": "i",
            "type": "integer"
          }
        ]
      },
      {
        "experimentIds": [
          "8283608050"
        ],
        "id": "8291288028",
        "key": "feature_running_disabled",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "10.5",
            "id": "8264008132",
            "key": "d",
            "type": "double"
          },
          {
            "defaultValue": "s",
            "id": "8265848083",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8297308021",
            "key": "i",
            "type": "integer"
          },
          {
            "defaultValue": "true",
            "id": "8298528093",
            "key": "b",
            "type": "boolean"
          }
        ]
      },
      {
        "experimentIds": [],
        "id": "8291308027",
        "key": "feature_draft",
        "rolloutId": "",
        "variables": [
          {
            "defaultValue": "s",
            "id": "8260498110",
            "key": "s",
            "type": "string"
          },
          {
            "defaultValue": "3",
            "id": "8264028068",
            "key": "i",
            "type": "integer"
          },
          {
            "defaultValue": "true",
            "id": "8277678024",
            "key": "b",
            "type": "boolean"
          },
          {
            "defaultValue": "10.5",
            "id": "8281518021",
            "key": "d",
            "type": "double"
          }
        ]
      }
    ],
    "groups": [],
    "projectId": "8293278051",
    "revision": "27",
    "rollouts": [],
    "typedAudiences": [],
    "variables": [],
    "version": "4"
  }],
  ['bucketing_id.json', {
    "version": "4",
    "rollouts":[
      {
        "experiments":[
          {
            "status":"Running",
            "key":"12162609258",
            "layerId":"12234727778",
            "trafficAllocation":[
              {
                "entityId":"12352220195",
                "endOfRange":8000
              }
            ],
            "audienceIds":[],
            "variations":[
              {
                "variables":[
                  {
                    "id":"12280283721",
                    "value":"foo"
                  },
                  {
                    "id":"12342540392",
                    "value":"42"
                  },
                  {
                    "id":"12268604199",
                    "value":"true"
                  },
                  {
                    "id":"12352300122",
                    "value":"4.2"
                  }
                ],
                "id":"12352220195",
                "key":"12352220195",
                "featureEnabled":true
              }
            ],
            "forcedVariations":{},
            "id":"12162609258"
          }
        ],
        "id":"12234727778"
      },
      {
        "experiments":[
          {
            "status":"Running",
            "key":"feature_in_exp_and_rollout",
            "layerId":"12234727779",
            "trafficAllocation":[
              {
                "entityId":"12352220196",
                "endOfRange":10000
              }
            ],
            "audienceIds":[],
            "variations":[
              {
                "variables":[
                  {
                    "id":"12280283321",
                    "value":"true"
                  },
                  {
                    "id":"12280283322",
                    "value":"foo"
                  },
                  {
                    "id":"12280283323",
                    "value":"42"
                  },
                  {
                    "id":"12280283324",
                    "value":"4.2"
                  }
                ],
                "id":"12352220196",
                "key":"all_traffic_variation",
                "featureEnabled":true
              }
            ],
            "forcedVariations":{},
            "id":"12162609259"
          }
        ],
        "id":"12234727779"
      },
      {
        "experiments":[
          {
            "status":"Running",
            "key":"12118879026",
            "layerId":"12276102264",
            "trafficAllocation":[
              {
                "entityId":"12272793319",
                "endOfRange":6000
              }
            ],
            "audienceIds":["12567320080"],
            "variations":[
              {
                "variables":[
                  {
                    "id":"12281413403",
                    "value":"true"
                  },
                  {
                    "id":"12319500181",
                    "value":"42"
                  },
                  {
                    "id":"12336690063",
                    "value":"4.2"
                  },
                  {
                    "id":"12245035975",
                    "value":"foo"
                  }
                ],
                "id":"12272793319",
                "key":"12272793319",
                "featureEnabled":true
              }
            ],
            "forcedVariations":{},
            "id":"12118879026"
          }
        ],
        "id":"12276102264"
      }
    ],
    "anonymizeIP": true,
    "projectId": "10431130345",
    "variables": [],
    "featureFlags": [
      {
        "experimentIds": ["10420810910"],
        "id": "4482920077",
        "key": "feature_exp_running_untargeted",
        "rolloutId":"12234727779",
        "variables":[
          {
            "defaultValue":"true",
            "type":"boolean",
            "id":"12280283321",
            "key":"b_true"
          },
          {
            "defaultValue":"foo",
            "type":"string",
            "id":"12280283322",
            "key":"s_foo"
          },
          {
            "defaultValue":"42",
            "type":"integer",
            "id":"12280283323",
            "key":"i_42"
          },
          {
            "defaultValue":"4.2",
            "type":"double",
            "id":"12280283324",
            "key":"d_4_2"
          }
        ]
      },
      {
        "experimentIds": ["10420810911"],
        "id": "4482920078",
        "key": "feature_exp_running",
        "rolloutId": "",
        "variables": []
      },
      {
        "experimentIds":[],
        "rolloutId":"12276102264",
        "variables":[
          {
            "defaultValue":"foo",
            "type":"string",
            "id":"12245035975",
            "key":"s_foo"
          },
          {
            "defaultValue":"true",
            "type":"boolean",
            "id":"12281413403",
            "key":"b_true"
          },
          {
            "defaultValue":"42",
            "type":"integer",
            "id":"12319500181",
            "key":"i_42"
          },
          {
            "defaultValue":"4.2",
            "type":"double",
            "id":"12336690063",
            "key":"d_4_2"
          }
        ],
        "id":"12197088025",
        "key":"feature_rollout_targeted"
      },
      {
        "experimentIds":[],
        "rolloutId":"12234727778",
        "variables":[
          {
            "defaultValue":"true",
            "type":"boolean",
            "id":"12268604199",
            "key":"b_true"
          },
          {
            "defaultValue":"foo",
            "type":"string",
            "id":"12280283721",
            "key":"s_foo"
          },
          {
            "defaultValue":"42",
            "type":"integer",
            "id":"12342540392",
            "key":"i_42"
          },
          {
            "defaultValue":"4.2",
            "type":"double",
            "id":"12352300122",
            "key":"d_4_2"
          }
        ],
        "id":"12260263504",
        "key":"feature_rollout_untargeted"
      }
    ],
    "experiments": [
      {
        "status": "Running",
        "key": "ab_running_exp_untargeted",
        "layerId": "10417730432",
        "trafficAllocation": [
          {
            "entityId": "10418551353",
            "endOfRange": 2500
          },
          {
            "entityId": "10418551354",
            "endOfRange": 5000
          },
          {
            "entityId": "10418551355",
            "endOfRange": 7500
          },
          {
            "entityId": "10418551356",
            "endOfRange": 10000
          }
        ],
        "audienceIds": [],
        "variations": [
          {
            "featureEnabled": true,
            "variables": [],
            "id": "10418551353",
            "key": "variation_2500"
          },
          {
            "featureEnabled": false,
            "variables": [],
            "id": "10418551354",
            "key": "variation_5000"
          },
          {
            "featureEnabled": false,
            "variables": [],
            "id": "10418551355",
            "key": "variation_7500"
          },
          {
            "featureEnabled": true,
            "variables": [],
            "id": "10418551356",
            "key": "variation_10000"
          }
        ],
        "forcedVariations": {},
        "id": "10420810910"
      },
      {
        "status": "Running",
        "key": "feature_exp_running_untargeted",
        "layerId": "10417730433",
        "trafficAllocation": [
          {
            "entityId": "10418551353",
            "endOfRange": 2500
          }
        ],
        "audienceIds": [],
        "variations": [
          {
            "featureEnabled": true,
            "variables": [],
            "id": "10418551353",
            "key": "variation_2500"
          },
          {
            "featureEnabled": false,
            "variables": [],
            "id": "10418551350",
            "key": "no_traffic_variation"
          }
        ],
        "forcedVariations": {},
        "id": "10420810911"
      }
    ],
    "audiences": [
      {
        "id":"12567320080",
        "conditions":"[\"and\", [\"or\", [\"or\", {\"name\": \"s_foo\", \"type\": \"custom_attribute\", \"value\": \"foo\"}]]]",
        "name":"message"
      }
    ],
    "groups": [],
    "attributes": [
      {
        "id":"12561160124",
        "key":"end_of_range"
      }, {
        "id":"12561160123",
        "key":"s_foo"
      }
    ],
    "accountId": "10367498574",
    "events": [
      {
        "experimentIds": [
          "10420810910"
        ],
        "id": "10404198134",
        "key": "event_running_exp_attached"
      }
    ],
    "revision": "241"
  }],
  ]
)