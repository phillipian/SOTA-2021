sota.sotaConfig.sections = [
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