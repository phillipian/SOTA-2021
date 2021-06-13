sota.sotaConfig.sections = [
    {"slug": "general", "name": "General", "colors": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"]},
    {"slug": "campus", "name": "Campus Culture", "colors": sota.colorInterpolate("#AAA000")},
    {"slug": "content", "name": "Content section", "colors": sota.colorInterpolate("#000000"), "content": `
    <div class="demo-content">
        <h2>Demo content</h2>
        <p>This is a demo of a content section. Instead of graphs, you can put raw HTML here and format to your heart's content.</p>
    </div>
`}
]


sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);


// required only if you want to generate default layout containers. Can also specify directly through HTML and useselectors for graphs
sota.createSections(sota.sotaConfig);


// GENERAL
window.onload = () => {

// GENERAL

    sota.bigNumber({
      section: "general", number: "949", title: "", subtitle: "students responded",
    });

    sota.bigNumber({
      section: "general", number: "81.8%", title: "", subtitle: "of the student body participated in this survey",
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/class",
        totalResp: 945,
        displayPercentage: true,
        title: "WHAT CLASS ARE YOU IN?",
        subtitle: "Editor’s note: four students did not select a class year.",
    });

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/boarding",
      title: "Boarding vs. Day Students",
      subtitle: "In a normal year, what would you be enrolled as?"
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/sex",
        totalResp: 947,
        displayPercentage: true,
        title: "WHAT IS YOUR SEX?",
        subtitle: "Editor’s note: two students did not select a class year."
    });

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/community_type",
      title: "Geographic Distribution",
      subtitle: "What type of community do you live in?"
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/gender",
        totalResp: 944,
        displayPercentage: true,
        title: "WHAT IS YOUR GENDER IDENTITY?",
        subtitle: "Editor’s note: five students did not select a class year."
    });

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/region",
      title: "Region",
      subtitle: "What region are you from?"
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/pronoun",
        totalResp: 982,
        displayPercentage: true,
        title: "What are your preferred gender pronouns?",
        subtitle: "Editor’s note: respondents were able to select multiple responses."
    });

    sota.columnChart({
      section: "general",
      dataFile: "assets/data/general/race",
      totalResp: 1057,
      title: "What is your race?",
      subtitle: "Editor’s Note: respondents were given the option to select more than one answer if applicable.",
    });

    sota.barChart({
      section: "general",
      dataFile: "assets/data/general/ethnicity",
      totalResp: 1349,
      title: "What is your ethnicity?",
      subtitle: "Editor’s Note: respondents were given the option to select more than one answer if applicable.",
    });

    sota.stackedBarChart({
        section: "general",
        dataFile: "assets/data/general/sexual_orientationXgender",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "GENDER IDENTITY AND SEXUAL ORIENTATION",
        subtitle: "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents."
    })

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/sexual_orientation",
        totalResp: 1028,
        displayPercentage: true,
        title: "What is your sexual orientation?"
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/romantic_orientation",
        totalResp: 1001,
        displayPercentage: true,
        title: "What is your romantic orientation?"
    });

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/income",
      totalResp: 945,
      sorted: false,
      title: "NET INCOME",
      subtitle: "What is your net family income?"
    });

    sota.columnChart({
        section: "general",
        dataFile: "assets/data/general/financial_aid",
        totalResp: 967,
        title: "Financial Aid",
        subtitle: "Are you on any form of financial aid?"
    });

    sota.barChart({
        section: "general",
        dataFile: "assets/data/general/parents_college",
        totalResp: 946,
        displayPercentage: true,
        title: "HOW MANY OF YOUR PARENTS GRADUATED FROM COLLEGE?"
    });

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/incarcerated",
      totalResp: 930,
      sorted: false,
      title: "INCARCERATION",
      subtitle: "Do you personally know someone who has been incarcerated?"
    });

    sota.bigNumber({
      section: "general", number: "33.2%", title: "Legacy", subtitle: "of respondents have at least one immediate family member who is currently attending or has previously attended Andover.",
    })

    sota.stackedBarChart({
        section: "general",
        dataFile: "assets/data/general/legacyXincome",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: false,
        title: "PARENT LEGACY & INCOME",
        subtitle: "Did any of your guardian(s) attend Andover? What is your net family income?"
    }) //better if 2 pie charts

    sota.pieChart({
      section: "general",
      dataFile: "assets/data/general/varsity",
      sorted: false,
      title: "Varsity Athletics",
      subtitle: "Are you a varsity athlete?"
    });

    sota.barChart({
    section: "general",
    dataFile: "assets/data/general/religion",
    totalResp: 1075,
    displayPercentage: true,
    title: "Religious Affiliation",
    subtitle: "With which religion/faith system do you currently identify, if any?"
    });

// Politics

    //new charts
    sota.pieChart({
        section: "campus",
        dataFile: "assets/data/varsityathletetest",
        title: "Are you a varsity athlete?",
        subtitle: "blah blah blah",
    });

    sota.pieChart({section: "campus", dataFile: "assets/data/test", title: "Pie Chart",
    subtitle: "Distribution of students by home community type"});

    sota.stackedBarChart({
        section: "campus",
        dataFile: "assets/data/ideologicaldiversity",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Do you think the school promotes ideological diversity in its selection of speakers?",
        subtitle: "blah blah blah"
    });

    sota.sotaMasonry();
}
