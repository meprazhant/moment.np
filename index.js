var numberOfDaysEachYearBS = {
    '2000': 365,
    '2001': 365,
    '2002': 365,
    '2003': 366,
    '2004': 365,
    '2005': 365,
    '2006': 365,
    '2007': 366,
    '2008': 365,
    '2009': 365,
    '2010': 365,
    '2011': 366,
    '2012': 365,
    '2013': 365,
    '2014': 365,
    '2015': 366,
    '2016': 365,
    '2017': 365,
    '2018': 365,
    '2019': 366,
    '2020': 365,
    '2021': 365,
    '2022': 365,
    '2023': 366,
    '2024': 365,
    '2025': 365,
    '2026': 366,
    '2027': 365,
    '2028': 365,
    '2029': 365,
    '2030': 366,
    '2031': 365,
    '2032': 365,
    '2033': 365,
    '2034': 366,
    '2035': 365,
    '2036': 365,
    '2037': 365,
    '2038': 366,
    '2039': 365,
    '2040': 365,
    '2041': 365,
    '2042': 366,
    '2043': 365,
    '2044': 365,
    '2045': 365,
    '2046': 366,
    '2047': 365,
    '2048': 365,
    '2049': 365,
    '2050': 366,
    '2051': 365,
    '2052': 365,
    '2053': 365,
    '2054': 366,
    '2055': 365,
    '2056': 365,
    '2057': 366,
    '2058': 365,
    '2059': 365,
    '2060': 365,
    '2061': 366,
    '2062': 365,
    '2063': 365,
    '2064': 365,
    '2065': 366,
    '2066': 365,
    '2067': 365,
    '2068': 365,
    '2069': 366,
    '2070': 365,
    '2071': 365,
    '2072': 365,
    '2073': 366,
    '2074': 365,
    '2075': 365,
    '2076': 365,
    '2077': 366,
    '2078': 365,
    '2079': 365,
    '2080': 365,
    '2081': 366,
    '2082': 366,
    '2083': 365,
    '2084': 365,
    '2085': 367,
    '2086': 366,
    '2087': 366,
    '2088': 365,
    '2089': 366,
    '2090': 366,
    '2091': 366,
    '2092': 366,
    '2093': 366,
    '2094': 365,
    '2095': 366,
    '2096': 364,
    '2097': 366,
    '2098': 366,
    '2099': 365,
    '2100': 365
};
var numberOfDaysEachMonthBS = {
    "2000": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2001": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2002": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2003": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2004": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2005": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2006": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2007": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2008": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    "2009": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2010": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2011": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2012": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    "2013": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2014": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2015": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2016": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    "2017": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2018": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2019": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2020": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    "2021": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2022": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    "2023": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2024": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    "2025": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2026": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2027": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2028": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2029": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    "2030": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2031": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2032": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2033": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2034": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2035": [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    "2036": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2037": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2038": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2039": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    "2040": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2041": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2042": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2043": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    "2044": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2045": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2046": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2047": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    "2048": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2049": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    "2050": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2051": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    "2052": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2053": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    "2054": [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2055": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2056": [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
    "2057": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2058": [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    "2059": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2060": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2061": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2062": [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
    "2063": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2064": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2065": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2066": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
    "2067": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2068": [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2069": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2070": [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
    "2071": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    "2072": [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    "2073": [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
    "2074": [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    "2075": [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    '2076': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    '2077': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
    '2078': [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
    '2079': [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
    '2080': [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
    '2081': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2082': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2083': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    '2084': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    '2085': [31, 32, 31, 32, 31, 31, 30, 30, 29, 30, 30, 30],
    '2086': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2087': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    '2088': [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
    '2089': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2090': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2091': [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
    '2092': [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2093': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2094': [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
    '2095': [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
    '2096': [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
    '2097': [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
    '2098': [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 30, 31],
    '2099': [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30],
    '2100': [31, 32, 31, 32, 30, 31, 30, 29, 30, 29, 30, 30]
};
var MONTH_NAME_BS = [
    'वैशाख',
    'जेठ',
    'आषाढ',
    'श्रवण',
    'भद्र',
    'अश्विन',
    'कार्तिक',
    'मङ्सिर',
    'पौष',
    'माघ',
    'फाल्गुन',
    'चैत्र'
];
var NEPALI_NUMBER = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
var MAX_DAY_DIFF = 36898;
var MIN_AD_YEAR = 1943; // 2000
var MIN_BS_YEAR = 2000; // 1943
var MIN_AD_MONTH = 3; // 0 (Baisakh)
var MIN_AD_DAY = 14; // 1 (first day)
var MILLS_IN_DAY = 86400000; // 24*60*60*1000

function ADTOBS(year, month, day) {
    var START_DATE = new Date(MIN_AD_YEAR, MIN_AD_MONTH, MIN_AD_DAY);
    if (!year)
        year = new Date().getUTCFullYear();
    if (!month)
        month = new Date().getUTCMonth();
    if (!day)
        day = new Date().getUTCDate();
    var dayDiff = Math.ceil((new Date(year, month, day).getTime() - START_DATE.getTime()) / MILLS_IN_DAY);
    if (dayDiff < 0 || dayDiff > MAX_DAY_DIFF) {
        return "Invalid Date out of range";
    }
    if (month < 0 || month > 11 || day < 0 || day > 32) {
        return "Invalid Date";
    }
    var year_bs = String(MIN_BS_YEAR);
    var totalCount = 0;
    var countUptoPreviousYear = 0;
    // find Year only first
    for (var _i = 0, _a = Object.entries(numberOfDaysEachYearBS); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        countUptoPreviousYear = totalCount;
        totalCount += value;
        if (totalCount > dayDiff) {
            year_bs = key;
            break;
        }
    }
    var nthDayofYear = dayDiff - countUptoPreviousYear + 1;
    //find month
    var total_count_month_wise = 0;
    var countUptoPreviousMonth = 0;
    var month_bs = 0;
    for (var i = 0; i < numberOfDaysEachMonthBS[year_bs].length &&
        nthDayofYear > total_count_month_wise; i++) {
        countUptoPreviousMonth = total_count_month_wise;
        total_count_month_wise += numberOfDaysEachMonthBS[year_bs][i];
        if (countUptoPreviousMonth > 0) {
            month_bs++;
        }
    }
    var day_bs = nthDayofYear - countUptoPreviousMonth;
    return formatBSDate(+year_bs, month_bs + 1, day_bs);
}


function formatBSDate(year, month, day) {
    var monthStr;
    var dayStr;
    if (month < 10)
        monthStr = "0" + month;
    else
        monthStr = month + "";
    if (day < 10)
        dayStr = "0" + day;
    else
        dayStr = day + "";
    return "".concat(year, "-").concat(monthStr, "-").concat(dayStr);
}

var words = {
    0: 'शून्य',
    1: 'एक',
    2: 'दुई',
    3: 'तीन',
    4: 'चार',
    5: 'पाँच',
    6: 'छ',
    7: 'सात',
    8: 'आठ',
    9: 'नौ',
    10: 'दस',
    11: 'एघार',
    12: 'बाह्र',
    13: 'तेह्र',
    14: 'चौध',
    15: 'पन्ध्र',
    16: 'सोह्र',
    17: 'सत्र',
    18: 'अठार',
    19: 'उन्नाइस',
    20: 'बीस',
    21: 'एक्काइस',
    22: 'बाइस',
    23: 'तेइस',
    24: 'चौबीस',
    25: 'पच्चीस',
    26: 'छब्बीस',
    27: 'सत्ताइस',
    28: 'अठ्ठाइस',
    29: 'उनन्तीस',
    30: 'तीस',
    31: 'एकतीस',
    32: 'बत्तीस',
    33: 'तेत्तीस',
    34: 'चौंतीस',
    35: 'पैंतीस',
    36: 'छत्तीस',
    37: 'सैंतीस',
    38: 'अठ्ठेटीस',
    39: 'उनन्चालीस',
    40: 'चालीस',
    41: 'एकचालीस',
    42: 'बयालीस',
    43: 'त्रियालीस',
    44: 'चौवालीस',
    45: 'पैँतालीस',
    46: 'छयालीस',
    47: 'सत्ताचालीस',
    48: 'अठ्ठाचालीस',
    49: 'उनन्पचास',
    50: 'पचास',
    51: 'एकाउन्नस',
    52: 'बाउन्नस',
    53: 'त्रिपन्नस',
    54: 'चउन्नस',
    55: 'पचपन्न',
    56: 'छपन्नस',
    57: 'सन्ताउन्नस',
    58: 'अन्ठाउन्नस',
    59: 'उनन्साठी',
    60: 'साठी',
    61: 'एकसट्ठी',
    62: 'बैसट्ठी',
    63: 'त्रिसट्ठी',
    64: 'चौसट्ठी',
    65: 'पैसट्ठी',
    66: 'छैसट्ठी',
    67: 'सत्सट्ठी',
    68: 'अठ्सट्ठी',
    69: 'उनन्सत्तरी',
    70: 'सत्तरी',
    71: 'एकहत्तर',
    72: 'बहत्तर',
    73: 'त्रिहत्तर',
    74: 'चौरहत्तर',
    75: 'पचहत्तर',
    76: 'छयहत्तर',
    77: 'सतहत्तर',
    78: 'अठहत्तर',
    79: 'उनासी',
    80: 'असी',
    81: 'एकासी',
    82: 'बयासी',
    83: 'त्रियासी',
    84: 'चौरासी',
    85: 'पचासी',
    86: 'छयासी',
    87: 'सतासी',
    88: 'अठासी',
    89: 'उनान्नब्बे',
    90: 'नब्बे',
    91: 'एकान्नब्बे',
    92: 'बान्नब्बे',
    93: 'त्रियान्नब्बे',
    94: 'चौरान्नब्बे',
    95: 'पन्चान्नब्बे',
    96: 'छयान्नब्बे',
    97: 'सन्तान्नब्बे',
    98: 'अन्ठान्नब्बे',
    99: 'उनान सय',
};

var numbernepali = {
    0: '०',
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
}

var englishMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


var englishMonthsnp = [
    'जनवरी',
    'फेब्रुवरी',
    'मार्च',
    'अप्रिल',
    'मे',
    'जुन',
    'जुलाई',
    'अगस्ट',
    'सेप्टेम्बर',
    'अक्टोबर',
    'नोभेम्बर',
    'डिसेम्बर'
]

var englishDaysnp = [
    'आइतबार',
    'सोमबार',
    'मङ्गलबार',
    'बुधबार',
    'बिहिबार',
    'शुक्रबार',
    'शनिबार'
]

var englishDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]


function momentnp(date) {
    date = new Date(date)
    if (isNaN(date)) {
       date = new Date()
    }
    return {
        fromNow: function(format) {
            // implementation of fromNow function
            const  validDate = validateDate(date)
            const now = new Date()
            const diff = now - validDate
            const diffSeconds = diff / 1000
            const diffMinutes = diffSeconds / 60
            const diffHours = diffMinutes / 60
            const diffDays = diffHours / 24
            const diffMonths = diffDays / 30
            const diffYears = diffMonths / 12

            if(diff === 0) return 'अहिले'
            var res 
            if (diff < 0) {
                    res =  'केहि समय पछी'
            } else{
                if (diffSeconds < 60) {
                res =  'केहि क्षण पहिले'
            } else if (diffMinutes < 60) {
                res =  engtonpNumber(Math.floor(diffMinutes)) + ' मिनेट पहिले'
            } else if (diffHours < 24) {
                res =  engtonpNumber(Math.floor(diffHours)) + ' घण्टा पहिले'
            } else if (diffDays < 30) {
                res =  engtonpNumber(Math.floor(diffDays)) + ' दिन पहिले'
            } else if (diffMonths < 12) {
                res =  engtonpNumber(Math.floor(diffMonths)) + ' महिना पहिले'
            } else {
                res =  engtonpNumber(Math.floor(diffYears)) + ' वर्ष पहिले'
            }
        }
        return res

        },
        format: function(format) {
            const validDate = validateDate(date)
            const year = validDate.getFullYear()
            const month = (validDate.getMonth() + 1) > 10 ?  (validDate.getMonth() + 1) : "0"+ (validDate.getMonth() + 1)
            const dayOfWeek = englishDays[validDate.getDay()]
            const monthOfYear = englishMonths[validDate.getMonth()]
            const yearOfDate = year
            const day = validDate.getDate() > 10 ? validDate.getDate()  : "0"+ validDate.getDate() 
            const dayOfMonth = (day%10 === 1 && day !== 11) ? `${day}st` : (day%10 === 2 && day !== 12) ? `${day}nd` : (day%10 === 3 && day !== 13) ? `${day}rd` : `${day}th`
            const hours = validDate.getHours() > 10 ? validDate.getHours()  : "0"+ validDate.getHours() 
            const minutes = validDate.getMinutes() > 10 ? validDate.getMinutes()  : "0"+ validDate.getMinutes() 
            const seconds = validDate.getSeconds() > 10 ? validDate.getSeconds()  : "0"+ validDate.getSeconds() 
            
            //dmy-/
            const dmyminus = `${year}-${month}-${day}` 
            const dmytminus = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}` 
            const dmyslash = `${year}/${month}/${day}` 
            const dmytslash = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}` 

            // DDMMYY
            const DDMMYY = `${dayOfMonth} ${englishMonths[validDate.getMonth()]}, ${year}`
            const DDDDMMYY = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${yearOfDate}`
            const ddDDMMYY = `${dayOfWeek.slice(0, 3)}, ${dayOfMonth} ${monthOfYear.slice(0, 3)} ${yearOfDate}`

            // Nepali Dates
            const DDDDMMYYnp = `${englishDaysnp[validDate.getDay()]}, ${getNepaliNumber(day)} ${englishMonthsnp[validDate.getMonth()]} ${getNepaliNumber(year)}`
            const DDMMYYnp = `${getNepaliNumber(day)} ${englishMonthsnp[validDate.getMonth()]}, ${getNepaliNumber(year)}`
            const YYMMDDDDNP = `${getNepaliNumber(day)} ${englishMonthsnp[validDate.getMonth()]} ${getNepaliNumber(year)}, ${englishDaysnp[validDate.getDay()]}`
            const dmytminusnp = `${engtonpNumber(validDate.getFullYear())}-${engtonpNumber(validDate.getMonth() + 1)}-${engtonpNumber(validDate.getDate())}, ${engtonpNumber(validDate.getHours())}:${engtonpNumber(validDate.getMinutes())}:${engtonpNumber(validDate.getSeconds())}`
            const dmyminusnp = `${engtonpNumber(validDate.getFullYear())}-${engtonpNumber(validDate.getMonth() + 1)}-${engtonpNumber(validDate.getDate())}`
            const dmyslashnp = `${engtonpNumber(validDate.getFullYear())}/${engtonpNumber(validDate.getMonth() + 1)}/${engtonpNumber(validDate.getDate())}`
            const dmytslashnp = `${engtonpNumber(validDate.getFullYear())}/${engtonpNumber(validDate.getMonth() + 1)}/${engtonpNumber(validDate.getDate())} ${engtonpNumber(validDate.getHours())}:${engtonpNumber(validDate.getMinutes())}:${engtonpNumber(validDate.getSeconds())}`
            const fullnp = `सन् ${getNepaliNumber(validDate.getFullYear())}, ${getNepaliNumber(validDate.getMonth() + 1)} महिना ${getNepaliNumber(validDate.getDate())} गते, ${getNepaliNumber(validDate.getHours())} बजेर ${getNepaliNumber(validDate.getMinutes())} मिनेट ${getNepaliNumber(validDate.getSeconds())} सेकेन्ड`
          
            // return the formatted date
            if (format === 'dmy-') return dmyminus
            if (format === 'dmyt-') return dmytminus
            if (format === 'dmy/') return dmyslash
            if (format === 'dmyt/') return dmytslash
            if (format === 'DDMMYY') return DDMMYY
            if (format === 'DDDDMMYY') return DDDDMMYY
            if (format === 'ddDDMMYY') return ddDDMMYY
            if (format === 'DDDDMMYYnp') return DDDDMMYYnp
            if (format === 'DDMMYYnp') return DDMMYYnp
            if (format === 'YYMMDDDDnp') return YYMMDDDDNP
            if (format === 'dmytnp-') return dmytminusnp
            if (format === 'dmynp-') return dmyminusnp
            if (format === 'dmynp/') return dmyslashnp
            if (format === 'dmytnp/') return dmytslashnp
            if(format === 'fullnp') return fullnp

            return dmytminus
        },
        inBS: function(format) {
            // implementation of inBS function
            const validDate = validateDate(date)
            const year = validDate.getFullYear()
            const month = validDate.getMonth()
            const day = validDate.getDate()
            const bsDate = ADTOBS(year, month, day)

            const year_bs = bsDate.split('-')[0]
            const month_bs = bsDate.split('-')[1]
            const day_bs = bsDate.split('-')[2]
            const monthName = MONTH_NAME_BS[month_bs - 1]
            const ddmmyy = `${day_bs} ${(monthName)}, ${getNepaliNumber(year_bs)}`
            const yymmdd = `${engtonpNumber(year_bs)}/${(engtonpNumber(month_bs))}/${engtonpNumber(day_bs)}`
            const ddmmyyfullnp = `${getNepaliNumber(day_bs)} ${getNepaliNumber(monthName)}, ${getNepaliNumber(year_bs)}`
            const mmddyy = `${monthName} ${getNepaliNumber(day_bs)}, ${getNepaliNumber(year_bs)}`
            
            // return the formatted date
            if (format === 'YYMMDD') return bsDate
            if (format === 'ddmmyy') return ddmmyy
            if (format === 'ddmmyyfull') return ddmmyyfullnp
            if (format === 'mmddyy') return mmddyy
            if (format === 'yymmdd') return yymmdd

            return ddmmyy


            
        },
        isPast:function(){
            // returns the boolean if the date is past or not
            const today = new Date()
            return (date - today) > 0 ? false : true
        }
    }
}

function validateDate(date){
    return new Date(date) ? new Date(date) : new Date()
}




function getNepaliNumber(n) {
    if (n < 100) {
        return words[n];
    } else if (n < 1000) {
        // Handle numbers in hundreds
        var hundreds = Math.floor(n / 100);
        var remainder = n % 100;
        return (words[hundreds] + ' सय' + (remainder > 0 ? ' ' + getNepaliNumber(remainder) : ''));
    } else {
        // Handle numbers in thousands
        var thousands = Math.floor(n / 1000);
        var remainder = n % 1000;
        return (words[thousands] + ' हजार' + (remainder > 0 ? ' ' + getNepaliNumber(remainder) : ''));
    }
}

function engtonpNumber(n) {
    var str = n.toString();
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += numbernepali[str[i]];
    }
    if(result.length === 1) result = '०' + result
    return result;
}

export default momentnp