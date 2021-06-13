sota.sotaConfig.sections = [
    {"slug": "general", "name": "General", "colors": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"]},
    {"slug": "politics", "name": "Politics & Worldview", "colors": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#DFDBE7"]},
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

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/political_affiliation",
        totalResp: 931,
        title: "Political Affiliation"
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/politicsXgender",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        title: "Political Affiliation & Gender Identity",
        subtitle: "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents"
    });

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/censorship",
        title: "Self-Censorship",
        subtitle: "While at Andover, have you ever felt the need to censor yourself due to your political leaning?"
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/politics_old/censorshipXpolitics",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Self-Censorship & Political Affiliation",
        subtitle: "Percentage of respondents who answered \“Yes\” to self-censorship question sorted by political affiliation.",
    });

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/shifting_perspectives",
        title: "Shifting Perspectives",
        subtitle: "Have your political beliefs changed after the increase in media coverage of societal and systemic injustices this past year?"
    });

    sota.barChart({
        section: "politics",
        dataFile: "assets/data/politics/news_sources",
        totalResp: 926,
        displayPercentage: true,
        title: "Staying Informed",
        subtitle: "How do you get your news?"
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/womens_rightsXfeminist",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Feminism",
        subtitle: "Do you support \"the advocacy of women'srights on the ground of the equality of the sexes?\" "
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/feminist",
        labelStyle: "onBar",
        showLegend: true,
        title: "Feminism",
        subtitle: "Do you consider yourself a feminist?"
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/feministXgender",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Feminism By Gender Identity",
        subtitle: "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents."
    });

    sota.columnChart({
        section: "politics",
        dataFile: "assets/data/politics/top_5_news_sources",
        totalResp: 930,
        title: "Top 5 News Sources"
    });

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/informed",
        sorted: false,
        title: "How informed do you believe you are about politics and/or current events?"
    });

    sota.columnChart({
        section: "politics",
        dataFile: "assets/data/politics/blm",
        title: "Black Lives Matter",
        subtitle: "Do you support the Black Lives Matter movement?",
    });

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/affirmative_action",
        title: "Affirmative Action",
        subtitle: "Do you support affirmative action in academic institutions?"
    });

    sota.stackedColumnChart({
        section: "politics",
        dataFile: "assets/data/politics/affirmative_actionXclass",
        title: "Do you support affirmative action in academic institutions?",
        subtitle: "Percentage by Class Year"
    })

    sota.stackedColumnChart({
        section: "politics",
        dataFile: "assets/data/politics/affirmative_actionXrace",
        title: "Do you support affirmative action in academic institutions?",
        subtitle: "Percentage by Race"
    })

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/prison_reformXincarceration",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title: "Prison System",
        subtitle: "Do you believe that the current prison system in the United States should be alterede"
    });

    sota.pieChart({
      section: "politics",
      dataFile: "assets/data/politics/immigration",
      title:"Immigration & Border Security",
      subtitle:"Do you believe that the United States should increase border security?"
    });

    sota.bigNumber({
      section: "politics", number: "33.3%", title: "\"Reverse Racism\"", subtitle: "Of respondents believe that white people can experience racism",
    });

    sota.stackedColumnChart({
        section: "politics",
        dataFile: "assets/data/politics/reverse_racismXclass",
        title: "\"Reverse Racism\"",
        subtitle: "Do you believe that white people can experience racism (colloquially known as reverse racism)? "
    });

    sota.stackedBarChart({
        section: "politics",
        dataFile: "assets/data/politics/abortion",
        labelStyle: "onBar",
        showLegend: true,
        title: "Abortion",
        subtitle: "Do you think that people should have the right to have an abortion?"
    });

    sota.stackedColumnChart({
        section: "politics",
        dataFile: "assets/data/politics/abortionXgender",
        title: "Do you think that people should have the right to have an abortion?",
        subtitle: "By Gender Identity"
    })

    sota.pieChart({
        section: "politics",
        dataFile: "assets/data/politics/drug_regulation",
        title:"Drug Regulation",
        subtitle:"Do you support the legalization of marijuana?"
    });

    sota.bigNumber({
      section: "politics", number: "75.6%", title: "Minimum Wage", subtitle: "Of respondents support raising the federal minimum wage to $15 per hour",
    });


    sota.barChart({
        section: "politics",
        dataFile: "assets/data/politics/capital_punishment",
        labelStyle: "onBar",
        groupLabelStyle: "onBar",
        showLegend: true,
        title:"Capital Punishment",
        subtitle:"Do you support the death penalty?"
    });

    sota.barChart({
        section: "politics",
        dataFile: "assets/data/politics/firearms",
        title: "Firearm Ownership",
        subtitle: "Does your family own firearms?"
    })

    sota.bigNumber({
      section: "politics", number: "86.9%", title: "Gun Control", subtitle: "Of respondents believe that gun control laws in the United States should be stricter.",
    });

//Campus Culture
    sota.pieChart({
        section: "campus",
        dataFile: "assets/data/campus/varsityathlete",
        title: "Are you a varsity athlete?"
    });

    sota.stackedBarChart({
        section: "campus",
        dataFile: "assets/data/campus/ideologicaldiversity",
        showLegend: true,
        labelStyle: "onBar",
        title: "Do you think the school promotes ideological diversity in its selection of speakers?",
    });

        //new stuff
    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/mlkday",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do you feel that the MLK Day curriculum is adequate?",
    });

    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/antiracist",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do you think Andover’s anti-racist work is sufficient?",
    });

    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/antiracismtaskforce",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do you feel the creation of the Anti-Racism Task Force was a productive choice in making Andover a more racially equitable, inclusive, and just community?",
    });

    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/indigenousday",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do  you think that Andover should have a \"day on\" for Indigenous People's Day?",
    });

    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/glorifyathletics",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do you think that Andover prioritizes athletics (compared to music, art, robotics, etc.)?",
    });

    sota.pieChart({
      section: "campus",
      dataFile: "assets/data/campus/shuman",
      title: "Do you think that the Shuman Office of Admissions accurately presents the school?"
    });

    sota.barChart({
      section: "campus",
      dataFile: "assets/data/campus/carbon_footprint",
      displayPercentage: true,
      title: "How often do you make conscious decisions to decrease your carbon footprint? A carbon footprint is \“a measure of the carbon emissions of a particular individual, organization, or community\” (Oxford Dictionary)."
    });

    sota.stackedBarChart({
      section: "campus",
      dataFile: "assets/data/campus/combat_climate_change",
      showLegend: true,
      labelStyle: "onBar",
      title: "Do you feel like Andover is doing enough to combat climate change?",
    });

    sota.pieChart({
      section: "campus",
      dataFile: "assets/data/campus/divestfossilfuel",
      title: "Do you believe that Andover should divest from fossil fuel companies? Divestment is the act of \"taking money away from where you have invested it\" (Oxford Dictionaries)."
    });

    sota.sotaMasonry();
}
