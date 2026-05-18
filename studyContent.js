/**
 * Study Content Knowledge Area Engine
 * Each subtopic (by customNumber) maps to units with knowledge areas.
 * Content is designed for PSC NBL 9th Level 25-mark answer writing.
 */

const kaTemplates = {
    foundation: { icon: '📘', cls: 'foundation', label: 'Foundation & Introduction' },
    definitions: { icon: '📖', cls: 'definition', label: 'Key Definitions' },
    flowchart: { icon: '🗺️', cls: 'flowchart', label: 'Mind Map / Flowchart' },
    history: { icon: '📜', cls: 'history', label: 'History & Development' },
    objectives: { icon: '🎯', cls: 'objective', label: 'Objectives, Need & Significance' },
    coreContent: { icon: '📚', cls: 'core', label: 'Core Content (Main Body)' },
    calculations: { icon: '🔢', cls: 'calc', label: 'Calculations & Formulas' },
    prosAndCons: { icon: '⚖️', cls: 'proscons', label: 'Strengths & Weaknesses' },
    recentDev: { icon: '🔄', cls: 'recent', label: 'Recent & Future Developments' },
    bankingRelation: { icon: '🏦', cls: 'banking', label: 'Banking Sector Relevance' },
    realWorld: { icon: '🌍', cls: 'realworld', label: 'Real World Example' },
    quantData: { icon: '📊', cls: 'data', label: 'Quantitative Data (NRB/MOF/WB)' },
    legalFramework: { icon: '⚖️', cls: 'legal', label: 'Legal & Regulatory Framework' },
    currentProblems: { icon: '⚠️', cls: 'problems', label: 'Current Problems & Recommendations' },
    nblStrategy: { icon: '🏛️', cls: 'nbl', label: 'NBL Strategic Recommendations' }
};

const studyContentDB = {
    "I.A.1.1": {
        subtopic: "GDP Concepts & Measurements",
        units: [
            {
                title: "Concept of Gross Domestic Product (GDP)",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Gross Domestic Product (GDP)</span> is the total monetary value of all <b>final goods and services</b> produced within a country's geographical boundaries during a specific time period (usually one fiscal year), regardless of who owns the factors of production.</p>
<p>GDP is the most widely used indicator to measure the <i>economic performance</i> and <i>standard of living</i> of a nation. It was first developed by <b>Simon Kuznets</b> in 1934 for the U.S. Congress report and later standardized by the <b>United Nations System of National Accounts (SNA)</b>.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>GDP at Market Price</b></td><td>Value of output at prices paid by consumers, including indirect taxes minus subsidies</td></tr>
<tr><td><b>GDP at Factor Cost</b></td><td>Value of output at cost of production = GDP(MP) − Indirect Taxes + Subsidies</td></tr>
<tr><td><b>Nominal GDP</b></td><td>GDP measured at current year prices (not adjusted for inflation)</td></tr>
<tr><td><b>Real GDP</b></td><td>GDP adjusted for inflation using a base year's price level</td></tr>
<tr><td><b>GDP Deflator</b></td><td>(Nominal GDP / Real GDP) × 100 — measures overall price level changes</td></tr>
<tr><td><b>Per Capita GDP</b></td><td>GDP ÷ Total Population — average economic output per person</td></tr>
<tr><td><b>GDP Growth Rate</b></td><td>((GDP₂ − GDP₁) / GDP₁) × 100 — rate of economic expansion</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">GDP Measurement Approaches</div>
<div class="fc-box">Production/Output Method</div> <span class="fc-arrow">→</span> <span style="font-size:0.78rem;">Sum of Value Added at each stage</span><br>
<div class="fc-box">Income Method</div> <span class="fc-arrow">→</span> <span style="font-size:0.78rem;">Wages + Rent + Interest + Profit</span><br>
<div class="fc-box">Expenditure Method</div> <span class="fc-arrow">→</span> <span style="font-size:0.78rem;">C + I + G + (X − M)</span><br>
<div style="margin-top:8px;font-size:0.76rem;color:var(--text-secondary);">All three methods yield the same GDP figure (theoretically)</div>
</div>`,

                    history: `<p>The concept of national income measurement dates back to <b>William Petty (1665)</b> in England and <b>Gregory King</b>. However, modern GDP was formalized by <span class="ka-highlight">Simon Kuznets</span> in 1934 when the U.S. Congress commissioned him to develop a system for measuring national output during the Great Depression.</p>
<p>After WWII, the <b>Bretton Woods Conference (1944)</b> established GDP as the standard metric for international comparison. The <b>UN System of National Accounts (SNA 1953, revised 1993 and 2008)</b> standardized GDP computation methodology globally.</p>
<p><i>Nepal adopted the SNA framework</i> through the <b>Central Bureau of Statistics (CBS)</b>. Nepal's first national accounts were prepared in the 1960s, and the CBS currently follows the <b>SNA 2008</b> guidelines with base year <span class="ka-important">2000/01 (2057/58 BS)</span>.</p>`,

                    objectives: `<ul>
<li><b>Measure Economic Performance:</b> GDP quantifies the total output and productive capacity of a nation</li>
<li><b>International Comparison:</b> Enables comparison using <span class="ka-term">PPP (Purchasing Power Parity)</span> adjusted figures</li>
<li><b>Policy Formulation:</b> Governments use GDP data for <i>monetary policy, fiscal policy,</i> and development planning</li>
<li><b>Investment Decisions:</b> Foreign and domestic investors assess GDP growth trends before capital deployment</li>
<li><b>Poverty & Development Analysis:</b> Per capita GDP helps classify countries (LDC, developing, developed)</li>
<li><b>Budgetary Planning:</b> Nepal's annual budget allocation is directly linked to GDP projections by MOF</li>
</ul>`,

                    coreContent: `<p><b>Three Methods of GDP Calculation:</b></p>
<p><span class="ka-highlight">1. Production (Output) Method:</span> Sums the <b>Gross Value Added (GVA)</b> across all sectors.</p>
<blockquote>GDP = Σ (Value of Output − Value of Intermediate Consumption) + Taxes on Products − Subsidies on Products</blockquote>
<p>Nepal's CBS uses this as the <span class="ka-important">primary method</span>, dividing the economy into 15 sectors: Agriculture, Mining, Manufacturing, Electricity/Gas/Water, Construction, Trade, Hotels/Restaurants, Transport, Communications, Financial Intermediation, Real Estate, Public Administration, Education, Health, and Other Services.</p>

<p><span class="ka-highlight">2. Income Method:</span> Sums all factor incomes.</p>
<blockquote>GDP = Compensation of Employees + Operating Surplus + Mixed Income + Taxes on Production − Subsidies</blockquote>

<p><span class="ka-highlight">3. Expenditure Method:</span> Sums all final expenditures.</p>
<blockquote>GDP = C + I + G + (X − M)<br>Where: C = Private Consumption, I = Gross Investment, G = Government Spending, X = Exports, M = Imports</blockquote>

<p><b>GDP vs GNP Relationship:</b></p>
<blockquote>GNP = GDP + Net Factor Income from Abroad (NFIA)<br>
NNP = GNP − Depreciation (Capital Consumption Allowance)<br>
National Income (NI) = NNP at Factor Cost</blockquote>`,

                    calculations: `<p><b>Key GDP Formulas for PSC Exam:</b></p>
<table>
<tr><th>Formula</th><th>Expression</th></tr>
<tr><td>GDP (Expenditure)</td><td>C + I + G + (X − M)</td></tr>
<tr><td>GDP at Factor Cost</td><td>GDP(MP) − Indirect Taxes + Subsidies</td></tr>
<tr><td>Real GDP</td><td>(Nominal GDP / GDP Deflator) × 100</td></tr>
<tr><td>GDP Growth Rate</td><td>((GDP<sub>t</sub> − GDP<sub>t-1</sub>) / GDP<sub>t-1</sub>) × 100</td></tr>
<tr><td>Per Capita GDP</td><td>GDP / Total Population</td></tr>
<tr><td>GDP Deflator</td><td>(Nominal GDP / Real GDP) × 100</td></tr>
<tr><td>GNP</td><td>GDP + NFIA</td></tr>
<tr><td>NDP</td><td>GDP − Depreciation</td></tr>
</table>`,

                    prosAndCons: `<p><b class="ka-success">✅ Strengths of GDP as a Measure:</b></p>
<ul>
<li>Universally accepted metric for economic comparison</li>
<li>Standardized methodology (UN SNA) ensures comparability</li>
<li>Captures overall productive capacity of the economy</li>
<li>Useful for policy decisions, budgeting, and credit rating</li>
</ul>
<p><b class="ka-important">❌ Limitations of GDP:</b></p>
<ul>
<li><b>Excludes informal/underground economy</b> — significant in Nepal (~35% of GDP by some estimates)</li>
<li><b>Ignores income distribution</b> — GDP can grow while inequality worsens (Gini coefficient needed)</li>
<li><b>Ignores environmental degradation</b> — GDP rises even when forests are depleted</li>
<li><b>Excludes household/unpaid work</b> — women's household contributions not counted</li>
<li><b>Quality of life not captured</b> — HDI, Happiness Index needed as supplements</li>
<li><b>Does not reflect sustainability</b> — resource depletion treated as income</li>
</ul>`,

                    recentDev: `<p><span class="ka-highlight">Global Trends:</span></p>
<ul>
<li><b>Green GDP:</b> Adjusts GDP for environmental costs — China, India experimenting with pilot measures</li>
<li><b>GDP+ (Dashboard approach):</b> OECD advocates supplementing GDP with well-being indicators</li>
<li><b>Digital Economy measurement:</b> Free digital services (Google, social media) not captured in traditional GDP</li>
</ul>
<p><span class="ka-highlight">Nepal Context (FY 2080/81):</span></p>
<ul>
<li>Nepal's <b>GDP growth target: 6%</b> but actual achievement typically 3-5%</li>
<li>CBS is working on <b>rebasing GDP to 2010/11</b> as new base year</li>
<li>Government push for <b>Provincial GDP</b> measurement under federal structure</li>
<li><b>Satellite accounts</b> for tourism, agriculture being developed</li>
</ul>`,

                    bankingRelation: `<p>GDP is <span class="ka-important">critically important</span> for the banking sector:</p>
<ul>
<li><b>Credit-to-GDP Ratio:</b> NRB monitors this ratio (currently ~95% in Nepal) to assess systemic risk. BIS recommends action when gap exceeds 10%</li>
<li><b>Basel III Counter-Cyclical Buffer:</b> Activated based on credit-to-GDP gap analysis</li>
<li><b>Monetary Policy Calibration:</b> NRB sets M2 growth targets relative to GDP growth + inflation target</li>
<li><b>Fiscal Deficit Financing:</b> Banks' government securities holdings linked to fiscal deficit (% of GDP)</li>
<li><b>Sectoral Lending:</b> NRB's productive sector lending requirements (agriculture min 15%) aligned with GDP composition</li>
<li><b>Stress Testing:</b> Banks use GDP growth scenarios (baseline, adverse, severely adverse) for ICAAP</li>
</ul>`,

                    realWorld: `<blockquote>
<b>🌍 The Nepal Earthquake GDP Impact (2015):</b><br>
The devastating 7.8 magnitude earthquake of April 25, 2015 (Baisakh 12, 2072 BS) caused estimated damages of <span class="ka-important">NPR 706 billion (approximately 33% of Nepal's GDP)</span>. GDP growth plummeted from 6% (FY 2071/72 target) to just <b>0.6%</b> — the lowest in over a decade. The tourism sector contracted by 32%, and agriculture by 1.5%. This starkly demonstrated how a single catastrophic event can reshape an entire nation's GDP trajectory. Nepal's reconstruction authority (NRA) channeled over NPR 800 billion in rebuilding, which paradoxically boosted construction sector GDP in subsequent years — illustrating the "broken window fallacy" limitation of GDP measurement.
</blockquote>`,

                    quantData: `<table>
<tr><th>Indicator</th><th>Value (FY 2080/81)</th><th>Source</th></tr>
<tr><td>Nominal GDP</td><td>NPR ~5,400 Billion</td><td>CBS/MOF</td></tr>
<tr><td>Real GDP Growth</td><td>~3.9%</td><td>NRB Economic Survey</td></tr>
<tr><td>Per Capita GDP</td><td>~USD 1,400</td><td>World Bank</td></tr>
<tr><td>Agriculture share of GDP</td><td>~24%</td><td>CBS</td></tr>
<tr><td>Services share of GDP</td><td>~54%</td><td>CBS</td></tr>
<tr><td>Industry share of GDP</td><td>~13%</td><td>CBS</td></tr>
<tr><td>Remittance/GDP Ratio</td><td>~23%</td><td>NRB</td></tr>
<tr><td>Credit-to-GDP Ratio</td><td>~95%</td><td>NRB</td></tr>
</table>
<p style="font-size:0.76rem;color:var(--text-secondary);"><i>Note: Figures are approximate based on latest available data. Verify from current NRB/MOF publications for exam.</i></p>`,

                    legalFramework: `<ul>
<li><b>Statistics Act, 2079 BS:</b> Governs the collection, compilation, and dissemination of national statistics including GDP</li>
<li><b>Central Bureau of Statistics (CBS):</b> Mandated body for GDP computation under the National Statistics Office framework</li>
<li><b>NRB Act, 2058:</b> Section 4 — NRB's mandate includes maintaining macroeconomic stability (GDP growth target is key input)</li>
<li><b>Constitutional Provision:</b> Article 51(d) of Nepal's Constitution — State policy on economic growth and equitable distribution</li>
<li><b>UN SNA 2008:</b> International standard Nepal follows for GDP methodology</li>
<li><b>IMF Article IV Consultations:</b> Regular GDP assessment reviews for Nepal</li>
<li><b>NRB Unified Directive 1:</b> Capital adequacy framework references GDP-linked systemic risk buffers</li>
</ul>`,

                    currentProblems: `<p><b class="ka-important">Key Problems in Nepal's GDP Measurement:</b></p>
<ul>
<li><b>Informal Economy:</b> ~35% of economic activity goes unrecorded — CBS surveys miss significant portions</li>
<li><b>Outdated Base Year:</b> Current base year 2000/01 is significantly outdated, distorting sectoral weights</li>
<li><b>Provincial Data Gaps:</b> Federal restructuring requires provincial GDP but disaggregated data unavailable</li>
<li><b>Remittance Distortion:</b> ~23% remittance/GDP ratio inflates consumption GDP without proportional production</li>
<li><b>Agricultural Under-reporting:</b> Subsistence farming output inadequately captured</li>
</ul>
<p><b class="ka-success">Recommendations:</b></p>
<ul>
<li>Accelerate <b>base year revision</b> to 2010/11 or later</li>
<li>Develop <b>quarterly GDP estimates</b> (currently only annual)</li>
<li>Integrate <b>digital/e-commerce transactions</b> into GDP computation</li>
<li>Strengthen CBS capacity with <b>technology-driven data collection</b></li>
</ul>`,

                    nblStrategy: `<p><b>NBL-Specific Strategic Recommendations:</b></p>
<ul>
<li><b>GDP-Linked Lending Strategy:</b> NBL should align its loan portfolio composition with GDP sectoral weights — currently agriculture (24%), services (54%), industry (13%)</li>
<li><b>Counter-Cyclical Provisioning:</b> Build dynamic provisions during high-GDP-growth periods to buffer against downturns</li>
<li><b>Macro Stress Testing:</b> Integrate GDP growth scenarios (baseline: 4%, adverse: 1%, severe: -2%) into NBL's ICAAP framework</li>
<li><b>Regional Branch Strategy:</b> Use provincial GDP estimates to optimize branch network and lending focus by province</li>
<li><b>Credit-GDP Monitoring:</b> NBL's internal risk committee should monitor its own credit-to-provincial-GDP ratio quarterly</li>
<li><b>Green Banking Initiative:</b> As Nepal moves toward Green GDP measurement, NBL should develop green lending products aligned with sustainable GDP growth</li>
</ul>`
                }
            },
            {
                title: "GDP Measurement Methods & Practical Application",
                knowledgeAreas: {
                    foundation: `<p>The three approaches to GDP measurement — <span class="ka-highlight">Production, Income, and Expenditure</span> — are theoretically equivalent but practically differ in application. Nepal primarily uses the <b>Production (Output) Method</b> through the Central Bureau of Statistics.</p>
<p>Understanding <i>which method applies where</i> and <i>why results may differ</i> is essential for both exam answer writing and practical banking analysis.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Value Added</b></td><td>Output value minus intermediate consumption at each production stage</td></tr>
<tr><td><b>Intermediate Consumption</b></td><td>Goods/services used up in the production process (raw materials)</td></tr>
<tr><td><b>Final Goods</b></td><td>Goods purchased for end use, not for further production</td></tr>
<tr><td><b>Double Counting</b></td><td>Error of counting output at multiple stages — avoided by value added method</td></tr>
<tr><td><b>Transfer Payments</b></td><td>Payments without corresponding goods/services (pensions, scholarships) — excluded from GDP</td></tr>
</table>`,

                    coreContent: `<p><span class="ka-highlight">Production Method (Nepal's Primary):</span></p>
<p>CBS divides the economy into <b>15 sectors</b> and computes GVA for each:</p>
<ol>
<li>Agriculture & Forestry</li>
<li>Fishing</li>
<li>Mining & Quarrying</li>
<li>Manufacturing</li>
<li>Electricity, Gas & Water</li>
<li>Construction</li>
<li>Wholesale & Retail Trade</li>
<li>Hotels & Restaurants</li>
<li>Transport, Storage & Communication</li>
<li>Financial Intermediation</li>
<li>Real Estate & Business Services</li>
<li>Public Administration & Defence</li>
<li>Education</li>
<li>Health & Social Work</li>
<li>Other Community/Personal Services</li>
</ol>
<p><span class="ka-highlight">Expenditure Method Components:</span></p>
<blockquote><b>GDP = C + I + G + (X − M)</b><br>
<b>C</b> (Private Consumption): ~82% of Nepal's GDP — dominated by remittance-fueled household spending<br>
<b>I</b> (Investment/GFCF): ~33% — includes construction, machinery<br>
<b>G</b> (Government): ~12% — expanding under federal structure<br>
<b>(X−M)</b> (Net Exports): <span class="ka-important">−35% (persistent trade deficit)</span></blockquote>`,

                    calculations: `<p><b>Numerical Example for Exam:</b></p>
<blockquote>
<b>Q:</b> Given: Private Consumption = NPR 4,200B, Investment = NPR 1,700B, Government Spending = NPR 650B, Exports = NPR 180B, Imports = NPR 1,800B. Calculate GDP by Expenditure Method.<br><br>
<b>A:</b> GDP = C + I + G + (X − M)<br>
= 4,200 + 1,700 + 650 + (180 − 1,800)<br>
= 4,200 + 1,700 + 650 + (−1,620)<br>
= <span class="ka-important">NPR 4,930 Billion</span>
</blockquote>`,

                    prosAndCons: `<table>
<tr><th>Method</th><th>Strengths</th><th>Weaknesses</th></tr>
<tr><td><b>Production</b></td><td>Captures sectoral composition; avoids double counting</td><td>Difficult to measure informal sector; data lag</td></tr>
<tr><td><b>Income</b></td><td>Shows distribution of national income</td><td>Self-employment income hard to separate; tax evasion distorts</td></tr>
<tr><td><b>Expenditure</b></td><td>Easy to understand; shows demand structure</td><td>Inventory changes complex; import data often delayed</td></tr>
</table>`,

                    bankingRelation: `<p>Banks use GDP data extensively:</p>
<ul>
<li><b>Sector-wise lending:</b> GDP sectoral shares guide NRB's productive sector lending mandates</li>
<li><b>Credit absorption capacity:</b> Rapid credit growth beyond GDP growth signals asset bubble risk</li>
<li><b>NPL forecasting:</b> GDP contraction periods historically correlate with rising NPLs in Nepal's banking system</li>
</ul>`
                }
            }
        ]
    },

    "I.A.1.2": {
        subtopic: "GDP Computation Challenges in Nepal Frameworks",
        units: [
            {
                title: "Structural Challenges in Nepal's GDP Measurement",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Nepal's GDP computation</span> faces unique structural challenges rooted in the country's <b>agrarian economy, informal sector dominance, geographic fragmentation,</b> and <b>institutional capacity constraints</b> of the Central Bureau of Statistics (CBS).</p>
<p>Despite following the <b>UN SNA 2008</b> framework, Nepal's GDP estimates carry significant margins of error — the IMF has noted discrepancies of <span class="ka-important">up to 2-3 percentage points</span> between preliminary and revised GDP figures.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Informal Economy</b></td><td>Economic activities outside formal regulatory/tax frameworks — estimated at ~35% of Nepal's GDP</td></tr>
<tr><td><b>Subsistence Agriculture</b></td><td>Farming primarily for self-consumption rather than market sale — hard to monetize in GDP</td></tr>
<tr><td><b>Base Year</b></td><td>Reference year used for Real GDP calculation — Nepal currently uses 2000/01 (2057/58 BS)</td></tr>
<tr><td><b>Statistical Discrepancy</b></td><td>Difference between GDP calculated by different methods — ideally should be zero</td></tr>
<tr><td><b>Satellite Accounts</b></td><td>Supplementary accounts for specific sectors (tourism, environment) not fully captured in standard SNA</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">Nepal GDP Computation Chain</div>
<div class="fc-box">CBS Field Surveys</div> <span class="fc-arrow">→</span>
<div class="fc-box">Sectoral GVA Compilation</div> <span class="fc-arrow">→</span>
<div class="fc-box">Preliminary Estimates</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">NRB/MOF Review</div> <span class="fc-arrow">→</span>
<div class="fc-box">Revised GDP</div> <span class="fc-arrow">→</span>
<div class="fc-box">Final GDP (2-3 year lag)</div>
</div>`,

                    coreContent: `<p><b>Major Computation Challenges:</b></p>
<p><span class="ka-highlight">1. Informal Sector Measurement:</span> Nepal's informal economy comprises <b>~70% of employment</b> and ~35% of output. Street vendors, household enterprises, cross-border informal trade with India, and domestic labor are largely uncaptured.</p>
<p><span class="ka-highlight">2. Agricultural Valuation:</span> Over 60% of Nepal's population depends on agriculture, but <b>subsistence farming</b> (non-market production) makes accurate valuation extremely difficult. CBS uses imputed values based on sample surveys with limited coverage in remote hill/mountain districts.</p>
<p><span class="ka-highlight">3. Outdated Base Year:</span> Nepal's current base year of <span class="ka-important">2000/01 (FY 2057/58)</span> is over 25 years old. Economic structure has fundamentally shifted — remittance economy, urbanization, digital services — but sectoral weights remain anchored to 2000/01 patterns.</p>
<p><span class="ka-highlight">4. Geographic Fragmentation:</span> Nepal's <b>77 districts</b> across three ecological zones (Terai, Hill, Mountain) with poor infrastructure make comprehensive data collection logistically challenging and expensive.</p>
<p><span class="ka-highlight">5. Remittance Economy Distortion:</span> Remittances (~23% of GDP) fuel consumption but are <b>not production</b>. GDP captures the consumption spending but not the overseas labor output, creating a misleading picture of domestic productive capacity.</p>
<p><span class="ka-highlight">6. Institutional Capacity:</span> CBS operates with limited staff (~800 nationally), outdated technology, and insufficient budget for comprehensive surveys. The <b>Nepal Living Standards Survey</b> and <b>Census of Manufacturing Establishments</b> face multi-year delays.</p>`,

                    bankingRelation: `<p>GDP measurement challenges directly affect banking:</p>
<ul>
<li><b>Credit Risk Assessment:</b> If GDP is overstated, banks may over-lend relative to actual economic capacity, creating systemic risk</li>
<li><b>NRB Monetary Policy:</b> Inaccurate GDP data leads to miscalibrated money supply targets (M2 growth = GDP growth + inflation target)</li>
<li><b>Sectoral Lending Mandates:</b> NRB's productive sector targets (agriculture 15%, energy 10%) are based on GDP sectoral weights — if weights are wrong, mandates are misaligned</li>
<li><b>Stress Testing:</b> Banks' macro stress tests rely on GDP growth projections — unreliable GDP data produces unreliable stress test results</li>
</ul>`,

                    currentProblems: `<p><b class="ka-important">Critical Issues:</b></p>
<ul>
<li><b>Provincial GDP:</b> Federal structure (since 2015 Constitution) requires provincial GDP for fiscal equalization — CBS lacks capacity to produce reliable sub-national estimates</li>
<li><b>Digital Economy:</b> E-commerce, digital payments (eSewa, Khalti), fintech — growing rapidly but inadequately captured</li>
<li><b>Cross-Border Leakage:</b> Significant informal trade with India (estimated NPR 150-200 billion) goes unrecorded</li>
<li><b>COVID-19 Impact:</b> Pandemic disrupted data collection infrastructure; FY 2076/77 GDP data heavily estimated</li>
</ul>
<p><b class="ka-success">Recommendations:</b></p>
<ul>
<li>Adopt <b>NSDS (National Strategy for Development of Statistics)</b> framework fully</li>
<li>Implement <b>CAPI (Computer-Assisted Personal Interviewing)</b> for real-time data collection</li>
<li>Update base year to <b>2010/11</b> with expanded survey coverage</li>
<li>Develop <b>quarterly GDP flash estimates</b> using high-frequency indicators</li>
<li>Strengthen CBS institutional autonomy and budget allocation</li>
</ul>`,

                    nblStrategy: `<p><b>NBL Strategic Actions:</b></p>
<ul>
<li><b>Internal Economic Research Unit:</b> NBL should develop its own GDP tracking indicators using internal data (credit disbursement, deposit growth, trade finance volumes) as cross-checks against CBS data</li>
<li><b>Provincial Risk Mapping:</b> Develop province-level economic risk profiles using proxy indicators where official provincial GDP is unavailable</li>
<li><b>Informal Sector Lending:</b> Design products for informal sector enterprises (bazaar lending, agri-microfinance) that also help capture informal economic data</li>
</ul>`
                }
            }
        ]
    },

    "I.A.1.3": {
        subtopic: "GNP, Investment & Macroeconomic Indicators",
        units: [
            {
                title: "GNP and National Income Concepts",
                knowledgeAreas: {
                    foundation: `<p>While GDP measures <b>domestic production</b>, <span class="ka-highlight">Gross National Product (GNP)</span> measures the total output produced by a country's <b>residents</b> regardless of where production takes place. The distinction is critical for countries like Nepal with large overseas labor forces.</p>
<p>For Nepal, <b>GNP exceeds GDP</b> because of massive remittance inflows — Nepali workers abroad contribute to Nepal's GNP but not its GDP.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>GNP</b></td><td>GDP + Net Factor Income from Abroad (NFIA)</td></tr>
<tr><td><b>NNP</b></td><td>GNP − Depreciation (Capital Consumption Allowance)</td></tr>
<tr><td><b>National Income (NI)</b></td><td>NNP at Factor Cost = NNP(MP) − Indirect Taxes + Subsidies</td></tr>
<tr><td><b>Personal Income (PI)</b></td><td>NI − Corporate Retained Earnings − Social Security + Transfer Payments</td></tr>
<tr><td><b>Disposable Income (DI)</b></td><td>Personal Income − Direct Taxes</td></tr>
<tr><td><b>NFIA</b></td><td>Factor income earned abroad by residents minus factor income earned domestically by non-residents</td></tr>
<tr><td><b>GNI (Gross National Income)</b></td><td>Modern equivalent of GNP used by World Bank for country classification</td></tr>
</table>`,

                    calculations: `<p><b>Key Relationships:</b></p>
<blockquote>
GNP = GDP + NFIA<br>
NNP = GNP − Depreciation<br>
NI = NNP at Factor Cost<br>
PI = NI − Corporate Taxes − Retained Earnings − Social Security + Transfer Payments<br>
DI = PI − Personal Income Tax<br><br>
<b>Nepal Example:</b><br>
If GDP = NPR 5,400B, Remittances Received = NPR 1,200B, Factor Payments to Foreign Entities = NPR 80B<br>
Then NFIA = 1,200 − 80 = NPR 1,120B<br>
GNP = 5,400 + 1,120 = <span class="ka-important">NPR 6,520 Billion</span>
</blockquote>`,

                    coreContent: `<p><span class="ka-highlight">Key Macroeconomic Indicators Beyond GDP:</span></p>
<table>
<tr><th>Indicator</th><th>Purpose</th><th>Nepal Status</th></tr>
<tr><td><b>HDI (Human Development Index)</b></td><td>Composite of life expectancy, education, per capita income</td><td>0.601 (Medium, Rank ~143)</td></tr>
<tr><td><b>Gini Coefficient</b></td><td>Income inequality (0 = perfect equality, 1 = perfect inequality)</td><td>~0.33</td></tr>
<tr><td><b>CPI (Consumer Price Index)</b></td><td>Measures inflation by tracking price changes in consumer basket</td><td>~7-8% annual inflation</td></tr>
<tr><td><b>Trade Balance</b></td><td>Exports − Imports</td><td>Persistent deficit (~NPR -1,600B)</td></tr>
<tr><td><b>BOP (Balance of Payments)</b></td><td>All international transactions (current + capital + financial account)</td><td>Surplus due to remittances</td></tr>
<tr><td><b>Fiscal Deficit</b></td><td>(Government Revenue − Government Expenditure) / GDP</td><td>~5-6% of GDP</td></tr>
<tr><td><b>Savings Rate</b></td><td>Gross Domestic Savings / GDP</td><td>~12% (very low)</td></tr>
<tr><td><b>ICOR</b></td><td>Incremental Capital-Output Ratio — investment needed for 1 unit GDP growth</td><td>~5.5 (high = inefficient)</td></tr>
</table>`,

                    prosAndCons: `<p><b class="ka-success">GNP Advantages over GDP for Nepal:</b></p>
<ul>
<li>Better reflects total national income including remittances (~23% of GDP)</li>
<li>Captures the contribution of 4-5 million Nepali workers abroad</li>
<li>More accurate measure of national purchasing power and welfare</li>
</ul>
<p><b class="ka-important">GNP Limitations:</b></p>
<ul>
<li>Does not capture quality of life, environmental sustainability, or inequality</li>
<li>Remittances can make GNP look healthy while domestic production stagnates</li>
<li>Difficult to accurately measure factor income flows — data reporting gaps</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>GNI-based Country Classification:</b> World Bank uses GNI per capita — Nepal classified as <span class="ka-term">Low-Income Country</span> (threshold: USD 1,135). Crossing this threshold affects IDA lending terms and concessional finance availability to Nepali banks</li>
<li><b>Savings-Investment Gap:</b> Low domestic savings rate (~12%) vs high investment need (~33% of GDP) creates a gap filled by remittances and foreign aid — banks intermediate this flow</li>
<li><b>ICOR for Project Financing:</b> High ICOR (~5.5) means banks need more capital deployment per unit of GDP growth — affects project appraisal return calculations</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Remittance Product Strategy:</b> Given GNP > GDP dynamics, NBL should develop premium remittance-linked savings/investment products targeting diaspora Nepalis</li>
<li><b>ICOR-Aware Lending:</b> Focus lending on sectors with lower ICOR (higher productivity per unit of investment) — technology, services over traditional construction</li>
<li><b>HDI-Linked CSR:</b> Align NBL's CSR activities with HDI improvement targets (education, health) in districts where NBL operates</li>
</ul>`
                }
            }
        ]
    },

    "I.A.2.1": {
        subtopic: "Harrod-Domar Formulation",
        units: [
            {
                title: "Harrod-Domar Growth Model",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Harrod-Domar Growth Model</span> was independently developed by <b>Sir Roy Harrod (1939)</b> of UK and <b>Evsey Domar (1946)</b> of USA. It is a <b>Keynesian growth model</b> that explains economic growth as a function of <i>savings</i> and <i>capital productivity</i>.</p>
<p>The model establishes that <span class="ka-important">a country's growth rate depends on its savings rate and capital-output ratio</span>. For developing countries like Nepal, it highlights the fundamental constraint: insufficient domestic savings to fund the investment needed for target growth rates.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Warranted Growth Rate (Gw)</b></td><td>The growth rate at which planned savings equals planned investment — equilibrium growth</td></tr>
<tr><td><b>Natural Growth Rate (Gn)</b></td><td>Maximum growth rate allowed by population growth + technological progress</td></tr>
<tr><td><b>Actual Growth Rate (G)</b></td><td>The realized growth rate of the economy in a given period</td></tr>
<tr><td><b>Capital-Output Ratio (v or ICOR)</b></td><td>Amount of capital needed to produce one unit of output — K/Y</td></tr>
<tr><td><b>Savings Rate (s)</b></td><td>Proportion of national income saved — S/Y</td></tr>
<tr><td><b>Savings-Investment Gap</b></td><td>Difference between required investment for target growth and available domestic savings</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">Harrod-Domar Model Logic</div>
<div class="fc-box">Higher Savings (s)</div> <span class="fc-arrow">→</span>
<div class="fc-box">More Investment (I = S)</div> <span class="fc-arrow">→</span>
<div class="fc-box">Capital Accumulation</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">Higher Output (Y)</div> <span class="fc-arrow">→</span>
<div class="fc-box">Economic Growth (g = s/v)</div><br>
<div style="margin-top:8px;font-size:0.76rem;color:var(--text-secondary);">Growth = Savings Rate ÷ Capital-Output Ratio</div>
</div>`,

                    history: `<p><b>Roy Harrod</b> published "An Essay in Dynamic Theory" (1939) extending Keynes' static analysis to long-run growth dynamics. <b>Evsey Domar</b> independently published "Capital Expansion, Rate of Growth, and Employment" (1946) arriving at the same fundamental conclusion.</p>
<p>The model became the <span class="ka-highlight">dominant planning framework</span> for developing nations in the 1950s-1970s, heavily used by the <b>World Bank, IMF, and UN agencies</b> to calculate aid requirements. India's Five-Year Plans and Nepal's early development plans were built on Harrod-Domar logic.</p>
<p>Nepal's <b>Periodic Plans</b> (पञ्चवर्षीय योजना) from the 1st Plan (2013-2018 BS) through the 10th Plan used Harrod-Domar calculations to determine the "financing gap" that foreign aid needed to fill.</p>`,

                    coreContent: `<p><b>The Core Equation:</b></p>
<blockquote><b>g = s / v</b><br>Where: g = GDP growth rate, s = savings rate (S/Y), v = ICOR (capital-output ratio K/Y)</blockquote>
<p><b>Key Assumptions:</b></p>
<ol>
<li>Output is a function of capital alone (single-factor model)</li>
<li>Capital-Output Ratio (v) is constant</li>
<li>Savings equals Investment (S = I) in equilibrium</li>
<li>No government intervention or foreign trade initially</li>
<li>No technological change incorporated</li>
<li>Fixed proportions of labor and capital (no substitution)</li>
</ol>
<p><b>Harrod's Instability Problem ("Knife-Edge"):</b></p>
<p>If actual growth (G) ≠ warranted growth (Gw), the economy <span class="ka-important">diverges further from equilibrium</span> rather than self-correcting:</p>
<ul>
<li><b>If G > Gw:</b> Actual investment exceeds planned → shortages → more investment → boom → inflation</li>
<li><b>If G < Gw:</b> Excess capacity → less investment → recession → unemployment spiral</li>
</ul>
<p>This "knife-edge" instability was a major criticism and motivated the <b>Solow-Swan neoclassical model</b> which allowed factor substitution.</p>`,

                    calculations: `<p><b>PSC Exam Application — Nepal Example:</b></p>
<blockquote>
<b>Q:</b> Nepal's savings rate is 12% of GDP and its ICOR is 5.5. Calculate the achievable growth rate. If the target growth rate is 8%, what is the savings-investment gap?<br><br>
<b>A:</b> g = s / v = 0.12 / 5.5 = <span class="ka-important">2.18%</span><br><br>
For 8% growth: Required savings rate = g × v = 0.08 × 5.5 = <b>44% of GDP</b><br>
Gap = 44% − 12% = <span class="ka-important">32% of GDP</span> (to be filled by foreign aid, remittances, FDI, or borrowing)
</blockquote>
<p><b>This gap analysis</b> is why Nepal historically depended on foreign aid and now depends on remittances to sustain growth beyond what domestic savings can support.</p>`,

                    prosAndCons: `<p><b class="ka-success">✅ Strengths:</b></p>
<ul>
<li>Simple, intuitive framework — easy to apply for policy planning</li>
<li>Highlights the critical role of savings and investment in growth</li>
<li>Useful for calculating "financing gaps" — how much external funding needed</li>
<li>Foundation for understanding capital accumulation dynamics</li>
</ul>
<p><b class="ka-important">❌ Weaknesses:</b></p>
<ul>
<li><b>Ignores technological progress</b> — major driver of modern growth</li>
<li><b>Assumes fixed ICOR</b> — in reality, efficiency varies across sectors and over time</li>
<li><b>Ignores human capital</b> — education, skills, health not modeled</li>
<li><b>Knife-edge instability</b> — implies economies can never achieve stable growth</li>
<li><b>"Financing Gap" fallacy:</b> Easterly (2001) showed that countries receiving aid to fill the gap often did NOT achieve predicted growth</li>
<li><b>Single-factor model:</b> Only capital matters — ignores labor, technology, institutions</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Savings Mobilization:</b> Model underscores why NRB and banks must focus on <span class="ka-term">increasing domestic savings rate</span> — currently ~12%, far below the 30-40% seen in East Asian economies</li>
<li><b>ICOR in Project Appraisal:</b> Banks use ICOR logic when assessing whether loan-funded projects will generate sufficient output returns</li>
<li><b>Credit-Growth Nexus:</b> Bank credit (as investment proxy) divided by ICOR gives estimated GDP growth contribution — key metric for macro-prudential analysis</li>
<li><b>Foreign Aid Intermediation:</b> As savings gap is filled by external sources, commercial banks intermediate aid flows through government securities and development project financing</li>
</ul>`,

                    realWorld: `<blockquote>
<b>🌍 Nepal's Savings-Investment Gap Reality:</b><br>
Nepal's 16th Periodic Plan (2081/82 - 2085/86) targets <b>10% GDP growth</b>. With ICOR of ~5.5, this requires investment of 55% of GDP. But domestic savings are only ~12%. The remaining <span class="ka-important">43% gap</span> must come from remittances (~23%), foreign aid (~3%), FDI (~1%), and government borrowing (~6%). This persistent structural gap — predicted precisely by Harrod-Domar — explains why Nepal remains heavily dependent on remittance inflows and faces a "growth trap" when remittances slow down.
</blockquote>`,

                    nblStrategy: `<ul>
<li><b>Savings Drive:</b> NBL should aggressively promote institutional and retail savings products — fixed deposits, recurring deposits, pension-linked savings — to contribute to raising national savings rate</li>
<li><b>Productive Lending Focus:</b> Reduce ICOR through quality lending — prioritize productive sectors (manufacturing, export-oriented industries) over consumption loans that don't generate output</li>
<li><b>Diaspora Investment Products:</b> Develop Nepali diaspora bonds and non-resident savings schemes to channel remittances into productive investment rather than consumption</li>
</ul>`
                }
            }
        ]
    },

    "I.A.2.2": {
        subtopic: "Solow-Swan Steady-State Model",
        units: [
            {
                title: "Solow-Swan Neoclassical Growth Model",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Solow-Swan Model</span> (1956) was developed independently by <b>Robert Solow</b> (MIT, USA) and <b>Trevor Swan</b> (Australia) to address the instability problem of the Harrod-Domar model.</p>
<p>Unlike Harrod-Domar, this model allows <b>factor substitution</b> between labor and capital, introduces <b>diminishing returns to capital</b>, and demonstrates that economies naturally converge to a <span class="ka-important">steady-state equilibrium</span>. Solow received the <b>Nobel Prize in Economics (1987)</b> for this contribution.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Steady State</b></td><td>Long-run equilibrium where per capita capital, output, and consumption grow at zero rate (without technology)</td></tr>
<tr><td><b>Golden Rule</b></td><td>Savings rate that maximizes steady-state consumption per capita</td></tr>
<tr><td><b>Capital Deepening</b></td><td>Increase in capital per worker (k = K/L) — drives growth toward steady state</td></tr>
<tr><td><b>Capital Widening</b></td><td>Increase in capital just enough to equip new workers — maintains k constant</td></tr>
<tr><td><b>Solow Residual (TFP)</b></td><td>Portion of output growth not explained by capital and labor inputs — attributed to technology</td></tr>
<tr><td><b>Convergence Hypothesis</b></td><td>Poorer economies grow faster than richer ones, eventually catching up (conditional convergence)</td></tr>
<tr><td><b>Depreciation Rate (δ)</b></td><td>Rate at which existing capital stock wears out each period</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">Solow Model Dynamics</div>
<div class="fc-box">Savings → Investment</div> <span class="fc-arrow">→</span>
<div class="fc-box">Capital Accumulation</div><br>
<span class="fc-arrow">↓</span><br>
<div class="fc-box">If sf(k) > (n+δ)k</div> <span class="fc-arrow">→</span>
<div class="fc-box">Capital Deepening</div> <span class="fc-arrow">→</span>
<div class="fc-box">Per Capita Output ↑</div><br>
<div class="fc-box">If sf(k) = (n+δ)k</div> <span class="fc-arrow">→</span>
<div class="fc-box">STEADY STATE</div><br>
<div style="margin-top:8px;font-size:0.76rem;color:var(--text-secondary);">At steady state: Investment = Depreciation + Population Growth requirement</div>
</div>`,

                    coreContent: `<p><b>The Core Production Function:</b></p>
<blockquote><b>Y = A × F(K, L) = A × K<sup>α</sup> × L<sup>1-α</sup></b><br>
Where: Y = Output, A = Technology (TFP), K = Capital, L = Labor, α = capital share (~0.3)</blockquote>
<p><b>Per Capita Form (dividing by L):</b></p>
<blockquote><b>y = A × k<sup>α</sup></b><br>Where: y = Y/L (output per worker), k = K/L (capital per worker)</blockquote>
<p><b>Key Equation — Capital Accumulation:</b></p>
<blockquote><b>Δk = s×f(k) − (n + δ)×k</b><br>
Where: s = savings rate, n = population growth, δ = depreciation rate<br>
<b>Steady State:</b> Δk = 0 → s×f(k*) = (n + δ)×k*</blockquote>

<p><b>Key Predictions:</b></p>
<ol>
<li><span class="ka-highlight">Diminishing Returns:</span> Each additional unit of capital produces less additional output — unlike Harrod-Domar's constant ICOR</li>
<li><span class="ka-highlight">Steady State Convergence:</span> All economies with same parameters (s, n, δ) converge to same steady state — inherent stability</li>
<li><span class="ka-highlight">Growth in Steady State:</span> Only <b>technological progress (A)</b> can drive sustained per capita growth — capital accumulation alone runs out</li>
<li><span class="ka-highlight">Conditional Convergence:</span> Poorer countries grow faster than richer ones IF they share similar structural parameters</li>
</ol>`,

                    calculations: `<p><b>PSC Exam Application:</b></p>
<blockquote>
<b>Q:</b> In the Solow model, if savings rate (s) = 0.30, depreciation (δ) = 0.05, population growth (n) = 0.02, and production function is y = k<sup>0.5</sup>, find steady-state capital per worker (k*).<br><br>
<b>A:</b> At steady state: s×f(k*) = (n + δ)×k*<br>
0.30 × (k*)<sup>0.5</sup> = (0.02 + 0.05) × k*<br>
0.30 × (k*)<sup>0.5</sup> = 0.07 × k*<br>
0.30 / 0.07 = k* / (k*)<sup>0.5</sup> = (k*)<sup>0.5</sup><br>
(k*)<sup>0.5</sup> = 4.286<br>
<span class="ka-important">k* = 18.37 units of capital per worker</span><br>
y* = (18.37)<sup>0.5</sup> = <span class="ka-important">4.29 units of output per worker</span>
</blockquote>`,

                    prosAndCons: `<p><b class="ka-success">✅ Improvements over Harrod-Domar:</b></p>
<ul>
<li>Eliminates knife-edge instability — economy naturally converges to steady state</li>
<li>Allows factor substitution (labor can partially replace capital)</li>
<li>Incorporates diminishing returns — more realistic than constant ICOR</li>
<li>Explains technology as the ultimate growth driver</li>
<li>Predicts convergence — consistent with post-WWII recovery of Japan/Germany</li>
</ul>
<p><b class="ka-important">❌ Limitations:</b></p>
<ul>
<li><b>Technology is exogenous:</b> Treats A as "manna from heaven" — doesn't explain WHY technology improves</li>
<li><b>Savings rate exogenous:</b> Model doesn't explain what determines savings behavior</li>
<li><b>Convergence not universal:</b> Sub-Saharan Africa hasn't converged — model can't explain "poverty traps"</li>
<li><b>No role for institutions:</b> Governance, property rights, rule of law not modeled</li>
<li><b>Solow Residual too large:</b> In practice, 50-70% of growth attributed to unexplained "technology"</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Diminishing Returns to Credit:</b> Solow's insight applies to banking — <span class="ka-term">excessive credit growth</span> faces diminishing returns, each additional unit of credit generates less GDP growth. This validates NRB's concern when credit-to-GDP gap exceeds thresholds</li>
<li><b>Technology Investment:</b> Model implies banks should prioritize lending for <b>technology adoption</b> (fintech, automation) over pure capital expansion for sustainable growth impact</li>
<li><b>Convergence & Regional Banking:</b> Less developed regions (Karnali, Sudurpashchim) should grow faster — banks should increase branch presence and lending in these provinces</li>
<li><b>Golden Rule for Bank Capital:</b> Analogous to the Golden Rule, banks must find optimal capital adequacy — too little creates risk, too much constrains lending capacity</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Digital Transformation Investment:</b> Solow model shows technology (A) is the key to sustained growth — NBL should invest heavily in core banking system upgrades, mobile banking, and AI-based credit scoring</li>
<li><b>Human Capital Lending:</b> Since labor quality matters alongside quantity, NBL should develop education loan products and employee training programs</li>
<li><b>Provincial Convergence Strategy:</b> Allocate disproportionately more lending to less-developed provinces (Karnali, Lumbini hinterlands) where marginal returns should be highest per Solow convergence theory</li>
</ul>`
                }
            }
        ]
    },

    "I.A.2.3": {
        subtopic: "New Classical Model & Implication Matrix",
        units: [
            {
                title: "New Classical & Endogenous Growth Theory",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">New Classical Growth Theory</span> (also called <b>Endogenous Growth Theory</b>) emerged in the 1980s-1990s through the work of <b>Paul Romer (1986)</b> and <b>Robert Lucas (1988)</b> to address the Solow model's weakness of treating technology as exogenous.</p>
<p>The central insight: <span class="ka-important">technological progress and human capital accumulation are not accidents — they result from deliberate economic decisions</span> by firms, individuals, and governments. Knowledge, R&D, education, and innovation are the true engines of sustained growth.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Endogenous Growth</b></td><td>Growth driven by factors within the model — R&D, human capital, knowledge spillovers</td></tr>
<tr><td><b>AK Model</b></td><td>Simplest endogenous model: Y = AK, where K includes physical + human capital — no diminishing returns</td></tr>
<tr><td><b>Knowledge Spillovers</b></td><td>When one firm's R&D benefits other firms — positive externality that prevents diminishing returns</td></tr>
<tr><td><b>Human Capital</b></td><td>Skills, education, health embodied in workers — increases labor productivity beyond raw labor hours</td></tr>
<tr><td><b>Learning by Doing</b></td><td>Arrow (1962) — productivity improves through accumulated production experience</td></tr>
<tr><td><b>Creative Destruction</b></td><td>Schumpeter — innovation destroys old industries while creating new ones, driving growth</td></tr>
<tr><td><b>Increasing Returns to Scale</b></td><td>Doubling all inputs more than doubles output — knowledge-driven economies exhibit this</td></tr>
</table>`,

                    coreContent: `<p><b>Key Models:</b></p>
<p><span class="ka-highlight">1. Romer Model (1986, 1990):</span> Knowledge and R&D investment create <b>positive externalities</b> — spillovers prevent diminishing returns to capital. Firms investing in R&D generate knowledge that benefits the entire economy.</p>
<blockquote><b>Y = A(R&D) × K<sup>α</sup> × L<sup>1-α</sup></b><br>
Where A grows endogenously as a function of R&D spending and knowledge stock</blockquote>

<p><span class="ka-highlight">2. Lucas Model (1988):</span> <b>Human capital accumulation</b> is the key driver. Workers' education and skills make them more productive, and these benefits spill over to others (externalities).</p>
<blockquote><b>Y = K<sup>α</sup> × (h×L)<sup>1-α</sup></b><br>Where h = human capital per worker (education, skills, health)</blockquote>

<p><span class="ka-highlight">3. AK Model (Rebelo, 1991):</span> The simplest endogenous model. By broadening "capital" to include human capital, the model eliminates diminishing returns entirely.</p>
<blockquote><b>Y = AK</b> where K = Physical Capital + Human Capital<br>Growth rate: <b>g = s×A − δ</b> (constant, no convergence to steady state)</blockquote>

<p><b>Policy Implications vs Solow:</b></p>
<table>
<tr><th>Aspect</th><th>Solow (Neoclassical)</th><th>New Classical (Endogenous)</th></tr>
<tr><td>Technology</td><td>Exogenous ("free gift")</td><td>Endogenous (R&D, innovation)</td></tr>
<tr><td>Government Role</td><td>Limited — market equilibrium</td><td>Active — invest in education, R&D, infrastructure</td></tr>
<tr><td>Returns to Capital</td><td>Diminishing</td><td>Constant or increasing (with human capital)</td></tr>
<tr><td>Convergence</td><td>Poor catch up to rich</td><td>No automatic convergence — divergence possible</td></tr>
<tr><td>Policy Impact</td><td>Temporary (level effects)</td><td>Permanent (growth rate effects)</td></tr>
</table>`,

                    history: `<p><b>Paul Romer's</b> 1986 paper "Increasing Returns and Long-Run Growth" launched the endogenous growth revolution. His 1990 model with deliberate R&D investment became the standard framework. Romer received the <b>Nobel Prize in Economics (2018)</b>.</p>
<p><b>Robert Lucas's</b> 1988 "On the Mechanics of Economic Development" emphasized human capital. He had received the <b>Nobel Prize in 1995</b> for rational expectations theory.</p>
<p>The theory gained policy traction as the <b>East Asian Tigers</b> (South Korea, Taiwan, Singapore, Hong Kong) demonstrated that massive government investment in education, R&D, and infrastructure could generate sustained high growth — exactly as endogenous theory predicted.</p>`,

                    bankingRelation: `<ul>
<li><b>Education Lending:</b> Model validates bank investment in education loans — human capital investment has <span class="ka-term">increasing returns</span>, making education loans economically sound even at subsidized rates</li>
<li><b>Innovation/Startup Financing:</b> Knowledge spillovers justify bank lending to technology startups and R&D — social returns exceed private returns</li>
<li><b>No Convergence Trap:</b> Unlike Solow, endogenous growth implies Nepal <span class="ka-important">will NOT automatically catch up</span> — deliberate policy (and bank lending) toward innovation/education is essential</li>
<li><b>Financial Deepening:</b> Deeper financial markets (more banking products, wider access) themselves contribute to endogenous growth by improving capital allocation efficiency</li>
</ul>`,

                    prosAndCons: `<p><b class="ka-success">✅ Strengths:</b></p>
<ul>
<li>Explains <i>why</i> technology improves — not just "it happens"</li>
<li>Gives clear policy prescriptions — invest in education, R&D, infrastructure</li>
<li>Explains persistent income gaps between countries</li>
<li>Consistent with East Asian miracle growth patterns</li>
</ul>
<p><b class="ka-important">❌ Weaknesses:</b></p>
<ul>
<li>Difficult to measure human capital, knowledge spillovers precisely</li>
<li>AK model's prediction of no convergence is too extreme</li>
<li>Over-emphasizes R&D — many poor countries grow through technology adoption, not invention</li>
<li>Institutional quality (governance, rule of law) still not adequately modeled</li>
</ul>`,

                    currentProblems: `<p><b>Nepal's Context:</b></p>
<ul>
<li>R&D spending: <span class="ka-important"><0.3% of GDP</span> — far below the 2-3% recommended for sustained growth</li>
<li>Brain drain: Nepal's educated human capital emigrates — reversing the human capital accumulation the model requires</li>
<li>Low innovation capacity: Nepal ranks 111th globally in the Global Innovation Index</li>
<li>Education quality: High enrollment but low learning outcomes — quantity without quality doesn't build effective human capital</li>
</ul>
<p><b class="ka-success">Policy Recommendations:</b></p>
<ul>
<li>Increase R&D budget allocation to at least 1% of GDP</li>
<li>Create incentives for diaspora knowledge transfer (reverse brain drain programs)</li>
<li>Strengthen STEM education quality in universities</li>
<li>Establish technology transfer partnerships with South Korea, India, China</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Innovation Fund:</b> NBL should create a dedicated Innovation & Technology Lending Fund with preferential rates for startups and R&D-intensive enterprises</li>
<li><b>Education Loan Portfolio:</b> Expand education loan products for STEM fields — the endogenous growth model shows this generates economy-wide returns exceeding private returns</li>
<li><b>Knowledge Economy Strategy:</b> Position NBL as the "bank for knowledge workers" — digital-first products, research grants, innovation competitions</li>
<li><b>Internal R&D:</b> NBL itself should invest in AI, machine learning for credit scoring, fraud detection — becoming a knowledge-intensive bank rather than just a capital-intensive one</li>
</ul>`
                }
            }
        ]
    },

    "I.A.3.1": {
        subtopic: "Perfect Competition Systems",
        units: [
            {
                title: "Perfect Competition: Price & Output Determination",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Perfect Competition</span> is a theoretical market structure where <b>numerous small firms</b> produce <b>identical (homogeneous) products</b>, with <b>free entry and exit</b>, <b>perfect information</b>, and no single firm can influence market price. Each firm is a <span class="ka-term">price taker</span>.</p>
<p>While no real-world market is perfectly competitive, the model serves as a <b>benchmark</b> for evaluating efficiency and welfare outcomes in actual markets. Agricultural commodity markets and foreign exchange markets come closest.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Price Taker</b></td><td>A firm that accepts the market price — its individual output decision cannot affect price</td></tr>
<tr><td><b>Marginal Revenue (MR)</b></td><td>Additional revenue from selling one more unit = Price in perfect competition (MR = P = AR)</td></tr>
<tr><td><b>Marginal Cost (MC)</b></td><td>Additional cost of producing one more unit</td></tr>
<tr><td><b>Normal Profit</b></td><td>Minimum profit needed to keep a firm in the industry (economic profit = 0)</td></tr>
<tr><td><b>Allocative Efficiency</b></td><td>P = MC — resources allocated where consumers value them most</td></tr>
<tr><td><b>Productive Efficiency</b></td><td>Firm operates at minimum ATC — no waste of resources</td></tr>
<tr><td><b>Shutdown Point</b></td><td>Price < AVC — firm better off ceasing production in short run</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">Profit Maximization Rule</div>
<div class="fc-box">Produce where MR = MC</div><br>
<span class="fc-arrow">↓</span><br>
<div class="fc-box">If P > ATC → Supernormal Profit</div><br>
<div class="fc-box">If P = ATC → Normal Profit (Break-even)</div><br>
<div class="fc-box">If AVC < P < ATC → Loss (but continue)</div><br>
<div class="fc-box">If P < AVC → Shutdown</div><br>
<div style="margin-top:8px;font-size:0.76rem;color:var(--text-secondary);">Long-run equilibrium: P = MR = MC = min ATC (zero economic profit)</div>
</div>`,

                    coreContent: `<p><b>Characteristics of Perfect Competition:</b></p>
<ol>
<li><b>Large number of buyers and sellers</b> — no individual influence on price</li>
<li><b>Homogeneous product</b> — no differentiation, branding, or quality differences</li>
<li><b>Free entry and exit</b> — no barriers (legal, financial, or technological)</li>
<li><b>Perfect information</b> — all participants know prices, costs, technology</li>
<li><b>Perfect factor mobility</b> — resources can move freely between industries</li>
</ol>

<p><b>Short-Run Equilibrium:</b></p>
<blockquote>Firm maximizes profit at <b>MR = MC</b> (where MC is rising)<br>
<b>If P > ATC:</b> Supernormal profit → attracts new entrants<br>
<b>If P < ATC but P > AVC:</b> Loss but covers variable costs → continues production<br>
<b>If P < AVC:</b> Shutdown — loss exceeds fixed costs</blockquote>

<p><b>Long-Run Equilibrium:</b></p>
<blockquote>Free entry/exit eliminates supernormal profits and unsustainable losses.<br>
<span class="ka-important">P = MR = MC = min ATC</span><br>
Result: <b>Allocative efficiency (P = MC)</b> and <b>Productive efficiency (min ATC)</b></blockquote>`,

                    calculations: `<p><b>PSC Exam Numerical:</b></p>
<blockquote>
<b>Q:</b> A firm in perfect competition has TC = 100 + 10Q + Q². Market price = NPR 50. Find profit-maximizing output and total profit.<br><br>
<b>A:</b> MC = dTC/dQ = 10 + 2Q<br>
At MR = MC: 50 = 10 + 2Q → Q = <span class="ka-important">20 units</span><br>
TR = P × Q = 50 × 20 = 1,000<br>
TC = 100 + 10(20) + (20)² = 100 + 200 + 400 = 700<br>
Profit = TR − TC = 1,000 − 700 = <span class="ka-important">NPR 300 (Supernormal)</span>
</blockquote>`,

                    bankingRelation: `<ul>
<li><b>Nepal's Banking Sector:</b> With 20+ commercial banks offering near-identical deposit/loan products, Nepal's banking sector <span class="ka-term">approximates competitive conditions</span> — but barriers to entry (NRB licensing) and brand differentiation prevent perfect competition</li>
<li><b>Interest Rate Competition:</b> Base rate/spread system forces banks toward competitive pricing — NRB's base rate publication creates price transparency similar to perfect competition</li>
<li><b>Zero Economic Profit Tendency:</b> As more banks entered Nepal (2005-2015), return on equity for commercial banks declined from ~30% to ~12-15% — consistent with competitive equilibrium convergence</li>
<li><b>Agricultural Lending:</b> Farm commodity markets closest to perfect competition — banks' agri-loan products should reflect competitive pricing models</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Differentiation Strategy:</b> Since perfect competition yields zero economic profit, NBL must differentiate through <b>service quality, digital innovation, and brand trust</b> to earn supernormal returns</li>
<li><b>Cost Leadership:</b> In competitive markets, the lowest-cost producer survives longest — NBL should optimize operational costs through technology and process re-engineering</li>
<li><b>Niche Market Focus:</b> Move toward monopolistic competition by developing specialized products for underserved segments (remittance corridors, SME banking, green finance)</li>
</ul>`
                }
            }
        ]
    },

    "I.A.3.2": {
        subtopic: "Imperfect, Monopolistic & Oligopoly Market Structures",
        units: [
            {
                title: "Imperfect Competition: Monopoly, Monopolistic Competition & Oligopoly",
                knowledgeAreas: {
                    foundation: `<p>Real-world markets deviate from perfect competition. <span class="ka-highlight">Imperfect competition</span> covers market structures where firms have some degree of <b>market power</b> — ability to influence price. The three main forms are <b>Monopoly, Monopolistic Competition,</b> and <b>Oligopoly</b>.</p>`,

                    definitions: `<table>
<tr><th>Structure</th><th>Key Features</th><th>Example</th></tr>
<tr><td><b>Monopoly</b></td><td>Single seller, unique product, high barriers to entry</td><td>Nepal Electricity Authority (before unbundling)</td></tr>
<tr><td><b>Monopolistic Competition</b></td><td>Many sellers, differentiated products, low barriers</td><td>Nepal's restaurant industry, retail banking</td></tr>
<tr><td><b>Oligopoly</b></td><td>Few dominant sellers, interdependent decisions, high barriers</td><td>Nepal's telecom (NTC, Ncell), cement industry</td></tr>
<tr><td><b>Duopoly</b></td><td>Special case of oligopoly with exactly 2 firms</td><td>Nepal Telecom vs Ncell</td></tr>
<tr><td><b>Cartel</b></td><td>Formal agreement among oligopolists to fix prices/output</td><td>OPEC (international), cement kartels</td></tr>
</table>`,

                    coreContent: `<p><span class="ka-highlight">1. Monopoly:</span></p>
<ul>
<li>Firm IS the industry — faces entire market demand curve</li>
<li>Profit maximization: <b>MR = MC</b> (but MR < P because demand curve slopes downward)</li>
<li>Result: <span class="ka-important">P > MC (allocative inefficiency)</span>, output restriction, higher prices</li>
<li><b>Deadweight loss</b> — societal welfare lost due to underproduction</li>
<li>Natural monopoly: Industries where one firm can serve entire market at lower cost (utilities, railways)</li>
</ul>

<p><span class="ka-highlight">2. Monopolistic Competition (Chamberlin, 1933):</span></p>
<ul>
<li>Many firms, <b>differentiated products</b> (branding, quality, location)</li>
<li>Short-run: Can earn supernormal profits through differentiation</li>
<li>Long-run: Free entry erodes profits → <b>P = ATC</b> (but P > MC, so some inefficiency remains)</li>
<li>Excess capacity exists in long run — firms operate below minimum ATC</li>
</ul>

<p><span class="ka-highlight">3. Oligopoly:</span></p>
<ul>
<li>Few firms, <b>strategic interdependence</b> — each firm considers rivals' reactions</li>
<li><b>Kinked Demand Curve (Sweezy):</b> Rivals match price cuts but not increases → price rigidity</li>
<li><b>Game Theory (Nash Equilibrium):</b> Each firm's strategy is optimal given others' strategies</li>
<li><b>Prisoner's Dilemma:</b> Firms would benefit from collusion but have incentives to cheat</li>
<li><b>Cournot Model:</b> Firms compete on quantity simultaneously</li>
<li><b>Bertrand Model:</b> Firms compete on price — can lead to competitive outcome even with few firms</li>
</ul>`,

                    prosAndCons: `<table>
<tr><th>Structure</th><th>Pros</th><th>Cons</th></tr>
<tr><td><b>Perfect Competition</b></td><td>Maximum efficiency (P=MC), consumer surplus</td><td>No product variety, no R&D incentive</td></tr>
<tr><td><b>Monopoly</b></td><td>Economies of scale, R&D investment, natural monopoly efficiency</td><td>Higher prices, lower output, deadweight loss</td></tr>
<tr><td><b>Monopolistic Competition</b></td><td>Product variety, innovation incentive</td><td>Excess capacity, higher prices than perfect competition</td></tr>
<tr><td><b>Oligopoly</b></td><td>Scale economies, R&D capacity, stable prices</td><td>Collusion risk, barrier to new entrants, potential exploitation</td></tr>
</table>`,

                    bankingRelation: `<p><span class="ka-highlight">Nepal's Banking Market Structure = Oligopolistic Competition:</span></p>
<ul>
<li><b>20+ commercial banks</b> but top 5 banks hold ~40% of total deposits and loans — oligopolistic characteristics</li>
<li><b>Product differentiation</b> exists (mobile banking quality, branch networks, brand trust) — monopolistic competition elements</li>
<li><b>NRB as regulator</b> prevents monopolistic exploitation through base rate regulation, interest rate corridors, and capital adequacy requirements</li>
<li><b>Merger wave (2015-2023):</b> NRB's forced merger policy is consolidating the sector toward fewer, larger banks — moving toward oligopoly</li>
<li><b>Interest rate collusion risk:</b> When few banks dominate, informal interest rate coordination becomes possible — NRB must monitor through competition policy</li>
</ul>`,

                    legalFramework: `<ul>
<li><b>Competition Promotion and Market Protection Act, 2063:</b> Nepal's primary anti-monopoly law — prohibits cartels, abuse of dominant position</li>
<li><b>NRB Directive on Interest Rate:</b> Base rate/spread system prevents monopolistic interest rate setting</li>
<li><b>BAFIA 2073, Section 68-69:</b> Merger/acquisition provisions — NRB approval required, prevents excessive market concentration</li>
<li><b>Consumer Protection Act, 2075:</b> Protects consumers from monopolistic pricing and misleading practices</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Post-Merger Positioning:</b> As Nepal's banking sector consolidates into an oligopoly, NBL (as a large state-owned bank) should leverage its size advantage for economies of scale while avoiding complacency</li>
<li><b>Product Differentiation:</b> Invest in digital banking, customer experience, and niche products to create monopolistic competition advantages within the oligopolistic structure</li>
<li><b>Competition Compliance:</b> Establish an internal competition law compliance unit to ensure NBL doesn't inadvertently engage in anti-competitive practices (coordinated pricing, market allocation)</li>
</ul>`
                }
            }
        ]
    },

    "I.A.4.1": {
        subtopic: "Theories of International Trade and Investment",
        units: [
            {
                title: "Classical & Modern Trade Theories",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">International Trade Theory</span> explains why countries trade, what they trade, and the gains from trade. From <b>Adam Smith's Absolute Advantage (1776)</b> to modern <b>New Trade Theory</b>, these frameworks underpin global economic policy and Nepal's own trade strategy.</p>`,

                    definitions: `<table>
<tr><th>Theory</th><th>Key Concept</th><th>Proponent</th></tr>
<tr><td><b>Absolute Advantage</b></td><td>Country exports goods it produces at lower absolute cost</td><td>Adam Smith (1776)</td></tr>
<tr><td><b>Comparative Advantage</b></td><td>Country exports goods with lower opportunity cost, even if less efficient in all goods</td><td>David Ricardo (1817)</td></tr>
<tr><td><b>Heckscher-Ohlin (H-O)</b></td><td>Country exports goods intensive in its abundant factor (labor/capital)</td><td>Heckscher (1919), Ohlin (1933)</td></tr>
<tr><td><b>Stolper-Samuelson</b></td><td>Trade benefits the abundant factor owners and hurts scarce factor owners</td><td>Stolper-Samuelson (1941)</td></tr>
<tr><td><b>Leontief Paradox</b></td><td>US (capital-abundant) exported labor-intensive goods — contradicts H-O</td><td>Leontief (1953)</td></tr>
<tr><td><b>New Trade Theory</b></td><td>Economies of scale + product differentiation explain intra-industry trade</td><td>Paul Krugman (1979)</td></tr>
<tr><td><b>Product Life Cycle</b></td><td>Exports shift from innovator country to imitators as product matures</td><td>Raymond Vernon (1966)</td></tr>
</table>`,

                    coreContent: `<p><b>Nepal's Trade Position through Theory Lens:</b></p>
<p><span class="ka-highlight">H-O Applied to Nepal:</span> Nepal is <b>labor-abundant, capital-scarce</b>. Per H-O theory, Nepal should export labor-intensive goods (garments, handicrafts, tea, carpets) and import capital-intensive goods (machinery, vehicles, petroleum).</p>
<blockquote><b>Reality Check:</b> Nepal's actual trade pattern <span class="ka-important">partially aligns</span> — top exports are labor-intensive (palm oil, carpets, pashmina, herbs) but the massive trade deficit (imports 10x exports) suggests structural barriers beyond factor endowments: landlocked geography, poor infrastructure, limited industrial base.</blockquote>

<p><b>Foreign Direct Investment (FDI) Theories:</b></p>
<ul>
<li><b>Dunning's Eclectic Paradigm (OLI):</b> FDI occurs when firms have Ownership advantages, Location advantages exist in host country, and Internalization is preferred over licensing</li>
<li><b>Portfolio Investment vs FDI:</b> Portfolio = passive financial investment; FDI = active management control (≥10% ownership stake per IMF definition)</li>
<li><b>Nepal's FDI Position:</b> FDI inflows remain very low (~USD 200-300 million/year) — investor concerns include political instability, bureaucratic hurdles, small market size, and landlocked geography</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Trade Finance:</b> Banks facilitate imports/exports through Letters of Credit (LC), Documentary Collection, and Bank Guarantees — trade theory explains the underlying trade patterns banks finance</li>
<li><b>Foreign Exchange:</b> Nepal's persistent trade deficit creates constant demand for foreign currency — banks must manage forex exposure and NRB's exchange rate pegging to INR</li>
<li><b>Correspondent Banking:</b> International trade requires correspondent banking relationships — NBL's network determines its trade finance capacity</li>
<li><b>FDI Facilitation:</b> Banks channel FDI inflows through FITTA (Foreign Investment and Technology Transfer Act) framework — processing investment applications and repatriation</li>
</ul>`,

                    quantData: `<table>
<tr><th>Nepal Trade Indicator</th><th>Value (FY 2080/81)</th></tr>
<tr><td>Total Exports</td><td>~NPR 180-200 Billion</td></tr>
<tr><td>Total Imports</td><td>~NPR 1,600-1,800 Billion</td></tr>
<tr><td>Trade Deficit</td><td>~NPR 1,400-1,600 Billion</td></tr>
<tr><td>Trade with India (share)</td><td>~65% of total trade</td></tr>
<tr><td>Remittance Inflows</td><td>~NPR 1,200 Billion</td></tr>
<tr><td>FDI Inflows</td><td>~USD 200-300 Million</td></tr>
<tr><td>Current Account</td><td>Surplus (remittance offset)</td></tr>
</table>`,

                    nblStrategy: `<ul>
<li><b>Trade Finance Expansion:</b> NBL should strengthen trade finance capabilities (LC issuance, export credit) to capture growing cross-border trade volumes</li>
<li><b>India Corridor Focus:</b> Given 65% trade concentration with India, NBL should develop specialized India trade products — INR settlement, border branch trade desks</li>
<li><b>FDI Advisory:</b> Position NBL as a preferred banking partner for foreign investors — dedicated FDI facilitation desk, FITTA compliance advisory</li>
</ul>`
                }
            }
        ]
    },

    "I.A.4.2": {
        subtopic: "Foreign Trade & Investment Policies of Nepal",
        units: [
            {
                title: "Nepal's Trade & Investment Policy Framework",
                knowledgeAreas: {
                    foundation: `<p>Nepal's trade and investment policies have evolved from <b>protectionist import-substitution</b> (pre-1990) to <b>liberalization and WTO membership</b> (2004). Key policy frameworks include the <span class="ka-highlight">Trade Policy 2015, Industrial Policy 2010, Foreign Investment and Technology Transfer Act (FITTA) 2075,</span> and Nepal's commitments under <b>WTO, SAFTA, BIMSTEC,</b> and bilateral agreements.</p>`,

                    coreContent: `<p><b>Trade Policy Evolution:</b></p>
<ol>
<li><b>Pre-1990 (Protectionist Era):</b> Import licensing, high tariffs, public sector dominance, limited foreign investment</li>
<li><b>1990-2004 (Liberalization):</b> Tariff reduction, privatization, bilateral trade agreements with India</li>
<li><b>2004-Present (WTO Era):</b> Nepal joined WTO as 147th member (April 23, 2004) — committed to tariff binding, services liberalization, TRIPS compliance</li>
</ol>

<p><b>Key Policy Instruments:</b></p>
<ul>
<li><b>Trade Policy 2015 (2072 BS):</b> Export diversification, trade facilitation, integration into global value chains</li>
<li><b>FITTA 2075:</b> Replaced the 1992 act — allows 100% foreign ownership in most sectors, one-stop-service center, investment board facilitation</li>
<li><b>Nepal Trade Integration Strategy (NTIS):</b> Identifies 19 priority export products and 5 services sectors for development</li>
<li><b>Special Economic Zones (SEZ):</b> Bhairahawa SEZ operational — tax incentives, infrastructure for export-oriented industries</li>
</ul>

<p><b>Trade Agreements:</b></p>
<table>
<tr><th>Agreement</th><th>Type</th><th>Key Provisions</th></tr>
<tr><td><b>Nepal-India Trade Treaty</b></td><td>Bilateral</td><td>Duty-free access for primary products; rules of origin for manufactured goods</td></tr>
<tr><td><b>SAFTA</b></td><td>Regional</td><td>Tariff liberalization among SAARC members; Nepal gets LDC preference</td></tr>
<tr><td><b>BIMSTEC</b></td><td>Regional</td><td>Bay of Bengal cooperation — trade, investment, technology transfer</td></tr>
<tr><td><b>WTO</b></td><td>Multilateral</td><td>MFN treatment, tariff bindings, services commitments (GATS), TRIPS</td></tr>
<tr><td><b>GSP/DFQF</b></td><td>Preferential</td><td>Duty-Free Quota-Free access to EU, USA, Japan, Canada for LDC exports</td></tr>
</table>`,

                    legalFramework: `<ul>
<li><b>Foreign Investment and Technology Transfer Act (FITTA), 2075:</b> Primary law governing FDI — minimum investment thresholds, repatriation rights, dispute resolution</li>
<li><b>Industrial Enterprises Act, 2076:</b> Industry classification, incentives, registration procedures</li>
<li><b>Export-Import (Control) Act, 2013:</b> Regulatory framework for trade control</li>
<li><b>Customs Act, 2064:</b> Tariff administration, valuation, dispute resolution</li>
<li><b>Special Economic Zone Act, 2073:</b> SEZ establishment, incentives, governance</li>
<li><b>Competition Promotion and Market Protection Act, 2063:</b> Anti-dumping, fair trade provisions</li>
</ul>`,

                    currentProblems: `<p><b class="ka-important">Key Challenges:</b></p>
<ul>
<li><b>Persistent Trade Deficit:</b> Imports 8-10x exports — structural deficit driven by petroleum, vehicles, machinery imports</li>
<li><b>Export Concentration:</b> Few products (palm oil, carpet, pashmina, herbs) — lack of diversification</li>
<li><b>India Dependency:</b> ~65% trade with India creates vulnerability to Indian policy changes</li>
<li><b>Landlocked Disadvantage:</b> Transit costs through India add 20-30% to trade costs</li>
<li><b>Low FDI:</b> Despite FITTA reforms, FDI remains minimal — bureaucratic delays, political uncertainty</li>
</ul>
<p><b class="ka-success">Recommendations:</b></p>
<ul>
<li>Develop <b>transit diversification</b> through China (Kerung-Kathmandu railway feasibility)</li>
<li>Focus on <b>services exports</b> (IT, tourism, labor) where landlocked disadvantage is less binding</li>
<li>Implement <b>National Single Window</b> for trade facilitation fully</li>
<li>Strengthen <b>quality certification</b> (SPS/TBT compliance) for exports to meet international standards</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Trade Finance Market:</b> Nepal's total trade (imports + exports ~NPR 1,800B) represents massive trade finance opportunity for banks</li>
<li><b>LC Operations:</b> NRB regulates LC margins (currently 50-100% for luxury goods) — banks must manage LC portfolio risk</li>
<li><b>Foreign Exchange Management:</b> Nepal's pegged exchange rate (NPR 160 = INR 100) requires banks to manage dual exposure (INR operations + USD/third currency conversions)</li>
<li><b>FITTA Compliance:</b> Banks processing FDI transactions must verify FITTA compliance, investment board approval, and repatriation eligibility</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Export Credit Guarantee:</b> NBL should develop export credit products with government guarantee backing to support Nepal's export diversification strategy</li>
<li><b>SEZ Banking:</b> Establish dedicated SEZ branch in Bhairahawa and future SEZ locations to capture industrial banking from export-oriented manufacturers</li>
<li><b>Digital Trade Platform:</b> Build online trade finance platform for LC application, tracking, and settlement — reducing processing time from days to hours</li>
<li><b>China Trade Corridor:</b> As Nepal-China trade grows, develop CNY trade finance products and correspondent banking with Chinese banks</li>
</ul>`
                }
            }
        ]
    },

    "I.A.4.3": {
        subtopic: "Balance of Payment (BOP) Dynamics",
        units: [
            {
                title: "Balance of Payments Framework & Nepal's Position",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Balance of Payments (BOP)</span> is a systematic record of all <b>economic transactions</b> between residents of a country and the rest of the world during a specific period. It follows the <b>double-entry bookkeeping</b> principle — every transaction has a debit and credit entry.</p>
<p>For Nepal, BOP analysis is critical because the country has a <span class="ka-important">persistent trade deficit</span> offset by massive remittance inflows, creating a unique BOP structure among developing nations.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Current Account</b></td><td>Trade in goods & services + primary income (investment returns) + secondary income (remittances, grants)</td></tr>
<tr><td><b>Capital Account</b></td><td>Capital transfers + acquisition/disposal of non-produced non-financial assets</td></tr>
<tr><td><b>Financial Account</b></td><td>FDI + Portfolio Investment + Other Investment + Reserve Assets changes</td></tr>
<tr><td><b>Trade Balance</b></td><td>Exports of goods minus Imports of goods (merchandise trade)</td></tr>
<tr><td><b>BOP Surplus</b></td><td>Net inflow of foreign currency — reserves increase</td></tr>
<tr><td><b>BOP Deficit</b></td><td>Net outflow of foreign currency — reserves decrease</td></tr>
<tr><td><b>Foreign Exchange Reserves</b></td><td>Central bank holdings of foreign currencies, gold, SDRs — measure of import cover</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">Nepal's BOP Structure</div>
<div class="fc-box">Trade Deficit (−NPR 1,600B)</div> <span class="fc-arrow">+</span>
<div class="fc-box">Services (Tourism: +, Others: −)</div><br>
<span class="fc-arrow">+</span> <div class="fc-box">Remittances (+NPR 1,200B)</div> <span class="fc-arrow">=</span>
<div class="fc-box">Current Account (~Surplus/Balance)</div><br>
<span class="fc-arrow">+</span> <div class="fc-box">Capital + Financial Account</div> <span class="fc-arrow">=</span>
<div class="fc-box">Overall BOP (Usually Surplus)</div>
</div>`,

                    coreContent: `<p><b>Nepal's BOP Peculiarity:</b></p>
<blockquote>Nepal has one of the world's <span class="ka-important">highest trade deficit-to-GDP ratios (~30%)</span> but often maintains an overall BOP surplus due to <b>remittance inflows</b> (~23% of GDP). This creates a paradox: the country is import-dependent yet foreign reserves remain comfortable (~10 months import cover).</blockquote>

<p><b>BOP Adjustment Mechanisms:</b></p>
<ul>
<li><b>Exchange Rate Adjustment:</b> Depreciation makes exports cheaper, imports costlier — but Nepal's fixed peg to INR limits this mechanism</li>
<li><b>Monetary Policy:</b> NRB can tighten money supply to reduce import demand — interest rate tool</li>
<li><b>Fiscal Policy:</b> Government can impose import duties, taxes on luxury imports</li>
<li><b>Direct Controls:</b> NRB has used LC margin requirements (50-100%) to restrict luxury imports during BOP stress</li>
</ul>`,

                    quantData: `<table>
<tr><th>BOP Component</th><th>Value (FY 2080/81 est.)</th></tr>
<tr><td>Trade Balance (Goods)</td><td>−NPR ~1,500 Billion</td></tr>
<tr><td>Services Balance</td><td>−NPR ~100 Billion</td></tr>
<tr><td>Remittance Inflows</td><td>+NPR ~1,200 Billion</td></tr>
<tr><td>Current Account</td><td>~Surplus NPR 50-100 Billion</td></tr>
<tr><td>Foreign Exchange Reserves</td><td>~NPR 1,800 Billion (~10 months import)</td></tr>
<tr><td>Import Cover (months)</td><td>~10 months</td></tr>
</table>`,

                    bankingRelation: `<ul>
<li><b>Forex Management:</b> Banks are key intermediaries in BOP — processing trade payments, remittance receipts, and managing forex positions per NRB guidelines</li>
<li><b>NRB Open Market Operations:</b> BOP surplus/deficit affects domestic liquidity — NRB uses reverse repo, deposit collection to manage excess liquidity from remittance inflows</li>
<li><b>Import LC Restrictions:</b> During BOP stress, NRB raises LC margins — directly impacts banks' trade finance business</li>
<li><b>Reserve Requirements:</b> Banks must maintain CRR (3%) and SLR (5%) — partly linked to BOP-driven liquidity management</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Remittance Dominance:</b> NBL should develop comprehensive remittance ecosystem — instant transfer, savings-linked products, investment channels for returnees</li>
<li><b>Import Substitution Lending:</b> Finance domestic manufacturing that reduces import dependency — aligned with national BOP improvement strategy</li>
<li><b>Forex Risk Management:</b> Build sophisticated treasury operations to manage forex exposure from trade finance and remittance flows</li>
</ul>`
                }
            }
        ]
    },

    "I.A.4.4": {
        subtopic: "Globalization & Impact on Nepali Economy",
        units: [
            {
                title: "Globalization: Dimensions, Impacts & Nepal's Experience",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Globalization</span> is the process of increasing interconnectedness and interdependence among countries through <b>trade, capital flows, technology transfer, migration,</b> and <b>cultural exchange</b>. For Nepal, globalization manifests primarily through <b>labor migration/remittances, trade liberalization (WTO), FDI,</b> and <b>technology adoption</b>.</p>`,

                    coreContent: `<p><b>Dimensions of Globalization:</b></p>
<table>
<tr><th>Dimension</th><th>Nepal Context</th></tr>
<tr><td><b>Trade Globalization</b></td><td>WTO membership (2004), SAFTA, growing import dependency</td></tr>
<tr><td><b>Financial Globalization</b></td><td>Limited — capital controls, fixed exchange rate, minimal portfolio investment</td></tr>
<tr><td><b>Labor Globalization</b></td><td>Very high — 4-5 million Nepali workers abroad, remittances ~23% GDP</td></tr>
<tr><td><b>Technological</b></td><td>Internet penetration ~72%, mobile banking, fintech growth</td></tr>
<tr><td><b>Cultural</b></td><td>Media, social media influence, changing consumer preferences</td></tr>
</table>

<p><b>Positive Impacts on Nepal:</b></p>
<ul>
<li>Remittance-driven poverty reduction (poverty rate dropped from 42% to ~17%)</li>
<li>Technology transfer — banking automation, mobile services</li>
<li>Market access through GSP/DFQF for LDC exports</li>
<li>Skills development through labor migration</li>
</ul>

<p><b>Negative Impacts:</b></p>
<ul>
<li><span class="ka-important">Dutch Disease:</span> Remittance inflows appreciate real exchange rate → domestic exports become uncompetitive</li>
<li>Import dependency — trade deficit widening from NPR 62B (2000) to NPR 1,600B+ (2024)</li>
<li>Brain drain — educated workforce emigrates, reducing domestic human capital</li>
<li>Cultural homogenization and loss of indigenous economic practices</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Global Banking Standards:</b> Nepal's banking sector adopts Basel III, NFRS/IFRS, AML/CFT standards — driven by globalization of financial regulation</li>
<li><b>Correspondent Banking:</b> Globalization requires Nepali banks to maintain international correspondent relationships — de-risking trends threaten smaller banks</li>
<li><b>Technology Adoption:</b> Global fintech innovations (mobile banking, digital wallets, blockchain) are reshaping Nepal's banking landscape</li>
<li><b>Remittance Business:</b> Banks compete with fintech companies (eSewa, Khalti, IME) for remittance market share — globalization enables non-bank competitors</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Global Standards Compliance:</b> NBL must accelerate Basel III, NFRS 9 (ECL), and AML/CFT compliance to maintain international correspondent banking relationships</li>
<li><b>Fintech Partnership:</b> Rather than competing with global fintech, NBL should partner — API banking, open banking platforms</li>
<li><b>Diaspora Banking:</b> Develop comprehensive NRN (Non-Resident Nepali) banking services — investment accounts, property finance, retirement planning from abroad</li>
</ul>`
                }
            }
        ]
    },

    "I.A.5.1": {
        subtopic: "Structure & Characteristics of Developing Economies",
        units: [
            {
                title: "Developing Economy Structural Analysis",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Development Economics</span> studies the economic transformation of <b>low-income nations</b> to achieve sustainable growth, poverty reduction, and improved living standards. Nepal, classified as an <b>LDC (Least Developed Country)</b> since 1971, exhibits classic characteristics of underdevelopment while also showing unique structural features.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>LDC</b></td><td>Least Developed Country — UN classification based on GNI per capita, HAI, and EVI</td></tr>
<tr><td><b>Dual Economy</b></td><td>Co-existence of modern (urban/formal) and traditional (rural/subsistence) sectors — Arthur Lewis model</td></tr>
<tr><td><b>Structural Transformation</b></td><td>Shift from agriculture to industry to services as economy develops</td></tr>
<tr><td><b>Poverty Trap</b></td><td>Self-reinforcing cycle where poverty causes conditions that perpetuate poverty</td></tr>
<tr><td><b>Disguised Unemployment</b></td><td>Workers with zero marginal productivity — removing them doesn't reduce output</td></tr>
<tr><td><b>Import Substitution</b></td><td>Strategy of replacing imports with domestic production behind tariff protection</td></tr>
<tr><td><b>Export-Led Growth</b></td><td>Strategy of growth through expanding exports — East Asian model</td></tr>
</table>`,

                    coreContent: `<p><b>Characteristics of Developing Economies (Nepal Context):</b></p>
<ol>
<li><b>Low Per Capita Income:</b> Nepal's per capita GDP ~USD 1,400 — below LDC graduation threshold</li>
<li><b>Agricultural Dominance:</b> ~24% of GDP, ~60% of employment — low productivity subsistence farming</li>
<li><b>Dual Economy:</b> Kathmandu Valley (modern) vs rural hill/mountain districts (traditional)</li>
<li><b>High Population Growth:</b> ~1.35% annual growth — demographic pressure on resources</li>
<li><b>Unemployment/Underemployment:</b> Official ~12% but disguised unemployment much higher, especially in agriculture</li>
<li><b>Income Inequality:</b> Gini ~0.33 — regional disparity (Kathmandu vs Karnali) significant</li>
<li><b>Infrastructure Deficit:</b> Poor roads, limited electricity access in remote areas, digital divide</li>
<li><b>Institutional Weakness:</b> Corruption, bureaucratic delays, weak rule of law</li>
<li><b>External Dependency:</b> Remittances (~23% GDP), foreign aid (~3% GDP)</li>
<li><b>Brain Drain:</b> Educated youth emigrate — 1,500+ Nepalis leave daily for foreign employment</li>
</ol>`,

                    bankingRelation: `<ul>
<li><b>Financial Inclusion:</b> Developing economy characteristics mean large unbanked population — NRB mandates financial access targets (banking access within 30 min walking distance)</li>
<li><b>Agricultural Credit:</b> Banks must allocate minimum 15% to agriculture — reflecting developing economy's sectoral structure</li>
<li><b>Microfinance:</b> Nepal's microfinance sector (90+ MFIs) addresses developing economy credit gaps</li>
<li><b>Infrastructure Lending:</b> Banks are major financing sources for infrastructure development — hydropower, roads, telecommunications</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>LDC Graduation Preparation:</b> Nepal is scheduled for LDC graduation by 2026 — NBL should prepare for post-graduation changes in concessional finance availability</li>
<li><b>Rural Banking Innovation:</b> Agent banking, mobile banking to reach unbanked population in rural/remote areas</li>
<li><b>Infrastructure Bond:</b> NBL should issue infrastructure bonds to channel domestic savings into development projects</li>
<li><b>Poverty-Linked Products:</b> Develop savings products targeting BPL (Below Poverty Line) populations with minimal balance requirements</li>
</ul>`
                }
            }
        ]
    },

    "I.A.5.2": {
        subtopic: "Determinants of Economic Growth & Challenges",
        units: [
            {
                title: "Growth Determinants & Nepal's Development Challenges",
                knowledgeAreas: {
                    foundation: `<p>Economic growth is determined by a complex interplay of <span class="ka-highlight">physical capital, human capital, natural resources, technology, institutions, and governance</span>. For Nepal, specific <b>geographic constraints (landlocked), structural vulnerabilities (earthquake-prone),</b> and <b>political instability</b> add additional dimensions to the growth challenge.</p>`,

                    coreContent: `<p><b>Key Determinants of Growth:</b></p>
<table>
<tr><th>Factor</th><th>Nepal Status</th><th>Impact</th></tr>
<tr><td><b>Physical Capital</b></td><td>GFCF ~33% of GDP but ICOR ~5.5</td><td>High investment with low efficiency</td></tr>
<tr><td><b>Human Capital</b></td><td>Literacy 68%, HDI 0.601</td><td>Improving but quality gaps persist</td></tr>
<tr><td><b>Natural Resources</b></td><td>Hydropower potential 83,000 MW (developed ~3%)</td><td>Massive untapped potential</td></tr>
<tr><td><b>Technology</b></td><td>R&D <0.3% of GDP</td><td>Very low innovation capacity</td></tr>
<tr><td><b>Institutions</b></td><td>CPI Rank ~110/180 (Transparency Intl)</td><td>Corruption, weak governance</td></tr>
<tr><td><b>Infrastructure</b></td><td>Road density low, digital gaps</td><td>Connectivity constraint</td></tr>
<tr><td><b>Political Stability</b></td><td>Frequent government changes</td><td>Policy inconsistency</td></tr>
</table>

<p><b>Nepal-Specific Growth Constraints:</b></p>
<ul>
<li><b>Landlocked Geography:</b> No direct sea access → transit dependency on India → 20-30% higher trade costs</li>
<li><b>Remittance Dependency:</b> Growth driven by consumption (remittance-funded) not production</li>
<li><b>Climate Vulnerability:</b> Agriculture-dependent economy exposed to monsoon variations, floods, droughts</li>
<li><b>Federalism Transition:</b> Three-tier government (federal, provincial, local) still consolidating — fiscal and administrative capacity building ongoing</li>
</ul>`,

                    prosAndCons: `<p><b class="ka-success">Growth Opportunities:</b></p>
<ul>
<li><b>Hydropower:</b> 83,000 MW potential — export to India, Bangladesh</li>
<li><b>Tourism:</b> Post-COVID recovery, adventure tourism, cultural heritage</li>
<li><b>Digital Economy:</b> Leapfrog traditional infrastructure through mobile/internet</li>
<li><b>Demographic Dividend:</b> Young population (median age ~25) — labor force opportunity</li>
</ul>
<p><b class="ka-important">Growth Threats:</b></p>
<ul>
<li>Climate change intensifying natural disasters</li>
<li>Brain drain accelerating — 500,000+ workers leave annually</li>
<li>Political instability deterring investment</li>
<li>LDC graduation reducing concessional finance access</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Hydropower Financing:</b> Banks are primary financiers of hydropower projects — consortium lending for large projects (Upper Tamakoshi, Arun III)</li>
<li><b>Productive Sector Lending:</b> NRB mandates force banks to align lending with growth priority sectors</li>
<li><b>Infrastructure Bonds:</b> Nepal Rastra Bank has permitted banks to issue infrastructure bonds for long-term project financing</li>
<li><b>Climate Finance:</b> Green banking guidelines (NRB, 2018) require banks to assess climate risk in lending</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Hydropower Focus:</b> NBL should build dedicated project finance expertise for hydropower — Nepal's most promising growth sector</li>
<li><b>Green Bond Issuance:</b> Pioneer green bond issuance in Nepal to attract climate-conscious international capital</li>
<li><b>Youth Entrepreneurship:</b> Develop startup lending products to harness the demographic dividend — targeted at returnee migrants with skills and savings</li>
<li><b>Provincial Development:</b> Align branch strategy with provincial development plans — become preferred banking partner for provincial governments</li>
</ul>`
                }
            }
        ]
    },

    "I.A.5.3": {
        subtopic: "Privatization & Current Status in Nepal",
        units: [
            {
                title: "Privatization: Theory, Practice & Nepal's Experience",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Privatization</span> is the transfer of ownership, management, or control of <b>state-owned enterprises (SOEs)</b> to the private sector. Nepal's privatization program began in the <b>early 1990s</b> under structural adjustment programs supported by the World Bank and IMF.</p>
<p>The theoretical rationale draws from <b>public choice theory</b> and <b>property rights economics</b> — private ownership creates stronger incentives for efficiency, innovation, and accountability than public ownership.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Disinvestment</b></td><td>Partial sale of government equity in SOEs — government retains some ownership</td></tr>
<tr><td><b>Full Privatization</b></td><td>Complete transfer of ownership and control to private sector</td></tr>
<tr><td><b>PPP (Public-Private Partnership)</b></td><td>Collaborative arrangement between government and private sector for infrastructure/services</td></tr>
<tr><td><b>Corporatization</b></td><td>Converting government department into a commercial entity (still state-owned but operated commercially)</td></tr>
<tr><td><b>Denationalization</b></td><td>Returning previously nationalized assets to private ownership</td></tr>
</table>`,

                    coreContent: `<p><b>Nepal's Privatization Journey:</b></p>
<ol>
<li><b>Phase 1 (1992-2000):</b> Privatization Act 2050 BS enacted. 25 SOEs listed for privatization. Completed: Bhrikuti Paper Mills, Harisiddhi Bricks, Bansbari Leather, Nepal Lube Oil</li>
<li><b>Phase 2 (2000-2010):</b> Slow progress. Nepal Bank Limited and Rastriya Banijya Bank placed under NRB management (not privatized but restructured)</li>
<li><b>Phase 3 (2010-Present):</b> PPP Act 2076 enacted. Focus shifted from full privatization to PPP models for infrastructure. Airport, highway, and hydropower PPP projects initiated</li>
</ol>

<p><b>Methods of Privatization:</b></p>
<ul>
<li><b>Share Flotation:</b> Selling shares to public through stock market (IPO)</li>
<li><b>Asset Sale:</b> Direct sale of enterprise assets to private buyer</li>
<li><b>Management Contract:</b> Private firm manages SOE for a fee — ownership stays with government</li>
<li><b>Lease/Concession:</b> Private sector operates public infrastructure for defined period</li>
<li><b>Build-Operate-Transfer (BOT):</b> Common for infrastructure — private builds, operates, then transfers to government</li>
</ul>`,

                    legalFramework: `<ul>
<li><b>Privatization Act, 2050 (1994):</b> Primary legislation — Privatization Committee, employee protection, asset valuation rules</li>
<li><b>PPP Policy, 2072 (2015):</b> Framework for public-private partnerships in infrastructure</li>
<li><b>PPP and Investment Act, 2076 (2019):</b> Updated framework replacing older PPP guidelines</li>
<li><b>Industrial Enterprises Act, 2076:</b> Governs private industrial establishment</li>
<li><b>Company Act, 2063:</b> Framework for corporatization and commercial operation</li>
</ul>`,

                    prosAndCons: `<p><b class="ka-success">✅ Arguments for Privatization:</b></p>
<ul>
<li>Improved efficiency through profit motive and competition</li>
<li>Reduced fiscal burden — SOEs often require government subsidies</li>
<li>Access to private capital for investment and modernization</li>
<li>Better governance, accountability, and management quality</li>
</ul>
<p><b class="ka-important">❌ Arguments Against (Nepal Context):</b></p>
<ul>
<li>Asset stripping risk — buyers may strip valuable assets and close operations</li>
<li>Employment losses — restructuring often leads to layoffs</li>
<li>Loss of strategic control — essential services (water, electricity) may prioritize profit over access</li>
<li>Nepal's experience has been mixed — several privatized firms closed within years</li>
<li>Political opposition and union resistance remain strong</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>NBL's Own History:</b> Nepal Bank Limited was placed under NRB management restructuring (2002) — a form of quasi-privatization. NBL's transformation from a failing SOE to profitable institution demonstrates that management reform can substitute for full privatization</li>
<li><b>Financing Privatization:</b> Banks provide acquisition financing for private buyers purchasing SOEs</li>
<li><b>PPP Financing:</b> Banks are key financiers of PPP infrastructure projects — long-term project finance expertise needed</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>PPP Project Finance:</b> NBL should build dedicated PPP advisory and financing capabilities — airports, highways, hydropower under PPP models</li>
<li><b>SOE Banking:</b> Continue serving remaining SOEs as banking partner while preparing for their potential corporatization/privatization</li>
<li><b>Internal Efficiency:</b> Apply privatization principles internally — performance-based management, commercial orientation, digital transformation</li>
</ul>`
                }
            }
        ]
    },

    "I.A.6.1": {
        subtopic: "Importance & Need of Development Planning",
        units: [
            {
                title: "Development Planning: Concepts & Significance",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Development Planning</span> is the deliberate, systematic process by which governments set economic and social objectives, allocate resources, and coordinate activities to achieve sustained development. For <b>developing countries like Nepal</b>, planning is considered essential because market forces alone cannot address structural constraints.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Indicative Planning</b></td><td>Government sets targets and provides incentives but does not control private sector — French model</td></tr>
<tr><td><b>Imperative/Command Planning</b></td><td>Government directly controls production, allocation, pricing — Soviet/centralized model</td></tr>
<tr><td><b>Rolling Plan</b></td><td>Plan that is continuously updated — each year extends the plan by one more year</td></tr>
<tr><td><b>Periodic Plan</b></td><td>Fixed-duration plan (typically 5 years) — Nepal's traditional approach</td></tr>
<tr><td><b>SDGs</b></td><td>Sustainable Development Goals — 17 UN goals (2015-2030) integrated into Nepal's planning</td></tr>
</table>`,

                    coreContent: `<p><b>Why Planning is Essential for Nepal:</b></p>
<ol>
<li><b>Market Failure:</b> Markets alone cannot provide public goods (roads, education, defense), address externalities, or reduce inequality</li>
<li><b>Structural Rigidities:</b> Low savings, limited capital, technology gaps — require coordinated government intervention</li>
<li><b>Resource Allocation:</b> Scarce resources must be directed to priority sectors — agriculture, hydropower, education</li>
<li><b>Infrastructure Development:</b> Long gestation period, high capital needs — private sector alone won't build roads in remote hills</li>
<li><b>Poverty Reduction:</b> Targeted programs (employment guarantee, social protection) need planning</li>
<li><b>Regional Balance:</b> Federal Nepal needs planned resource distribution across 7 provinces</li>
<li><b>External Dependency Management:</b> Planning helps coordinate foreign aid, remittances, and FDI toward development goals</li>
</ol>

<p><b>Types of Plans in Nepal's History:</b></p>
<table>
<tr><th>Type</th><th>Period</th><th>Approach</th></tr>
<tr><td>Five-Year Plans</td><td>1st-10th Plan (1956-2007)</td><td>Centralized, sector-based targets</td></tr>
<tr><td>Three-Year Plans</td><td>11th-13th Plan (2007-2016)</td><td>Results-based, MDG-oriented</td></tr>
<tr><td>Periodic Plan</td><td>14th-16th Plan (2016-present)</td><td>SDG-integrated, federal structure</td></tr>
</table>`,

                    bankingRelation: `<ul>
<li><b>Priority Sector Lending:</b> NRB's productive sector lending targets (agriculture 15%, energy 10%) are directly derived from national development plan priorities</li>
<li><b>Government Budget Financing:</b> Banks purchase government bonds/treasury bills that finance planned development expenditure</li>
<li><b>Provincial Planning:</b> Under federal structure, banks must align branch strategies with provincial development plans</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Plan-Aligned Lending:</b> NBL should align its sectoral lending portfolio with the 16th Periodic Plan's priority areas — hydropower, tourism, agriculture modernization, IT</li>
<li><b>Government Partnership:</b> As a state-owned bank, NBL is naturally positioned to be the banking partner for planned government development programs</li>
<li><b>SDG Finance:</b> Develop SDG-linked financial products (green bonds, social bonds, gender-focused lending)</li>
</ul>`
                }
            }
        ]
    },

    "I.A.6.2": {
        subtopic: "History, Problems & Challenges of Planning in Nepal",
        units: [
            {
                title: "Nepal's Planning History & Contemporary Challenges",
                knowledgeAreas: {
                    foundation: `<p>Nepal's formal development planning began with the <span class="ka-highlight">First Five-Year Plan (2013-2018 BS / 1956-1961 AD)</span>, modeled on India's planning approach. Since then, Nepal has implemented <b>16 periodic plans</b>, transitioning from centralized Soviet-influenced planning to market-oriented, SDG-integrated federal planning.</p>`,

                    coreContent: `<p><b>Key Plans & Milestones:</b></p>
<table>
<tr><th>Plan</th><th>Period (BS)</th><th>Key Focus</th></tr>
<tr><td><b>1st Plan</b></td><td>2013-2018</td><td>Infrastructure (Tribhuvan Highway, Koshi Barrage)</td></tr>
<tr><td><b>5th Plan</b></td><td>2032-2037</td><td>Agriculture-led growth, Basic Needs Program</td></tr>
<tr><td><b>8th Plan</b></td><td>2049-2054</td><td>Liberalization, privatization, deregulation</td></tr>
<tr><td><b>10th Plan</b></td><td>2059-2064</td><td>Poverty Reduction Strategy Paper (PRSP)</td></tr>
<tr><td><b>14th Plan</b></td><td>2073-2076</td><td>First plan under new Constitution, federal structure transition</td></tr>
<tr><td><b>15th Plan</b></td><td>2076-2081</td><td>"Prosperous Nepal, Happy Nepali" — graduation from LDC target</td></tr>
<tr><td><b>16th Plan</b></td><td>2081-2086</td><td>High-income country by 2043 BS target, SDG integration</td></tr>
</table>

<p><b>Major Problems:</b></p>
<ul>
<li><b>Implementation Gap:</b> Plans set ambitious targets but actual achievement averages 50-60% — capital expenditure chronically underspent</li>
<li><b>Political Instability:</b> Frequent government changes disrupt plan continuity — 30+ governments since 1990</li>
<li><b>Resource Constraints:</b> Domestic revenue insufficient — ~70% of development budget historically funded by foreign aid</li>
<li><b>Coordination Failure:</b> Federal structure creates coordination challenges between central, provincial, and local plans</li>
<li><b>Data Gaps:</b> Inadequate data for evidence-based planning — CBS capacity limitations</li>
<li><b>Governance Issues:</b> Corruption, rent-seeking, political influence in project selection and implementation</li>
<li><b>Brain Drain:</b> Skilled planners and technocrats emigrate — institutional capacity weakened</li>
</ul>`,

                    currentProblems: `<p><b>16th Plan (Current) Key Targets:</b></p>
<ul>
<li>GDP growth: <span class="ka-important">10% average</span> (very ambitious given historical 4-5%)</li>
<li>Per capita income: USD 2,750 by 2086 BS</li>
<li>Poverty rate: Below 5%</li>
<li>Graduation from LDC status</li>
</ul>
<p><b class="ka-warning">⚠️ Reality Check:</b> Achieving 10% growth requires fundamental transformation — Nepal has never sustained >6% growth for more than 2 consecutive years. The Harrod-Domar savings-investment gap analysis shows this target requires savings rates Nepal has never achieved domestically.</p>`,

                    bankingRelation: `<ul>
<li><b>Plan Financing:</b> Government development spending financed through Treasury Bills, Development Bonds — banks are primary purchasers (SLR requirement)</li>
<li><b>Capital Expenditure Bottleneck:</b> Chronic government underspending on capital projects creates liquidity surplus in banking system — NRB must manage through monetary instruments</li>
<li><b>Provincial Banking:</b> Federal restructuring requires banks to develop provincial strategies aligned with provincial periodic plans</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>16th Plan Alignment:</b> NBL should map its 5-year business plan to the 16th Periodic Plan — identify banking opportunities in each planned sector</li>
<li><b>Provincial Planning Partnership:</b> Offer advisory services to provincial governments on financial planning and budget management</li>
<li><b>Development Bond Distribution:</b> Position NBL as primary dealer for government development bonds, capturing fee income while supporting plan financing</li>
</ul>`
                }
            }
        ]
    },

    "I.A.7.1": {
        subtopic: "Monetary Policy Architecture",
        units: [
            {
                title: "Monetary Policy: Framework, Instruments & NRB Implementation",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Monetary Policy</span> is the process by which the <b>Nepal Rastra Bank (NRB)</b> manages <b>money supply, interest rates, and credit conditions</b> to achieve macroeconomic objectives — price stability, economic growth, financial sector stability, and BOP equilibrium.</p>
<p>NRB announces its monetary policy annually (typically in the first month of the fiscal year, Shrawan) and reviews it mid-year. This is the <span class="ka-important">most exam-critical topic</span> for banking exams — understanding NRB's monetary policy instruments is essential.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>CRR (Cash Reserve Ratio)</b></td><td>Percentage of deposits banks must hold with NRB as cash — currently 3%</td></tr>
<tr><td><b>SLR (Statutory Liquidity Ratio)</b></td><td>Percentage of deposits banks must hold in liquid assets (govt securities) — currently 5%</td></tr>
<tr><td><b>Bank Rate</b></td><td>Rate at which NRB lends to commercial banks — currently ~7%</td></tr>
<tr><td><b>Repo Rate</b></td><td>Rate at which NRB lends against government securities collateral</td></tr>
<tr><td><b>Reverse Repo</b></td><td>Rate at which NRB borrows from banks — absorbs excess liquidity</td></tr>
<tr><td><b>Open Market Operations (OMO)</b></td><td>NRB buying/selling government securities to manage liquidity</td></tr>
<tr><td><b>M1/M2 Money Supply</b></td><td>M1 = Currency + Demand Deposits; M2 = M1 + Time Deposits + Savings</td></tr>
<tr><td><b>Money Multiplier</b></td><td>1/CRR — theoretical maximum money creation from initial deposit</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">NRB Monetary Policy Transmission</div>
<div class="fc-box">NRB Policy Decision</div> <span class="fc-arrow">→</span>
<div class="fc-box">CRR/SLR/Rate Changes</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">Bank Liquidity Impact</div> <span class="fc-arrow">→</span>
<div class="fc-box">Interest Rate Changes</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">Credit/Investment Impact</div> <span class="fc-arrow">→</span>
<div class="fc-box">GDP/Inflation/BOP</div>
</div>`,

                    coreContent: `<p><b>NRB Monetary Policy Instruments:</b></p>
<p><span class="ka-highlight">1. Quantitative/General Instruments:</span></p>
<ul>
<li><b>CRR (3%):</b> Directly controls reserve money — raising CRR reduces lendable funds</li>
<li><b>SLR (5%):</b> Forces banks to hold government securities — controls credit and finances government deficit</li>
<li><b>Bank Rate (Discount Rate):</b> Cost of borrowing from NRB — signals monetary stance</li>
<li><b>OMO:</b> NRB buys securities (injects liquidity) or sells (absorbs liquidity)</li>
<li><b>Repo/Reverse Repo:</b> Short-term liquidity management tools — repo injects, reverse repo absorbs</li>
</ul>

<p><span class="ka-highlight">2. Qualitative/Selective Instruments:</span></p>
<ul>
<li><b>Margin Requirements:</b> LC margins for imports (50-100% for luxury items)</li>
<li><b>Directed Lending:</b> Agriculture (15%), energy (10%), women (5%) lending mandates</li>
<li><b>Interest Rate Corridor:</b> NRB sets floor (reverse repo) and ceiling (bank rate) for interbank rates</li>
<li><b>Moral Suasion:</b> NRB's verbal/written guidance to banks — informal but powerful tool</li>
</ul>

<p><b>Monetary Policy Targets (FY 2082/83 typical):</b></p>
<table>
<tr><th>Target</th><th>Typical Value</th><th>Purpose</th></tr>
<tr><td>Inflation</td><td>7% (ceiling)</td><td>Price stability — CPI-based</td></tr>
<tr><td>M2 Growth</td><td>12-14%</td><td>= GDP growth target + inflation target</td></tr>
<tr><td>Credit Growth</td><td>12-15%</td><td>Aligned with productive capacity</td></tr>
<tr><td>Import Cover</td><td>≥7 months</td><td>BOP safety — forex reserves adequacy</td></tr>
</table>`,

                    calculations: `<p><b>Money Multiplier Example:</b></p>
<blockquote>
<b>Q:</b> If CRR = 3% and initial deposit = NPR 100 million, what is the maximum money creation potential?<br><br>
<b>A:</b> Money Multiplier = 1/CRR = 1/0.03 = <span class="ka-important">33.33</span><br>
Maximum money creation = 100 × 33.33 = <span class="ka-important">NPR 3,333 million</span><br><br>
<i>Note: Actual multiplier is lower due to excess reserves, currency drain, and banks' liquidity preference.</i>
</blockquote>`,

                    bankingRelation: `<p><span class="ka-important">Monetary policy is THE most directly relevant topic for banking operations:</span></p>
<ul>
<li><b>CRR/SLR directly determine</b> how much banks can lend — any change immediately affects banks' balance sheets</li>
<li><b>Interest Rate Corridor</b> determines banks' cost of funds and lending rates — affects Net Interest Margin (NIM)</li>
<li><b>Directed Lending Mandates</b> force portfolio allocation — banks must meet sectoral targets or face penalties</li>
<li><b>OMO/Repo</b> — banks' treasury operations revolve around NRB's liquidity management</li>
<li><b>Credit Growth Ceiling</b> — NRB can cap credit expansion if it exceeds target, directly limiting banks' business growth</li>
</ul>`,

                    legalFramework: `<ul>
<li><b>NRB Act, 2058:</b> Section 4 — NRB's monetary policy mandate: price stability, financial stability, BOP equilibrium</li>
<li><b>NRB Act, Section 37-42:</b> Legal basis for CRR, SLR, bank rate, OMO instruments</li>
<li><b>BAFIA, 2073:</b> Regulatory framework for banks' compliance with monetary policy directives</li>
<li><b>Annual Monetary Policy Circular:</b> NRB issues detailed monetary policy statement each Shrawan</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Treasury Excellence:</b> NBL's treasury must be among the most sophisticated in Nepal — accurately forecasting NRB policy moves and positioning accordingly</li>
<li><b>Directed Lending Compliance:</b> Proactively meet all sectoral lending targets (agriculture 15%, energy 10%) — avoid penalties and reputational damage</li>
<li><b>Interest Rate Management:</b> Develop ALCO (Asset-Liability Committee) capacity to optimize NIM under NRB's interest rate corridor framework</li>
<li><b>Liquidity Buffer:</b> Maintain liquidity above minimum CRR/SLR requirements to avoid emergency borrowing from NRB at penal rates</li>
</ul>`
                }
            }
        ]
    },

    "I.A.7.2": {
        subtopic: "Fiscal Policy & Interrelationship",
        units: [
            {
                title: "Fiscal Policy Framework & Monetary-Fiscal Coordination",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Fiscal Policy</span> involves the use of <b>government revenue (taxation)</b> and <b>expenditure (spending)</b> to influence macroeconomic conditions — growth, employment, price stability, and income distribution. In Nepal, fiscal policy is formulated by the <b>Ministry of Finance (MOF)</b> through the annual budget.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Fiscal Deficit</b></td><td>Total Expenditure − Total Revenue (excluding borrowings) — measures government's borrowing needs</td></tr>
<tr><td><b>Primary Deficit</b></td><td>Fiscal Deficit − Interest Payments — measures fiscal discipline excluding past debt</td></tr>
<tr><td><b>Revenue Deficit</b></td><td>Revenue Expenditure − Revenue Receipt — indicates consumption financed by borrowing</td></tr>
<tr><td><b>Capital Expenditure</b></td><td>Government spending on infrastructure, assets — productive spending</td></tr>
<tr><td><b>Tax-to-GDP Ratio</b></td><td>Total tax revenue as % of GDP — measures fiscal capacity (~22% in Nepal)</td></tr>
<tr><td><b>Crowding Out</b></td><td>Government borrowing raises interest rates, reducing private investment</td></tr>
</table>`,

                    coreContent: `<p><b>Nepal's Fiscal Structure:</b></p>
<table>
<tr><th>Component</th><th>Value (FY 2081/82 est.)</th></tr>
<tr><td>Total Revenue</td><td>~NPR 1,100-1,200 Billion</td></tr>
<tr><td>Tax Revenue</td><td>~NPR 950-1,050 Billion</td></tr>
<tr><td>Total Expenditure</td><td>~NPR 1,700-1,800 Billion</td></tr>
<tr><td>Fiscal Deficit</td><td>~5-6% of GDP</td></tr>
<tr><td>Capital Spending</td><td>~NPR 350 Billion (but actual absorption ~60%)</td></tr>
</table>

<p><b>Fiscal-Monetary Policy Coordination:</b></p>
<ul>
<li><b>Complementary:</b> Expansionary fiscal policy (increased spending) + accommodative monetary policy (low rates) together boost growth</li>
<li><b>Conflicting:</b> Large fiscal deficit + tight monetary policy creates tension — government borrows at higher rates, crowding out private credit</li>
<li><b>Nepal's Challenge:</b> NRB must manage liquidity impact of government spending patterns — heavy spending in Q3-Q4 creates seasonal liquidity swings</li>
<li><b>SLR Linkage:</b> SLR requirement forces banks to hold government securities — effectively providing captive financing for fiscal deficit</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Government Securities:</b> Banks purchase Treasury Bills and Development Bonds to meet SLR — fiscal deficit is partly financed by banking sector</li>
<li><b>Tax Collection:</b> Banks act as government revenue collection agents — deposit taxes, customs duties into government accounts at NRB</li>
<li><b>Government Spending Effect:</b> When government spends from NRB accounts into commercial banks, it injects liquidity — affects banking system liquidity</li>
<li><b>Interest Rate Impact:</b> Large government borrowing can push up interest rates, affecting banks' cost of funds</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Government Business:</b> NBL should strengthen its role as government banker — payroll processing, pension disbursement, revenue collection for provincial/local governments</li>
<li><b>Treasury Optimization:</b> Actively manage government securities portfolio for both SLR compliance and yield optimization</li>
<li><b>Budget Cycle Planning:</b> Align lending strategy with government budget cycle — credit demand peaks when government spending accelerates</li>
</ul>`
                }
            }
        ]
    },

    "I.A.7.3": {
        subtopic: "Commerce, Industrial, Tourism & FDI Policy",
        units: [
            {
                title: "Nepal's Sectoral Policy Landscape",
                knowledgeAreas: {
                    foundation: `<p>Nepal's economic policy framework extends beyond monetary and fiscal policies to include <span class="ka-highlight">sector-specific policies</span> targeting commerce, industry, tourism, and foreign investment. These policies create the operating environment that shapes banking demand and opportunities.</p>`,

                    coreContent: `<p><b>Key Sectoral Policies:</b></p>

<p><span class="ka-highlight">1. Commerce (Trade) Policy, 2072 (2015):</span></p>
<ul>
<li>Export diversification — identify 19 priority products</li>
<li>Trade facilitation — National Single Window, customs modernization</li>
<li>Integration into global value chains</li>
<li>E-commerce development framework</li>
</ul>

<p><span class="ka-highlight">2. Industrial Policy, 2067 (2010) & Industrial Enterprises Act, 2076:</span></p>
<ul>
<li>Industry classification: Micro, Cottage, Small, Medium, Large</li>
<li>Tax incentives for priority industries (export-oriented, import-substitution)</li>
<li>Special Economic Zones — Bhairahawa operational</li>
<li>One-stop service for industrial registration</li>
</ul>

<p><span class="ka-highlight">3. Tourism Policy, 2065 (2008):</span></p>
<ul>
<li>Target: 2 million tourists (pre-COVID; actual recovering to ~1 million)</li>
<li>Adventure tourism, cultural tourism, medical tourism promotion</li>
<li>Infrastructure development — international airports, tourism corridors</li>
<li>Tourism contribution: ~7% of GDP directly, ~15% including indirect effects</li>
</ul>

<p><span class="ka-highlight">4. Foreign Investment Policy (FITTA 2075):</span></p>
<ul>
<li>Minimum FDI threshold: NPR 20 million (reduced from 50 million)</li>
<li>100% foreign ownership allowed in most sectors</li>
<li>Repatriation of profit and capital guaranteed</li>
<li>Investment Board Nepal for large projects (>NPR 10 billion)</li>
<li>Negative list: Cottage industries, arms, real estate (restricted)</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>SME/Industrial Lending:</b> Industrial policy classifications determine lending terms — NRB concessional refinancing available for SME loans</li>
<li><b>Tourism Sector Lending:</b> Hotels, restaurants, travel agencies form significant banking portfolios — COVID demonstrated high risk but also high recovery</li>
<li><b>FDI Banking:</b> Banks process FDI applications, maintain foreign investor accounts, and facilitate repatriation — growing revenue stream</li>
<li><b>Trade Finance:</b> Commerce policy directly shapes import/export volumes that banks finance through LCs and guarantees</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>SME Banking Division:</b> Create dedicated SME banking unit aligned with industrial policy priorities — targeted lending, advisory, digital tools for small businesses</li>
<li><b>Tourism Recovery Fund:</b> Develop tourism-specific lending products — working capital, renovation loans, new hotel/resort financing</li>
<li><b>FDI Facilitation Desk:</b> Dedicated team for foreign investor banking needs — account opening, compliance, advisory</li>
<li><b>E-Commerce Payment:</b> Build payment gateway and merchant acquiring capabilities for growing e-commerce sector</li>
</ul>`
                }
            }
        ]
    },

    "I.A.8.1": {
        subtopic: "Financial Sector Reform Programme & Achievements",
        units: [
            {
                title: "Nepal's Financial Sector Reform Journey",
                knowledgeAreas: {
                    foundation: `<p>Nepal's <span class="ka-highlight">Financial Sector Reform Programme (FSRP)</span> began in <b>2000</b> with World Bank/DFID support, targeting the restructuring of two large state-owned banks — <b>Nepal Bank Limited (NBL)</b> and <b>Rastriya Banijya Bank (RBB)</b> — along with broader financial sector modernization. This is <span class="ka-important">directly relevant to NBL exam candidates</span>.</p>`,

                    coreContent: `<p><b>FSRP Components:</b></p>
<ol>
<li><b>NBL & RBB Restructuring (2002-2010):</b>
<ul>
<li>International management teams appointed (ICC for NBL, Deloitte for RBB)</li>
<li>Massive NPL reduction — from ~60% to single digits</li>
<li>Staff rationalization — voluntary retirement schemes</li>
<li>IT system upgrades — core banking implementation</li>
<li>Governance reform — professional boards, audit committees</li>
</ul></li>

<li><b>NRB Institutional Strengthening:</b>
<ul>
<li>Bank supervision modernization — risk-based supervision (CAMELS framework)</li>
<li>Prudential regulation enhancement — capital adequacy, asset classification</li>
<li>Payment system modernization — RTGS, NCHL (Nepal Clearing House)</li>
</ul></li>

<li><b>Legal Framework Modernization:</b>
<ul>
<li>NRB Act 2058 — central bank autonomy</li>
<li>BAFIA 2073 — comprehensive banking regulation</li>
<li>AML/CFT Act 2064 — anti-money laundering framework</li>
</ul></li>

<li><b>Financial Inclusion:</b>
<ul>
<li>Microfinance expansion — 90+ licensed MFIs</li>
<li>Branchless banking — agent banking, mobile banking</li>
<li>Directed lending — agriculture (15%), energy, women</li>
</ul></li>
</ol>

<p><b>Key Achievements:</b></p>
<table>
<tr><th>Indicator</th><th>Before FSRP (~2000)</th><th>After FSRP (~2024)</th></tr>
<tr><td>NPLs (NBL/RBB)</td><td>~60%</td><td><3%</td></tr>
<tr><td>Capital Adequacy</td><td>Negative</td><td>>11% (Basel III compliant)</td></tr>
<tr><td>Commercial Banks</td><td>13</td><td>20+ (post-merger ~20)</td></tr>
<tr><td>Bank Branches</td><td>~500</td><td>~5,000+</td></tr>
<tr><td>Access to Banking</td><td>~26% population</td><td>~67% population</td></tr>
</table>`,

                    bankingRelation: `<p><span class="ka-important">This is NBL's own story — candidates must know this thoroughly:</span></p>
<ul>
<li><b>NBL Transformation:</b> From a loss-making, over-staffed, poorly managed SOE to a profitable, technology-enabled commercial bank</li>
<li><b>NRB Supervision:</b> Risk-based supervision (CAMELS) replaced compliance-only approach — banks are now assessed on Capital, Asset quality, Management, Earnings, Liquidity, Sensitivity</li>
<li><b>Merger Drive:</b> NRB's forced merger policy (2015-2023) consolidated 28 commercial banks to ~20 — improving sector stability but reducing competition</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Continuous Improvement:</b> FSRP lessons show that reform is ongoing — NBL should never become complacent about governance, risk management, or technology</li>
<li><b>International Best Practices:</b> Continue adopting global banking standards — Basel III Pillar II/III, NFRS 9 ECL, stress testing frameworks</li>
<li><b>Digital Leadership:</b> NBL should lead the next wave of financial sector evolution — AI-based lending, blockchain trade finance, open banking APIs</li>
</ul>`
                }
            }
        ]
    },

    "I.A.8.2": {
        subtopic: "Sectoral Development: Agriculture, Industry, Trade & Tourism",
        units: [
            {
                title: "Nepal's Sectoral Economic Performance",
                knowledgeAreas: {
                    foundation: `<p>Nepal's economy comprises three main sectors: <span class="ka-highlight">Agriculture (~24% GDP), Industry (~13% GDP), and Services (~54% GDP)</span>. Understanding sectoral dynamics is critical for banking strategy — lending decisions, risk assessment, and NRB compliance all depend on sectoral knowledge.</p>`,

                    coreContent: `<p><b>Sectoral Overview:</b></p>

<p><span class="ka-highlight">1. Agriculture (~24% GDP, ~60% employment):</span></p>
<ul>
<li>Dominated by subsistence farming — average farm size <0.7 hectares</li>
<li>Major crops: rice, wheat, maize, potato, sugarcane</li>
<li>Low productivity — mechanization <15%, irrigation coverage ~42%</li>
<li>Key challenges: fragmentation, climate vulnerability, market access, post-harvest losses (~25%)</li>
<li>NRB mandate: Banks must lend minimum <span class="ka-important">15% of total credit to agriculture</span></li>
</ul>

<p><span class="ka-highlight">2. Industry (~13% GDP):</span></p>
<ul>
<li>Manufacturing: ~6% GDP — cement, steel, food processing, garments</li>
<li>Construction: ~7% GDP — driven by urbanization, post-earthquake reconstruction, federalism infrastructure</li>
<li>Key constraints: expensive energy, small market, landlocked, limited skilled labor</li>
<li>Hydropower — the bright spot: 83,000 MW potential, ~3,000 MW developed</li>
<li>NRB mandate: <span class="ka-important">10% of lending to energy sector</span></li>
</ul>

<p><span class="ka-highlight">3. Services (~54% GDP):</span></p>
<ul>
<li>Wholesale/retail trade: largest service sector</li>
<li>Financial services: ~4% GDP (but critical for all other sectors)</li>
<li>Tourism: ~7% direct GDP; ~1 million tourists pre-COVID</li>
<li>IT/BPO: nascent but growing — software exports increasing</li>
<li>Remittance services: massive demand from diaspora</li>
</ul>

<p><span class="ka-highlight">4. Tourism Sector Detail:</span></p>
<table>
<tr><th>Indicator</th><th>Value</th></tr>
<tr><td>Tourist Arrivals (2023)</td><td>~1 million</td></tr>
<tr><td>Tourism Revenue</td><td>~USD 800 million</td></tr>
<tr><td>Employment (direct)</td><td>~500,000</td></tr>
<tr><td>Key Markets</td><td>India, China, USA, UK, South Korea</td></tr>
<tr><td>Key Products</td><td>Trekking, mountaineering, cultural heritage, pilgrimage</td></tr>
</table>`,

                    bankingRelation: `<ul>
<li><b>Agriculture Banking:</b> Largest mandated sector — banks must develop viable agri-lending models (crop loans, mechanization finance, warehouse receipt financing)</li>
<li><b>Hydropower Financing:</b> Banks are primary financiers through consortium lending — Upper Tamakoshi (456 MW), various small/medium projects</li>
<li><b>Tourism Lending:</b> Hotels, resorts, adventure tourism operators — working capital and investment financing</li>
<li><b>Construction Finance:</b> Real estate and infrastructure lending forms significant portion of bank portfolios — also a source of NPL risk</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Agriculture Excellence:</b> NBL should become Nepal's premier agri-bank — weather-indexed crop insurance, digital farmer lending, agri-value chain finance</li>
<li><b>Hydropower Portfolio:</b> Build dedicated project finance team — target 5-10% of Nepal's hydropower financing market</li>
<li><b>Tourism Recovery:</b> Design flexible tourism lending products — seasonal working capital, renovation loans, eco-tourism financing</li>
<li><b>Digital Services Banking:</b> As services sector grows, develop digital-first products for IT companies, freelancers, and gig economy workers</li>
</ul>`
                }
            }
        ]
    },

    "I.B.1.1": {
        subtopic: "Commercial & Central Bank: History, Role & Functions",
        units: [
            {
                title: "Nepal's Banking Architecture: NRB & Commercial Banks",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Nepal Rastra Bank (NRB)</span> was established on <b>Baishakh 14, 2013 BS (April 26, 1956)</b> under NRB Act 2012 BS as Nepal's central bank. <b>Nepal Bank Limited (NBL)</b>, established on <b>Kartik 30, 1994 BS (November 15, 1937)</b>, was Nepal's <span class="ka-important">first commercial bank</span> — older than the central bank itself.</p>`,

                    definitions: `<table>
<tr><th>Institution</th><th>Key Role</th><th>Legal Basis</th></tr>
<tr><td><b>Nepal Rastra Bank</b></td><td>Monetary policy, bank supervision, currency issuance, BOP management</td><td>NRB Act, 2058</td></tr>
<tr><td><b>Commercial Banks (A-Class)</b></td><td>Accept deposits, provide credit, facilitate payments, trade finance</td><td>BAFIA, 2073</td></tr>
<tr><td><b>Development Banks (B-Class)</b></td><td>Medium/long-term lending, sector-specific finance</td><td>BAFIA, 2073</td></tr>
<tr><td><b>Finance Companies (C-Class)</b></td><td>Consumer finance, hire purchase, limited deposits</td><td>BAFIA, 2073</td></tr>
<tr><td><b>Microfinance (D-Class)</b></td><td>Small loans to unbanked populations, group lending</td><td>BAFIA, 2073</td></tr>
</table>`,

                    coreContent: `<p><b>NRB Functions (NRB Act, 2058):</b></p>
<ol>
<li><b>Monetary Policy:</b> Manage money supply, interest rates, inflation targeting (~7%)</li>
<li><b>Bank Regulation & Supervision:</b> License, supervise, and regulate all BFIs through CAMELS framework</li>
<li><b>Currency Issuance:</b> Sole authority to issue Nepalese Rupee (NPR)</li>
<li><b>Government Banker:</b> Manage government accounts, debt issuance, fiscal agent</li>
<li><b>Foreign Exchange Management:</b> Maintain exchange rate peg (NPR 160 = INR 100), manage forex reserves</li>
<li><b>Payment System:</b> Operate RTGS, oversee NCHL (Nepal Clearing House)</li>
<li><b>Lender of Last Resort:</b> Emergency lending to banks facing liquidity stress</li>
</ol>

<p><b>Commercial Bank Functions:</b></p>
<ul>
<li><b>Primary:</b> Accept deposits (savings, current, fixed), provide credit (term loans, overdraft, working capital)</li>
<li><b>Secondary:</b> Agency services (bill collection, standing instructions), utility payments</li>
<li><b>Modern:</b> Digital banking, mobile payments, card services, remittance, trade finance (LC/BG)</li>
</ul>

<p><b>NBL Historical Milestones:</b></p>
<table>
<tr><th>Year</th><th>Event</th></tr>
<tr><td>1937</td><td>Nepal Bank Limited established — Nepal's first bank</td></tr>
<tr><td>1966</td><td>Rastriya Banijya Bank (RBB) established — second government bank</td></tr>
<tr><td>1984</td><td>First joint venture bank: Nepal Arab Bank (now Nabil)</td></tr>
<tr><td>2002</td><td>NBL placed under NRB management (ICC team)</td></tr>
<tr><td>2010</td><td>NBL restructuring completed — returned to profitability</td></tr>
</table>`,

                    nblStrategy: `<ul>
<li><b>Heritage Brand:</b> NBL's 87+ year legacy is a unique competitive advantage — position as "Nepal's Bank Since 1937"</li>
<li><b>Digital Transformation:</b> Modernize while leveraging trust — mobile banking, internet banking, QR payments</li>
<li><b>Government Banking:</b> As a state-owned bank, strengthen role as preferred government banking partner</li>
</ul>`
                }
            }
        ]
    },

    "I.B.1.2": {
        subtopic: "Profitability & Liquidity Management",
        units: [
            {
                title: "Bank Profitability Analysis & Liquidity Frameworks",
                knowledgeAreas: {
                    foundation: `<p>Bank management involves balancing two competing objectives: <span class="ka-highlight">profitability (maximize returns)</span> and <span class="ka-highlight">liquidity (maintain solvency)</span>. Too much focus on profitability increases risk; too much focus on liquidity sacrifices returns. This is the fundamental banking dilemma.</p>`,

                    definitions: `<table>
<tr><th>Metric</th><th>Formula</th><th>Benchmark</th></tr>
<tr><td><b>NIM (Net Interest Margin)</b></td><td>(Interest Income − Interest Expense) / Average Earning Assets</td><td>3-4%</td></tr>
<tr><td><b>ROA (Return on Assets)</b></td><td>Net Profit / Total Assets</td><td>>1%</td></tr>
<tr><td><b>ROE (Return on Equity)</b></td><td>Net Profit / Shareholders' Equity</td><td>>12%</td></tr>
<tr><td><b>Cost-to-Income Ratio</b></td><td>Operating Expenses / Operating Income</td><td><50%</td></tr>
<tr><td><b>CD Ratio (Credit-to-Deposit)</b></td><td>Total Loans / Total Deposits</td><td>NRB max 90%</td></tr>
<tr><td><b>LCR (Liquidity Coverage Ratio)</b></td><td>HQLA / 30-day Net Cash Outflows</td><td>NRB min 100%</td></tr>
<tr><td><b>NSFR (Net Stable Funding Ratio)</b></td><td>Available Stable Funding / Required Stable Funding</td><td>NRB min 100%</td></tr>
</table>`,

                    coreContent: `<p><b>Profitability Management:</b></p>
<ul>
<li><b>Interest Income:</b> ~75-80% of total income — driven by loan portfolio size and spread</li>
<li><b>Non-Interest Income:</b> ~20-25% — fees, commissions, forex income, LC/BG charges</li>
<li><b>Spread Management:</b> NRB's base rate system caps spread at 2% for loans ≤NPR 10 million — limits pricing flexibility</li>
<li><b>Cost Optimization:</b> Digital channels reduce per-transaction cost from ~NPR 100 (branch) to ~NPR 5 (mobile)</li>
</ul>

<p><b>Liquidity Management:</b></p>
<ul>
<li><b>CRR (3%):</b> Cash balance with NRB — mandatory reserve</li>
<li><b>SLR (5%):</b> Government securities holding — liquid buffer</li>
<li><b>CD Ratio (90% max):</b> Prevents over-lending relative to deposit base</li>
<li><b>LCR/NSFR:</b> Basel III liquidity ratios — ensure short-term and long-term liquidity adequacy</li>
<li><b>Interbank Market:</b> Banks borrow/lend overnight to manage daily liquidity — call money market</li>
</ul>`,

                    calculations: `<p><b>Profitability Calculation:</b></p>
<blockquote>
<b>Q:</b> A bank has Interest Income NPR 5,000M, Interest Expense NPR 3,200M, Average Earning Assets NPR 50,000M, Net Profit NPR 800M, Total Assets NPR 60,000M, Equity NPR 6,000M. Calculate NIM, ROA, ROE.<br><br>
<b>NIM</b> = (5,000 − 3,200) / 50,000 = <span class="ka-important">3.6%</span><br>
<b>ROA</b> = 800 / 60,000 = <span class="ka-important">1.33%</span><br>
<b>ROE</b> = 800 / 6,000 = <span class="ka-important">13.33%</span>
</blockquote>`,

                    nblStrategy: `<ul>
<li><b>NIM Optimization:</b> Focus on higher-yielding loan segments (SME, retail) while managing deposit costs through CASA (Current Account Savings Account) growth</li>
<li><b>Fee Income Growth:</b> Expand non-interest revenue through trade finance, digital banking fees, advisory services</li>
<li><b>Liquidity Buffer:</b> Maintain CRR/SLR above minimums with treasury expertise to optimize yield on liquid assets</li>
</ul>`
                }
            }
        ]
    },

    "I.B.1.3": {
        subtopic: "Asset-Liability Management (ALM) Framework",
        units: [
            {
                title: "ALM: Risk Management & Balance Sheet Optimization",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Asset-Liability Management (ALM)</span> is a comprehensive framework for managing <b>interest rate risk, liquidity risk, and market risk</b> arising from mismatches between a bank's assets (loans, investments) and liabilities (deposits, borrowings). The <b>ALCO (Asset-Liability Committee)</b> is the key governance body.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Interest Rate Risk</b></td><td>Risk that changes in interest rates reduce NII or economic value of equity</td></tr>
<tr><td><b>Maturity Gap</b></td><td>RSA (Rate Sensitive Assets) − RSL (Rate Sensitive Liabilities) in each time bucket</td></tr>
<tr><td><b>Duration Gap</b></td><td>Duration of Assets − (Liabilities/Assets × Duration of Liabilities)</td></tr>
<tr><td><b>NII (Net Interest Income)</b></td><td>Interest Income − Interest Expense — primary earnings driver</td></tr>
<tr><td><b>ALCO</b></td><td>Asset-Liability Committee — senior management body for ALM decisions</td></tr>
<tr><td><b>Transfer Pricing</b></td><td>Internal pricing mechanism between treasury and business units for funds</td></tr>
</table>`,

                    coreContent: `<p><b>ALM Techniques:</b></p>
<p><span class="ka-highlight">1. Gap Analysis (Traditional):</span></p>
<blockquote>
<b>Gap = RSA − RSL</b> in each time bucket (1-28 days, 29-90, 91-180, 181-365, >365)<br>
<b>Positive Gap:</b> RSA > RSL → NII increases when rates rise<br>
<b>Negative Gap:</b> RSL > RSA → NII increases when rates fall<br>
<b>Change in NII = Gap × Change in Interest Rate</b>
</blockquote>

<p><span class="ka-highlight">2. Duration Analysis (Advanced):</span></p>
<ul>
<li>Measures sensitivity of bank's economic value to interest rate changes</li>
<li>Higher duration gap → greater exposure to interest rate movements</li>
<li>Banks typically have assets with longer duration than liabilities (lend long, borrow short)</li>
</ul>

<p><b>Nepal Banking Context:</b></p>
<ul>
<li>Most Nepali banks have <b>negative gaps in short-term buckets</b> (more short-term deposits than loans) and <b>positive gaps in long-term buckets</b></li>
<li>NRB requires banks to submit quarterly ALM reports with maturity-wise gap analysis</li>
<li>Interest rate corridor (repo/reverse repo) provides some stability but sudden NRB moves can impact NII</li>
</ul>`,

                    calculations: `<p><b>Gap Analysis Example:</b></p>
<blockquote>
<b>Q:</b> Bank has RSA = NPR 20,000M and RSL = NPR 25,000M in 1-90 day bucket. If interest rates rise by 1%, what is the impact on NII?<br><br>
<b>Gap</b> = 20,000 − 25,000 = <span class="ka-important">−5,000M (Negative Gap)</span><br>
<b>ΔNII</b> = −5,000 × 0.01 = <span class="ka-important">−NPR 50M</span><br>
NII will <b>decrease by NPR 50M</b> if rates rise — bank should try to close the negative gap.
</blockquote>`,

                    nblStrategy: `<ul>
<li><b>ALCO Strengthening:</b> Weekly ALCO meetings with real-time data on maturity gaps, liquidity ratios, and interest rate sensitivity</li>
<li><b>Duration Matching:</b> Develop long-term deposit products to fund long-term loans (hydropower, housing) — reduce maturity mismatch</li>
<li><b>Transfer Pricing:</b> Implement funds transfer pricing to accurately measure profitability of each business unit</li>
</ul>`
                }
            }
        ]
    },

    "I.B.1.4": {
        subtopic: "Credit Principles & Portfolio Management",
        units: [
            {
                title: "Credit Risk Framework & Loan Portfolio Strategy",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Credit risk</span> is the most significant risk for Nepali banks — typically 60-70% of bank assets are loans. Effective credit management requires sound <b>origination, appraisal, monitoring, and recovery</b> processes governed by NRB's Unified Directives.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>5 C's of Credit</b></td><td>Character, Capacity, Capital, Collateral, Conditions</td></tr>
<tr><td><b>NPL (Non-Performing Loan)</b></td><td>Loan where principal or interest is overdue >90 days — NRB Directive 2</td></tr>
<tr><td><b>LLP (Loan Loss Provision)</b></td><td>Reserve against potential loan losses — 1% (Pass), 5% (Watchlist), 25% (Substandard), 50% (Doubtful), 100% (Loss)</td></tr>
<tr><td><b>Single Obligor Limit (SOL)</b></td><td>Maximum lending to single borrower: 25% of core capital (funded), 50% total exposure</td></tr>
<tr><td><b>Sector Concentration</b></td><td>Maximum exposure to single sector — NRB limits to prevent portfolio concentration</td></tr>
<tr><td><b>ECL (Expected Credit Loss)</b></td><td>Forward-looking loan loss under NFRS 9 — replaces incurred loss model</td></tr>
</table>`,

                    coreContent: `<p><b>Credit Process Lifecycle:</b></p>
<ol>
<li><b>Origination:</b> Customer identification, KYC/CDD, initial screening</li>
<li><b>Appraisal:</b> Financial analysis (ratio analysis, cash flow projection), collateral valuation, industry risk assessment</li>
<li><b>Approval:</b> Credit committee/board approval based on delegation of authority</li>
<li><b>Documentation:</b> Loan agreement, mortgage deed, personal guarantee, hypothecation</li>
<li><b>Disbursement:</b> Fund release after documentation completion</li>
<li><b>Monitoring:</b> Regular review, account conduct analysis, site visits, renewal assessment</li>
<li><b>Recovery:</b> Collection efforts, restructuring, legal action if needed</li>
</ol>

<p><b>NRB Directive 2 — Loan Classification (Key for Exam):</b></p>
<table>
<tr><th>Category</th><th>Overdue Period</th><th>Provision</th></tr>
<tr><td><b>Pass (Good)</b></td><td>Not overdue or ≤3 months</td><td>1%</td></tr>
<tr><td><b>Watchlist</b></td><td>3-6 months overdue</td><td>5%</td></tr>
<tr><td><b>Substandard</b></td><td>6-12 months overdue</td><td>25%</td></tr>
<tr><td><b>Doubtful</b></td><td>1-3 years overdue</td><td>50%</td></tr>
<tr><td><b>Loss</b></td><td>>3 years overdue</td><td>100%</td></tr>
</table>`,

                    nblStrategy: `<ul>
<li><b>Portfolio Diversification:</b> Spread credit across sectors (agriculture, manufacturing, services, retail) to reduce concentration risk</li>
<li><b>Credit Scoring:</b> Implement automated credit scoring for retail/SME loans — reduce processing time and improve consistency</li>
<li><b>NPL Management:</b> Dedicated recovery unit with legal expertise — target NPL ratio below 2%</li>
<li><b>NFRS 9 ECL:</b> Build robust ECL models for forward-looking provisioning — PD, LGD, EAD estimation</li>
</ul>`
                }
            }
        ]
    },

    "I.B.1.5": {
        subtopic: "Interest Rate Determination & Base Rate/Spread Regulation",
        units: [
            {
                title: "Interest Rate Architecture in Nepal's Banking",
                knowledgeAreas: {
                    foundation: `<p>Nepal's interest rate system is regulated through NRB's <span class="ka-highlight">Base Rate/Spread mechanism</span>. The <b>Base Rate</b> represents the minimum lending rate below which a bank cannot lend, while the <b>Spread</b> is the maximum premium above the base rate. This system was introduced to ensure <b>transparency, fair pricing, and protection of borrowers</b>.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Base Rate</b></td><td>Minimum lending rate = Weighted Average Cost of Funds + Operating Costs + CRR cost — calculated quarterly</td></tr>
<tr><td><b>Spread</b></td><td>Premium above base rate — NRB caps at different levels (currently ~2-4.5% depending on loan type)</td></tr>
<tr><td><b>Lending Rate</b></td><td>Base Rate + Spread (within NRB-prescribed limits)</td></tr>
<tr><td><b>Weighted Average Interest Rate Spread (WAIRS)</b></td><td>Weighted average of all lending rate spreads — must be published quarterly</td></tr>
<tr><td><b>Policy Rate</b></td><td>NRB's benchmark rate (bank rate/repo rate) that guides overall interest rate structure</td></tr>
<tr><td><b>Interest Rate Corridor</b></td><td>Floor (SDF/Reverse Repo) and Ceiling (SLF/Bank Rate) that bounds interbank rates</td></tr>
</table>`,

                    coreContent: `<p><b>Base Rate Calculation:</b></p>
<blockquote>
<b>Base Rate = Cost of Fund + Operating Expense Ratio + CRR Maintenance Cost + Return on Net Worth</b>
</blockquote>

<p><b>Interest Rate Spread Caps (NRB Directive):</b></p>
<table>
<tr><th>Loan Type</th><th>Maximum Spread</th></tr>
<tr><td>Loans ≤ NPR 10 Million</td><td>2%</td></tr>
<tr><td>General Loans</td><td>~4-4.5%</td></tr>
<tr><td>Deprived Sector Loans</td><td>Below base rate (subsidized)</td></tr>
</table>

<p><b>Key Issues:</b></p>
<ul>
<li><b>Downward Rigidity:</b> Banks are slow to cut lending rates even when deposit rates fall — NRB periodically pushes for rate cuts</li>
<li><b>Transmission Weakness:</b> NRB policy rate changes take 3-6 months to fully transmit to lending rates</li>
<li><b>CASA Advantage:</b> Banks with high CASA (low-cost deposits) have lower base rates and competitive advantage</li>
</ul>`,

                    calculations: `<p><b>Base Rate Example:</b></p>
<blockquote>
<b>Q:</b> Bank A has: Cost of Fund = 7.5%, Operating Expense = 1.8%, CRR Cost = 0.2%, Return target = 1.0%. Calculate Base Rate and lending rate for a NPR 5M loan.<br><br>
<b>Base Rate</b> = 7.5 + 1.8 + 0.2 + 1.0 = <span class="ka-important">10.5%</span><br>
<b>Lending Rate</b> = 10.5 + 2.0 (max spread for ≤10M) = <span class="ka-important">12.5%</span>
</blockquote>`,

                    nblStrategy: `<ul>
<li><b>CASA Drive:</b> Increase Current and Savings Account ratio to reduce cost of funds — directly lowers base rate, enabling competitive lending</li>
<li><b>Interest Rate Risk Management:</b> Build sophisticated models to forecast interest rate movements and adjust pricing proactively</li>
<li><b>Digital Deposits:</b> Offer attractive digital savings products (higher rates on app-only deposits) to attract low-cost sticky deposits</li>
</ul>`
                }
            }
        ]
    },

    "I.B.2.1": {
        subtopic: "Bank Marketing: Products, Instruments & Customer Segmentation",
        units: [
            {
                title: "Banking Product Strategy & Market Segmentation",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Bank Marketing</span> applies marketing principles to financial services — understanding customer needs, developing appropriate products, and delivering them through effective channels. Nepal's banking sector has evolved from product-centric to <b>customer-centric</b> marketing.</p>`,

                    coreContent: `<p><b>Banking Products Portfolio:</b></p>
<table>
<tr><th>Category</th><th>Products</th></tr>
<tr><td><b>Deposit Products</b></td><td>Savings, Current, Fixed Deposit, Recurring, Call Deposit</td></tr>
<tr><td><b>Credit Products</b></td><td>Term Loan, Overdraft, Working Capital, Home Loan, Auto Loan, Education Loan</td></tr>
<tr><td><b>Trade Finance</b></td><td>Letter of Credit (LC), Bank Guarantee (BG), Documentary Collection</td></tr>
<tr><td><b>Digital Products</b></td><td>Mobile Banking, Internet Banking, QR Payments, Card Services</td></tr>
<tr><td><b>Treasury Products</b></td><td>Forex, Government Securities, Interbank Lending</td></tr>
<tr><td><b>Agency Services</b></td><td>Remittance, Utility Payments, Tax Collection, Pension Disbursement</td></tr>
</table>

<p><b>Customer Segmentation:</b></p>
<ul>
<li><b>Retail:</b> Individual customers — savings, personal loans, cards, remittance</li>
<li><b>SME:</b> Small and medium enterprises — working capital, trade finance</li>
<li><b>Corporate:</b> Large companies — consortium lending, project finance, treasury services</li>
<li><b>Government:</b> Federal/provincial/local — revenue collection, salary disbursement</li>
<li><b>Agricultural:</b> Farmers, cooperatives — crop loans, agri-finance (15% mandate)</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Digital-First Marketing:</b> Social media marketing, app-based product promotion, digital on-boarding</li>
<li><b>Segment-Specific Products:</b> Tailored products for each segment — youth savings, women's credit, diaspora services</li>
<li><b>Brand Refresh:</b> Modernize NBL brand while retaining heritage trust — "87 Years of Trust, Now Digital"</li>
</ul>`
                }
            }
        ]
    },

    "I.B.2.2": {
        subtopic: "Marketing Strategy & Customer Relationship Management (CRM)",
        units: [
            {
                title: "Strategic Marketing & CRM in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">CRM (Customer Relationship Management)</span> in banking is the strategy and technology for managing all customer interactions throughout the lifecycle — from acquisition to retention. In competitive Nepali banking, <b>customer retention is 5-7x cheaper</b> than acquisition.</p>`,

                    coreContent: `<p><b>Marketing Mix (7 P's of Services Marketing):</b></p>
<ol>
<li><b>Product:</b> Deposit, credit, digital services — tailored to segment</li>
<li><b>Price:</b> Interest rates, fees, charges — regulated by NRB base rate/spread</li>
<li><b>Place:</b> Branches, ATMs, mobile apps, agent banking — multi-channel delivery</li>
<li><b>Promotion:</b> Advertising, relationship marketing, referral programs</li>
<li><b>People:</b> Trained staff, relationship managers — service quality driver</li>
<li><b>Process:</b> Account opening, loan processing, complaint resolution — efficiency matters</li>
<li><b>Physical Evidence:</b> Branch ambience, app UI/UX, brand materials</li>
</ol>

<p><b>CRM Components:</b></p>
<ul>
<li><b>Operational CRM:</b> Automation of customer-facing processes (sales, service)</li>
<li><b>Analytical CRM:</b> Data mining, customer profitability analysis, cross-sell scoring</li>
<li><b>Collaborative CRM:</b> Multi-channel integration — branch + mobile + call center consistency</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>CRM System:</b> Implement enterprise CRM to track customer interactions, cross-sell opportunities, and complaint resolution across all channels</li>
<li><b>Relationship Banking:</b> Assign dedicated relationship managers for high-value customers — reduce attrition</li>
<li><b>Data Analytics:</b> Use customer data to predict needs — proactive product offers based on lifecycle stage, transaction patterns</li>
</ul>`
                }
            }
        ]
    },

    "I.B.2.3": {
        subtopic: "Foreign Exchange Management: Policy, Practice & Regulation",
        units: [
            {
                title: "Forex Management in Nepal's Banking System",
                knowledgeAreas: {
                    foundation: `<p>Nepal operates a <span class="ka-highlight">fixed exchange rate regime</span> with the Indian Rupee (NPR 160 = INR 100) and a <b>managed float</b> against other currencies (USD, EUR, GBP, etc.). Foreign exchange management is governed by the <b>Foreign Exchange (Regulation) Act, 2019 BS</b> and NRB circulars.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Fixed Peg</b></td><td>NPR 160 = INR 100 — maintained since 1993; NRB manages through reserves</td></tr>
<tr><td><b>Buying/Selling Rate</b></td><td>NRB publishes daily exchange rates — banks operate within prescribed margins</td></tr>
<tr><td><b>Open Position</b></td><td>Difference between forex assets and liabilities — NRB limits to manage risk</td></tr>
<tr><td><b>Nostro Account</b></td><td>Bank's account with foreign correspondent bank (in foreign currency)</td></tr>
<tr><td><b>Vostro Account</b></td><td>Foreign bank's account with domestic bank (in domestic currency)</td></tr>
<tr><td><b>SWIFT</b></td><td>Society for Worldwide Interbank Financial Telecommunication — global messaging system</td></tr>
</table>`,

                    coreContent: `<p><b>Nepal's Exchange Rate System:</b></p>
<ul>
<li><b>INR Peg:</b> Fixed at 160:100 — all INR transactions at this rate</li>
<li><b>Other Currencies:</b> NRB calculates cross-rates based on INR/USD and USD/other rates</li>
<li><b>Bank Margin:</b> Banks can charge margin above NRB rates (within limits) for retail forex</li>
</ul>

<p><b>NRB Forex Regulations:</b></p>
<ul>
<li><b>Foreign Currency Account:</b> Only permitted for specific purposes (export earnings, FDI, diplomatic)</li>
<li><b>Travel Forex:</b> USD 2,500 equivalent per trip for individuals</li>
<li><b>Import Payment:</b> Through banking channel mandatory for >NPR 1 million</li>
<li><b>Remittance:</b> Must be received through formal banking/money transfer channels</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Treasury Dealing Room:</b> Modernize forex dealing capabilities — real-time pricing, hedging products</li>
<li><b>Remittance Corridors:</b> Strengthen ties with key remittance-source countries (Malaysia, Gulf, Korea)</li>
<li><b>Correspondent Banking:</b> Maintain relationships with major international banks for efficient forex processing</li>
</ul>`
                }
            }
        ]
    },

    "I.B.2.4": {
        subtopic: "Money Supply: Definition, Determinants & Money Multiplier",
        units: [
            {
                title: "Money Supply Framework & Banking System's Role",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Money supply</span> is the total stock of money circulating in an economy at a given time. In Nepal, NRB measures money supply as <b>M1 (Narrow Money)</b> and <b>M2 (Broad Money)</b>. The banking system plays a critical role in money creation through the <span class="ka-term">money multiplier process</span>.</p>`,

                    definitions: `<table>
<tr><th>Measure</th><th>Components</th><th>Nepal (FY 2081/82 est.)</th></tr>
<tr><td><b>M0 (Reserve Money)</b></td><td>Currency in Circulation + Bank Reserves at NRB</td><td>~NPR 900B</td></tr>
<tr><td><b>M1 (Narrow Money)</b></td><td>Currency in Public + Demand Deposits</td><td>~NPR 900B</td></tr>
<tr><td><b>M2 (Broad Money)</b></td><td>M1 + Time Deposits + Savings Deposits</td><td>~NPR 5,800B</td></tr>
</table>`,

                    coreContent: `<p><b>Money Creation Process:</b></p>
<blockquote>
Initial Deposit → Bank keeps CRR (3%) → Lends remainder → Borrower deposits in another bank → Cycle repeats<br>
<b>Money Multiplier = 1/CRR = 1/0.03 = 33.33 (theoretical maximum)</b><br>
<b>Actual M2/M0 ratio in Nepal ≈ 6-7</b> (much lower than theoretical due to currency drain and excess reserves)
</blockquote>

<p><b>Determinants of Money Supply:</b></p>
<ul>
<li><b>NRB Actions:</b> OMO (buy/sell govt securities), CRR/SLR changes, repo/reverse repo</li>
<li><b>Government Fiscal Operations:</b> Budget deficit financed by NRB → money supply increases</li>
<li><b>BOP Position:</b> Trade surplus/remittance inflows → forex purchases → money supply increases</li>
<li><b>Credit Demand:</b> Bank lending creates deposits (loans make deposits) → money supply expands</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Credit Growth Management:</b> Align lending growth with NRB's M2/credit growth targets to avoid regulatory sanctions</li>
<li><b>Deposit Mobilization:</b> NBL's deposit growth directly contributes to money supply — balance growth with stability</li>
</ul>`
                }
            }
        ]
    },

    "I.B.2.5": {
        subtopic: "Inflation: Concepts, Measurement & Unemployment Relationship",
        units: [
            {
                title: "Inflation Dynamics & Phillips Curve Application",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Inflation</span> is the sustained increase in the general price level of goods and services. Nepal's inflation is heavily influenced by <b>Indian inflation</b> (due to the INR peg and 65% trade with India), <b>domestic supply constraints,</b> and <b>remittance-driven demand</b>.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>CPI (Consumer Price Index)</b></td><td>Primary inflation measure — basket of goods/services weighted by consumption patterns</td></tr>
<tr><td><b>WPI (Wholesale Price Index)</b></td><td>Measures price changes at wholesale/producer level</td></tr>
<tr><td><b>Headline Inflation</b></td><td>Total CPI inflation including food and energy</td></tr>
<tr><td><b>Core Inflation</b></td><td>CPI excluding volatile food and energy — measures underlying price pressure</td></tr>
<tr><td><b>Phillips Curve</b></td><td>Inverse relationship between inflation and unemployment — trade-off</td></tr>
<tr><td><b>Stagflation</b></td><td>High inflation + high unemployment + low growth — worst scenario</td></tr>
</table>`,

                    coreContent: `<p><b>Causes of Inflation in Nepal:</b></p>
<ul>
<li><b>Imported Inflation:</b> India's inflation transmits through trade and currency peg (~50-60% pass-through)</li>
<li><b>Demand-Pull:</b> Remittance-funded consumption increases aggregate demand without matching supply increase</li>
<li><b>Cost-Push:</b> Rising petroleum prices, transportation costs, wage increases</li>
<li><b>Structural:</b> Supply-side bottlenecks — poor infrastructure, agricultural dependence on monsoon</li>
</ul>

<p><b>NRB Inflation Target:</b> ~7% (ceiling). Monetary policy set to ensure CPI remains within this band.</p>

<p><b>Nepal's Inflation Data:</b></p>
<table>
<tr><th>Period</th><th>Average CPI Inflation</th></tr>
<tr><td>FY 2078/79</td><td>~6.3%</td></tr>
<tr><td>FY 2079/80</td><td>~7.7%</td></tr>
<tr><td>FY 2080/81</td><td>~5.5%</td></tr>
</table>

<p><b>Banking Implications:</b></p>
<ul>
<li><b>Real Interest Rate:</b> Nominal rate − inflation = real return. If inflation > deposit rate → negative real returns → depositors lose purchasing power</li>
<li><b>Loan Pricing:</b> Inflation erodes loan value — benefits borrowers at expense of lenders. Banks must price inflation risk into spreads</li>
<li><b>Asset Quality:</b> High inflation can initially mask asset quality problems (inflated collateral values) but eventually increases default risk</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Inflation-Indexed Products:</b> Consider developing inflation-protected deposit products for long-term savers</li>
<li><b>Real Rate Monitoring:</b> ALCO should track real interest rates (nominal minus inflation) to ensure deposits remain attractive</li>
<li><b>Collateral Revaluation:</b> Regular revaluation of collateral in inflationary periods to maintain adequate coverage</li>
</ul>`
                }
            }
        ]
    },

    "I.B.3.1": {
        subtopic: "Banking Risks & Risk Management",
        units: [
            {
                title: "Comprehensive Risk Framework in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Risk</span> in banking is the potential for loss arising from uncertainty. Because banks operate on leverage (using mostly depositors' money to lend/invest), risk management is their core function. NRB mandates an <b>Enterprise Risk Management (ERM)</b> approach under its Risk Management Guidelines (2018).</p>`,

                    definitions: `<table>
<tr><th>Risk Type</th><th>Definition</th></tr>
<tr><td><b>Credit Risk</b></td><td>Risk of borrower default on loan obligations (biggest risk for Nepali banks)</td></tr>
<tr><td><b>Market Risk</b></td><td>Risk of loss from changes in interest rates, exchange rates, or equity prices</td></tr>
<tr><td><b>Liquidity Risk</b></td><td>Inability to meet short-term obligations without incurring unacceptable losses</td></tr>
<tr><td><b>Operational Risk</b></td><td>Loss from failed internal processes, people, systems, or external events</td></tr>
<tr><td><b>Reputational Risk</b></td><td>Loss of trust leading to deposit flight or lost business</td></tr>
<tr><td><b>Compliance Risk</b></td><td>Legal penalties or financial loss from failure to comply with laws/regulations</td></tr>
</table>`,

                    coreContent: `<p><b>Risk Management Process:</b></p>
<ol>
<li><b>Identification:</b> Recognizing risks in products, services, and operations</li>
<li><b>Measurement:</b> Quantifying risk (e.g., Value at Risk, NPL ratio, Liquidity gaps)</li>
<li><b>Mitigation:</b> Taking actions to reduce risk (collateral, limits, hedging, controls)</li>
<li><b>Monitoring:</b> Continuous tracking of risk metrics against risk appetite</li>
<li><b>Reporting:</b> Regular updates to Management and Board (Risk Management Committee)</li>
</ol>

<p><b>NRB Regulatory Framework for Risk:</b></p>
<ul>
<li><b>Capital Adequacy (Basel III):</b> Buffer against unexpected losses (11% min CAR)</li>
<li><b>Single Obligor Limit (SOL):</b> Prevents concentration of credit risk</li>
<li><b>LCR & NSFR:</b> Mandated minimums to prevent liquidity risk</li>
<li><b>Stress Testing:</b> Banks must perform quarterly stress tests to simulate crisis scenarios</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Three Lines of Defense:</b> 1st (Business Units), 2nd (Risk Management Department), 3rd (Internal Audit)</li>
<li><b>Credit Risk Mitigation:</b> Stringent appraisal, robust collateral valuation, diversification across sectors</li>
<li><b>Operational Risk Controls:</b> Maker-checker systems, regular IT security audits, employee training</li>
</ul>`
                }
            }
        ]
    },

    "I.B.3.2": {
        subtopic: "Merger & Acquisition: Concept & Synergies",
        units: [
            {
                title: "M&A Dynamics in the Banking Sector",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Mergers and Acquisitions (M&A)</span> involve the consolidation of companies. A <b>Merger</b> is the combination of two equals forming a new entity, while an <b>Acquisition</b> is one entity absorbing another. In Nepal's banking sector, M&A was primarily driven by <b>NRB policy</b> rather than market forces.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Horizontal Merger</b></td><td>Merging with a direct competitor (e.g., Global IME + Bank of Kathmandu)</td></tr>
<tr><td><b>Vertical Merger</b></td><td>Merging along the supply chain (rare in banking)</td></tr>
<tr><td><b>Synergy</b></td><td>1+1 = 3; combined value is greater than the sum of separate parts</td></tr>
<tr><td><b>Due Diligence (DDA)</b></td><td>Comprehensive appraisal of target's assets, liabilities, and risks before merger</td></tr>
<tr><td><b>Swap Ratio</b></td><td>Exchange rate of shares between merging entities (e.g., 100:85)</td></tr>
</table>`,

                    coreContent: `<p><b>Types of Synergies:</b></p>
<ul>
<li><b>Cost Synergies:</b> Closing overlapping branches, reducing redundant staff, shared IT costs</li>
<li><b>Revenue Synergies:</b> Cross-selling to a larger customer base, enhanced lending capacity (higher SOL)</li>
<li><b>Financial Synergies:</b> Lower cost of capital, improved credit rating</li>
</ul>

<p><b>NRB's Merger Policy Drivers (2015-2023):</b></p>
<ul>
<li><b>Capital Base:</b> Raised paid-up capital requirement from NPR 2B to 8B to force consolidation</li>
<li><b>Systemic Stability:</b> Reduce the number of small, weak institutions (from >200 BFIs to <60)</li>
<li><b>Regulatory Oversight:</b> Easier for NRB to supervise 20 strong commercial banks than 32 weaker ones</li>
<li><b>Economies of Scale:</b> Create larger banks capable of financing mega infrastructure projects</li>
</ul>`,

                    prosAndCons: `<p><b class="ka-success">✅ Advantages of M&A:</b></p>
<ul>
<li>Increased capital base allows financing of larger projects</li>
<li>Wider branch network and customer reach</li>
<li>Economies of scale leading to lower operational costs</li>
<li>Technology upgrades spread over a larger revenue base</li>
</ul>
<p><b class="ka-important">❌ Disadvantages/Risks:</b></p>
<ul>
<li>Cultural clash between employees of merging entities</li>
<li>Integration costs (IT systems, rebranding)</li>
<li>Customer service disruption during transition</li>
<li>Oligopoly risk — reduced competition leading to higher interest rate spreads</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Strategic Posture:</b> As a government-owned bank, NBL did not participate in the forced merger wave, preserving its distinct identity and culture</li>
<li><b>Organic Growth Focus:</b> Achieve scale through customer acquisition and digital expansion rather than risky M&A</li>
</ul>`
                }
            }
        ]
    },

    "I.B.3.3": {
        subtopic: "Causes of Bank Failure in M&A Context",
        units: [
            {
                title: "M&A Failures & Integration Challenges",
                knowledgeAreas: {
                    foundation: `<p>While M&A promises synergies, studies show a high failure rate. In banking, <span class="ka-highlight">failure</span> doesn't necessarily mean bankruptcy; it means <b>failure to achieve projected synergies, loss of market share, or severe internal disruption</b> following the merger.</p>`,

                    coreContent: `<p><b>Key Causes of M&A Failure in Banking:</b></p>
<ol>
<li><b>Cultural Incompatibility:</b> The most common cause. Differences in work culture, risk appetite, and management styles lead to employee dissatisfaction and high turnover (e.g., talent drain post-merger)</li>
<li><b>Flawed Due Diligence (DDA):</b> Underestimating bad loans (NPLs) of the acquired bank. Hidden liabilities surface post-merger</li>
<li><b>IT Integration Failures:</b> Merging different Core Banking Systems (CBS) is complex. Data migration errors lead to customer dissatisfaction</li>
<li><b>Overvaluation:</b> Paying too much for the target (bad swap ratio), destroying shareholder value</li>
<li><b>Loss of Customer Focus:</b> Management becomes internally focused on integration, neglecting customer service and losing market share</li>
<li><b>HR Issues:</b> Conflicts over seniority, branch manager appointments, and salary harmonization</li>
</ol>

<p><b>Nepal's Experience with Mergers:</b></p>
<ul>
<li><b>Successes:</b> Significant reduction in BFI numbers, creation of large "mega banks" capable of big ticket lending</li>
<li><b>Challenges:</b> High staff turnover in merged entities, delayed IT integration, cultural friction (especially when merging institutions of different classes or backgrounds)</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Learn from Competitor Mistakes:</b> While competitors are distracted by internal integration challenges post-merger, NBL should aggressively capture market share</li>
<li><b>Talent Acquisition:</b> Attract high-performing staff who are dissatisfied with the cultural changes in their merged banks</li>
</ul>`
                }
            }
        ]
    },

    "I.B.4.1": {
        subtopic: "Money Laundering & Terrorist Financing Concepts",
        units: [
            {
                title: "AML/CFT Framework: Concepts and Processes",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Money Laundering (ML)</span> is the process of making illegally-gained proceeds (dirty money) appear legal (clean). <span class="ka-highlight">Combating the Financing of Terrorism (CFT)</span> involves preventing funds from reaching terrorist organizations. Banks are the primary gatekeepers in the AML/CFT regime.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>FATF</b></td><td>Financial Action Task Force — global standard-setting body for AML/CFT</td></tr>
<tr><td><b>Predicate Offense</b></td><td>The underlying criminal activity that generated the dirty money (e.g., corruption, drug trafficking)</td></tr>
<tr><td><b>KYC/CDD</b></td><td>Know Your Customer / Customer Due Diligence — verifying identity and assessing risk</td></tr>
<tr><td><b>EDD</b></td><td>Enhanced Due Diligence — stricter scrutiny for high-risk customers</td></tr>
<tr><td><b>PEP</b></td><td>Politically Exposed Person — high-risk customer due to political influence</td></tr>
<tr><td><b>Beneficial Owner</b></td><td>The natural person who ultimately owns or controls a legal entity</td></tr>
</table>`,

                    flowchart: `<div class="ka-flowchart">
<div style="margin-bottom:8px;font-weight:800;color:var(--accent);">The 3 Stages of Money Laundering</div>
<div class="fc-box">1. Placement</div> <span class="fc-arrow">→</span>
<div class="fc-box">Introducing dirty money into the financial system (e.g., cash deposits, smurfing)</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">2. Layering</div> <span class="fc-arrow">→</span>
<div class="fc-box">Creating complex transaction trails to obscure the origin (wire transfers, shell companies)</div><br>
<span class="fc-arrow">→</span> <div class="fc-box">3. Integration</div> <span class="fc-arrow">→</span>
<div class="fc-box">Returning the clean money to the launderer as legitimate wealth (real estate, luxury assets)</div>
</div>`,

                    coreContent: `<p><b>Impact of Money Laundering on Nepal:</b></p>
<ul>
<li><b>Economic:</b> Distorts asset prices (real estate bubbles), reduces tax revenue, encourages capital flight</li>
<li><b>Social/Political:</b> Empowers criminals, increases corruption, weakens democratic institutions</li>
<li><b>International:</b> Risk of FATF "Grey Listing" — restricts access to global financial system, increases cost of correspondent banking, reduces FDI</li>
</ul>

<p><b>Bank's Vulnerability:</b></p>
<ul>
<li>Banks are used extensively in the <b>Placement</b> and <b>Layering</b> stages</li>
<li>Digital banking, cross-border remittances, and trade finance (Trade-Based Money Laundering - TBML) are high-risk areas</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Zero Tolerance Culture:</b> AML/CFT compliance must be non-negotiable from the Board level down to tellers</li>
<li><b>Technology Utilization:</b> Deploy AI-driven transaction monitoring systems to detect suspicious patterns beyond rule-based alerts</li>
<li><b>Continuous Training:</b> Mandatory, updated AML training for all staff to recognize new typologies</li>
</ul>`
                }
            }
        ]
    },

    "I.B.4.2": {
        subtopic: "TTR and STR Identification",
        units: [
            {
                title: "Transaction Reporting: TTR and STR Mechanics",
                knowledgeAreas: {
                    foundation: `<p>Reporting is the core operational requirement of AML/CFT compliance. Banks must report specific transactions to the <b>Financial Information Unit (FIU)</b> at NRB. There are two main types of reports: <span class="ka-highlight">Threshold Transaction Report (TTR)</span> and <span class="ka-highlight">Suspicious Transaction Report (STR)</span>.</p>`,

                    definitions: `<table>
<tr><th>Report Type</th><th>Criteria</th><th>Timeframe</th></tr>
<tr><td><b>TTR (Threshold Transaction Report)</b></td><td>Any single or linked cash transaction exceeding NPR 1 Million (10 Lakhs) in a day</td><td>Within 15 days of the transaction</td></tr>
<tr><td><b>STR/SAR (Suspicious Transaction/Activity Report)</b></td><td>Transactions with no apparent economic/lawful purpose, or suspected link to ML/TF, regardless of amount</td><td>Within 3 days of forming suspicion (or immediately for TF)</td></tr>
</table>`,

                    coreContent: `<p><b>TTR Requirements:</b></p>
<ul>
<li>Objective and automated (rule-based)</li>
<li>Applies to cash deposits, cash withdrawals, and bearer instrument exchanges</li>
<li>Linked transactions: Multiple deposits of NPR 3 Lakhs on the same day totaling >10 Lakhs must be reported</li>
</ul>

<p><b>Identifying Suspicious Transactions (STR Indicators/Red Flags):</b></p>
<ul>
<li><b>Customer Behavior:</b> Reluctant to provide info, nervous, uses fake IDs, asks about reporting limits</li>
<li><b>Transaction Patterns:</b> "Smurfing" (multiple deposits just below 10 Lakhs), sudden spike in activity in a dormant account</li>
<li><b>Economic Rationale:</b> Transactions inconsistent with the customer's known business/income (e.g., a student receiving huge international wire transfers)</li>
<li><b>Geographic Risk:</b> Frequent transfers to/from high-risk jurisdictions or tax havens</li>
</ul>

<p><b>The "Tipping Off" Offense:</b></p>
<ul>
<li>It is a <span class="ka-important">criminal offense</span> for any bank employee to inform the customer that an STR has been filed or that they are under investigation.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Automated TTR/STR:</b> Implement robust goAML-compatible software for automated extraction and filing of TTRs</li>
<li><b>Staff Vigilance:</b> Train frontline staff (tellers, CSD) on behavioral red flags, as they are the first line of defense in STR generation</li>
</ul>`
                }
            }
        ]
    },

    "I.B.4.3": {
        subtopic: "ALPA 2064 & FIU Directives",
        units: [
            {
                title: "Legal & Regulatory Framework for AML in Nepal",
                knowledgeAreas: {
                    foundation: `<p>Nepal's primary AML legislation is the <span class="ka-highlight">Asset (Money) Laundering Prevention Act, 2064 (2008) (ALPA)</span>. The <b>Financial Information Unit (FIU-Nepal)</b>, established within NRB under this Act, is the central national agency responsible for receiving, processing, and analyzing financial information.</p>`,

                    coreContent: `<p><b>Key Provisions of ALPA 2064:</b></p>
<ul>
<li><b>Criminalization:</b> Defines money laundering and terrorist financing as criminal offenses</li>
<li><b>CDD Obligations:</b> Mandates reporting entities (banks) to conduct Customer Due Diligence (KYC)</li>
<li><b>Beneficial Ownership:</b> Requires identification of the ultimate natural person benefiting from the account</li>
<li><b>Record Keeping:</b> Mandates maintaining transaction and identity records for at least <b>5 years</b> after account closure or transaction completion</li>
<li><b>Reporting:</b> Establishes the legal requirement for TTR and STR filing</li>
<li><b>Penalties:</b> Severe fines and imprisonment for ML offenders; sanctions (fines up to NPR 50M) for non-compliant banks and officials</li>
</ul>

<p><b>Role of FIU-Nepal:</b></p>
<ul>
<li>Receives TTRs and STRs from reporting entities via the <b>goAML</b> system</li>
<li>Analyzes the reports to identify ML/TF networks</li>
<li>Disseminates intelligence to law enforcement agencies (e.g., Department of Money Laundering Investigation - DMLI, CIB) for investigation</li>
<li>Issues guidelines and typologies to reporting entities</li>
</ul>

<p><b>NRB Unified Directives (Directive 19 - AML/CFT):</b></p>
<ul>
<li>Requires banks to adopt a <b>Risk-Based Approach (RBA)</b>: classify customers as High, Medium, or Low risk</li>
<li>Mandates Enhanced Due Diligence (EDD) for PEPs and high-risk customers</li>
<li>Requires appointment of a dedicated AML/CFT Compliance Officer at the management level</li>
</ul>`,

                    legalFramework: `<ul>
<li><b>ALPA, 2064 (2008):</b> The foundational Act</li>
<li><b>ALPR, 2073 (2016):</b> Asset Laundering Prevention Rules</li>
<li><b>NRB Directive 19:</b> Specific AML/CFT instructions for BFIs</li>
<li><b>Prevention of Corruption Act, 2059:</b> Predicate offense legislation</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Compliance as a Shield:</b> View strict adherence to ALPA 2064 and Directive 19 not just as regulatory burden, but as protection against reputational destruction</li>
<li><b>Board Oversight:</b> Ensure the Risk Management Committee of the Board receives comprehensive AML compliance reports</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.1": {
        subtopic: "Constitution of Nepal (Economic Objective & NRB Provision)",
        units: [
            {
                title: "Constitutional Framework for Nepal's Economy",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Constitution of Nepal (2072)</span> is the fundamental law of the land. Its economic provisions aim to create a socialism-oriented, independent, and prosperous economy. <b>Part 4 (Directive Principles, Policies, and Responsibilities of the State)</b> and <b>Part 32 (Miscellaneous - NRB)</b> are highly relevant for banking exams.</p>`,

                    coreContent: `<p><b>Economic Objective (Article 50(3)):</b></p>
<ul>
<li>To achieve rapid economic growth through participation and independent development of public, private, and cooperative sectors (<b>Three-pillar economic policy</b>)</li>
<li>To achieve equitable distribution of economic gains based on social justice</li>
<li>To build an exploitation-free society by eliminating economic inequalities</li>
<li>To make the national economy independent, self-reliant, and progressive toward socialism</li>
</ul>

<p><b>State Policies relating to Economy, Industry, and Commerce (Article 51(d)):</b></p>
<ul>
<li>Strengthen national economy with participation of public, cooperative, and private sectors</li>
<li>Protect consumer rights by maintaining quality and controlling black marketing, monopoly, and artificial shortages</li>
<li>Promote domestic investment based on national interest</li>
<li>Prioritize domestic investment over foreign investment</li>
<li>Encourage foreign capital and technology investment in areas of import substitution and export promotion</li>
</ul>

<p><b>Provisions regarding Nepal Rastra Bank (Article 273):</b></p>
<ul>
<li>There shall be a Nepal Rastra Bank in Nepal.</li>
<li>The establishment, objectives, functions, duties, and powers of Nepal Rastra Bank shall be as provided for in the Federal law (i.e., NRB Act 2058).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Alignment with Constitutional Goals:</b> NBL, being a state-owned enterprise, must align its core operations with the constitutional mandate of an equitable, socialism-oriented economy by prioritizing lending in marginalized sectors and supporting cooperatives.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.2": {
        subtopic: "Nepal Rastra Bank Act, 2058",
        units: [
            {
                title: "NRB Act 2058: Central Bank Autonomy & Functions",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Nepal Rastra Bank Act, 2058 (2002)</span> established NRB as an autonomous corporate body. This Act is the cornerstone of Nepal's financial sector stability, granting NRB the authority to formulate monetary policy, regulate BFIs, and manage foreign exchange.</p>`,

                    coreContent: `<p><b>Objectives of NRB (Section 4):</b></p>
<ol>
<li>To formulate and manage monetary and foreign exchange policies to maintain <b>price stability</b> and <b>balance of payment stability</b> for sustainable economic development.</li>
<li>To promote stability and liquidity required in the banking and financial sector.</li>
<li>To develop a secure, healthy, and efficient system of payment.</li>
<li>To regulate, inspect, supervise, and monitor the banking and financial system.</li>
<li>To promote the entire financial system of Nepal and enhance its public credibility.</li>
</ol>

<p><b>Functions, Duties, and Powers (Section 5):</b></p>
<ul>
<li>Issue bank notes and coins.</li>
<li>Formulate and implement monetary policy.</li>
<li>Formulate and implement foreign exchange policy.</li>
<li>Determine the system of foreign exchange rate.</li>
<li>Manage and operate foreign exchange reserves.</li>
<li>Issue licenses to commercial banks and financial institutions, and regulate, inspect, and supervise them.</li>
<li>Act as a banker, advisor, and financial agent of the Government of Nepal.</li>
<li>Act as the banker of commercial banks and financial institutions (Lender of Last Resort).</li>
<li>Establish and promote the payment, clearing, and settlement system.</li>
</ul>

<p><b>Board of Directors (Section 14):</b></p>
<ul>
<li>Comprises 7 members: Governor (Chairperson), Secretary of Ministry of Finance, two Deputy Governors, and three expert Directors appointed by the Government of Nepal.</li>
<li>The Governor is appointed by the Government on the recommendation of a three-member committee (Chaired by the Finance Minister).</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Direct Impact:</b> Every action of a commercial bank—from the interest it charges to the reserves it holds—is governed by rules originating from the NRB Act.</li>
<li><b>Regulatory Reporting:</b> Banks must submit extensive periodic reports to NRB as mandated by the Act to ensure systemic stability.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.3": {
        subtopic: "Bank and Financial Institution Act (BAFIA), 2073",
        units: [
            {
                title: "BAFIA 2073: Incorporation, Licensing & Operations",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Bank and Financial Institution Act (BAFIA), 2073 (2017)</span> is the umbrella legislation regulating the incorporation, operation, management, and liquidation of all banks and financial institutions (BFIs) in Nepal. It replaced the earlier BAFIA 2063.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Promoter</b></td><td>A person who signs the Memorandum of Association and Articles of Association to incorporate a BFI</td></tr>
<tr><td><b>Independent Director</b></td><td>A director appointed from among experts, not representing any promoter group</td></tr>
<tr><td><b>Significant Ownership</b></td><td>Holding 2% or more of the paid-up capital of a BFI</td></tr>
</table>`,

                    coreContent: `<p><b>Key Provisions of BAFIA 2073:</b></p>
<ol>
<li><b>Incorporation (Chapter 2):</b> All BFIs must be incorporated as Public Limited Companies under the Companies Act. NRB prior approval is mandatory before registering at the Company Registrar's Office.</li>
<li><b>Classification (Section 33):</b> BFIs are classified into 'A' (Commercial Banks), 'B' (Development Banks), 'C' (Finance Companies), and 'D' (Microfinance Institutions) based on minimum paid-up capital, business nature, and working area.</li>
<li><b>Board of Directors (Chapter 4):</b>
    <ul>
        <li>Board size: 5 to 7 members.</li>
        <li>Must include at least one Independent Director.</li>
        <li>Term of Director: 4 years, eligible for reappointment (Independent Director for one term only).</li>
        <li>CEO cannot be a Director.</li>
        <li>Strict qualification and disqualification criteria for Directors (e.g., cannot be a loan defaulter, bankrupt, or convicted of a criminal offense).</li>
    </ul>
</li>
<li><b>Capital Structure:</b> Promoters must hold at least 51% shares, and the general public at least 30%. (Promoter shares cannot be converted to public shares before 10 years).</li>
<li><b>Functions (Chapter 7):</b> Clearly delineates the permitted activities (and prohibited activities) for A, B, C, and D class institutions.</li>
</ol>

<p><b>Prohibited Activities (Section 50):</b></p>
<ul>
<li>Purchasing/selling goods for trading purposes.</li>
<li>Constructing buildings/purchasing real estate not required for bank's own use.</li>
<li>Lending against its own shares.</li>
<li>Lending to its directors, promoters holding >1% shares, CEO, or their family members.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Corporate Governance:</b> Strict adherence to BAFIA provisions regarding Board composition, connected lending, and disclosure requirements is critical for maintaining NBL's institutional integrity.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.4": {
        subtopic: "Banking Offense and Punishment Act, 2064",
        units: [
            {
                title: "BOPA 2064: Criminalizing Financial Malpractice",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Banking Offense and Punishment Act (BOPA), 2064 (2008)</span> was enacted to promote trust in the banking system by explicitly defining banking offenses and prescribing severe penalties. Prior to this, banking frauds were prosecuted under general fraud laws which were often inadequate.</p>`,

                    coreContent: `<p><b>Major Banking Offenses (Chapter 2):</b></p>
<ol>
<li><b>Cheque Bounce (Section 3):</b> Drawing a cheque knowingly that there are insufficient funds in the account. (One of the most common offenses).</li>
<li><b>Unauthorized Account Operations (Section 2):</b> Opening accounts using false documents, operating fictitious accounts.</li>
<li><b>Unauthorized Credit Facility (Section 7):</b>
    <ul>
        <li>Obtaining credit by submitting false financial statements or overvalued collateral.</li>
        <li>Misusing credit for purposes other than what was approved (Diversion of funds).</li>
    </ul>
</li>
<li><b>Electronic Fraud (Section 6):</b> Unauthorized withdrawal or transfer using ATM, credit card, internet banking, or hacking banking systems.</li>
<li><b>Dhukuti and Hundi (Section 14A):</b> Conducting unauthorized financial transactions like Dhukuti (informal rotation of funds) and Hundi (illegal cross-border money transfer).</li>
<li><b>Embezzlement by Bank Staff (Section 12):</b> Misappropriation of bank funds by employees, CEO, or Directors.</li>
</ol>

<p><b>Punishments (Chapter 3):</b></p>
<ul>
<li><b>Cheque Bounce:</b> Fine up to the amount of the cheque and imprisonment up to 3 months.</li>
<li><b>Fraud/Embezzlement:</b>
    <ul>
        <li>Up to NPR 1 million: Imprisonment up to 1 year.</li>
        <li>NPR 1M to 5M: Imprisonment 1 to 2 years.</li>
        <li>NPR 5M to 10M: Imprisonment 2 to 3 years.</li>
        <li>NPR 10M to 50M: Imprisonment 3 to 4 years.</li>
        <li>Above NPR 50M: Imprisonment 4 to 5 years.</li>
    </ul>
</li>
<li><b>Aggravated Penalties:</b> If the offense is committed by a Chairman, Director, or CEO, an additional 1 year of imprisonment is added to the standard penalty.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Credit Appraisal:</b> Due to Section 7 (Unauthorized Credit), credit officers must rigorously verify the authenticity of financial statements and collateral valuation to avoid being complicit in a banking offense.</li>
<li><b>Fund Diversion:</b> Banks must actively monitor the end-use of loans to ensure borrowers do not divert funds, which is a criminal act under BOPA.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.5": {
        subtopic: "Negotiable Instruments Act, 2034",
        units: [
            {
                title: "Negotiable Instruments: Legal Framework & Processes",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Negotiable Instruments Act, 2034 (1977)</span> governs the issuance, transfer, and clearing of instruments that guarantee the payment of a specific amount of money. It provides the legal backing for non-cash payment systems in Nepal.</p>`,

                    definitions: `<table>
<tr><th>Instrument</th><th>Definition (as per the Act)</th></tr>
<tr><td><b>Promissory Note</b></td><td>An unconditional written undertaking signed by the maker, to pay a certain sum of money only to, or to the order of, a certain person, or to the bearer.</td></tr>
<tr><td><b>Bill of Exchange</b></td><td>An unconditional written order signed by the maker, directing a certain person to pay a certain sum of money.</td></tr>
<tr><td><b>Cheque</b></td><td>A bill of exchange drawn on a specified bank and not expressed to be payable otherwise than on demand.</td></tr>
<tr><td><b>Drawer</b></td><td>The person who makes the bill of exchange or cheque.</td></tr>
<tr><td><b>Drawee</b></td><td>The bank directed to pay the amount of the cheque.</td></tr>
<tr><td><b>Payee</b></td><td>The person named in the instrument to whom the payment is directed to be made.</td></tr>
</table>`,

                    coreContent: `<p><b>Characteristics of a Negotiable Instrument:</b></p>
<ul>
<li><b>Freely Transferable:</b> Can be transferred by delivery (bearer) or endorsement and delivery (order).</li>
<li><b>Title of Holder in Due Course:</b> The transferee taking it in good faith and for value gets a title free from defects of the transferor's title.</li>
<li><b>Presumptions:</b> It is presumed that every negotiable instrument was made/drawn for consideration (value).</li>
</ul>

<p><b>Dishonor of Cheque (Cheque Bounce):</b></p>
<ul>
<li>If a cheque is dishonored due to insufficient funds, the bank issues a dishonor slip.</li>
<li>The holder can take legal action under this Act (for recovery of the amount plus interest) or under the Banking Offense and Punishment Act (for criminal prosecution). Most prefer BOPA due to its stringent penalties.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Clearing Operations:</b> Banks must adhere strictly to the rules of endorsement and crossing (General Crossing, Special Crossing) defined in this Act when processing cheques through NCHL.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.6": {
        subtopic: "Foreign Exchange Regulation Act, 2019",
        units: [
            {
                title: "Forex Regulation: Controls and Compliance",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Foreign Exchange (Regulation) Act, 2019 (1962)</span> regulates foreign exchange transactions to maintain Nepal's foreign exchange reserves and ensure macroeconomic stability. It gives NRB the absolute authority to control forex inflows and outflows.</p>`,

                    coreContent: `<p><b>Key Regulatory Controls:</b></p>
<ol>
<li><b>License Requirement:</b> Only entities licensed by NRB (Commercial banks, money changers, remittance companies) can deal in foreign exchange.</li>
<li><b>Repatriation of Export Earnings:</b> Exporters must repatriate their forex earnings to Nepal within the time frame specified by NRB (usually 6 months).</li>
<li><b>Import Payments:</b> Forex is provided for imports only against valid Letters of Credit (LC) or approved documents, ensuring funds aren't misused for capital flight.</li>
<li><b>Capital Account Convertibility:</b> Nepal has <b>Full Current Account Convertibility</b> (forex freely available for trade and travel) but <b>Restricted Capital Account Convertibility</b> (forex not freely available for Nepalese to invest abroad in real estate or foreign stock markets).</li>
</ol>

<p><b>Offenses under the Act:</b></p>
<ul>
<li>Dealing in forex without a license (Hundi).</li>
<li>Failing to repatriate export earnings.</li>
<li>Over-invoicing imports or under-invoicing exports (Trade-Based Money Laundering).</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Gatekeeper Role:</b> Banks are responsible for ensuring that all forex released for imports, travel, or medical treatment strictly adheres to NRB limits and documentary requirements.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.7": {
        subtopic: "Company Act, 2063",
        units: [
            {
                title: "Company Act 2063: Corporate Governance & Structure",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Companies Act, 2063 (2006)</span> governs the incorporation, operation, and administration of companies in Nepal. Since BAFIA mandates all BFIs to be incorporated as <b>Public Limited Companies</b>, the Companies Act applies to banks in parallel with BAFIA.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Private Company</b></td><td>Limited to 101 shareholders, cannot sell shares to the public.</td></tr>
<tr><td><b>Public Company</b></td><td>Minimum 7 promoters, can sell shares to the public, must list on stock exchange if selling to public.</td></tr>
<tr><td><b>MoA (Memorandum of Association)</b></td><td>The constitution of the company defining its objectives and scope.</td></tr>
<tr><td><b>AoA (Articles of Association)</b></td><td>The internal rules and regulations governing the company's management.</td></tr>
<tr><td><b>AGM (Annual General Meeting)</b></td><td>Mandatory yearly meeting of shareholders to approve accounts, dividends, and appoint auditors.</td></tr>
</table>`,

                    coreContent: `<p><b>Key Provisions Relevant to Banks:</b></p>
<ul>
<li><b>Incorporation:</b> A public company must have the word "Limited" at the end of its name.</li>
<li><b>Board of Directors:</b> A public company must have between 3 to 11 directors (BAFIA restricts BFIs to 5-7). <i>Where BAFIA and Company Act conflict, BAFIA prevails for BFIs.</i></li>
<li><b>Auditor Appointment:</b> The AGM appoints the external statutory auditor. An auditor cannot be appointed for more than 3 consecutive terms.</li>
<li><b>Dividends:</b> Can only be declared out of profits after setting aside mandatory reserves, and must be approved by the AGM.</li>
<li><b>Meetings:</b> AGM must be held within 6 months of the end of the financial year.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Corporate Secretarial Function:</b> NBL must ensure strict compliance with the Companies Act regarding timely AGM filing, maintaining the Share Register, and filing returns to the Office of the Company Registrar (OCR).</li>
</ul>`
                }
            }
        ]
    },

    "I.B.5.8": {
        subtopic: "Labor Act, 2074 & Banking Sector Application",
        units: [
            {
                title: "Labor Act 2074: Employee Rights and HR Compliance",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Labor Act, 2074 (2017)</span> is a comprehensive law covering employment terms, working conditions, social security, and dispute resolution. It replaced the outdated Labor Act 2048. Its application is crucial for the HR management of banks, which are large employers.</p>`,

                    coreContent: `<p><b>Key Provisions of Labor Act 2074:</b></p>
<ol>
<li><b>Types of Employment:</b> Recognizes regular employment, work-based, time-bound, casual, and part-time employment. (Crucial for banks hiring outsourced security or IT staff).</li>
<li><b>Working Hours:</b> Maximum 8 hours a day and 48 hours a week. Overtime is paid at 1.5 times the regular wage (maximum 24 hours OT per week).</li>
<li><b>Leave Provisions:</b>
    <ul>
        <li>Public Holidays: 13 days (14 for women).</li>
        <li>Home Leave: 1 day for every 20 days worked.</li>
        <li>Sick Leave: 12 days (fully paid).</li>
        <li>Maternity Leave: 14 weeks (98 days) — 60 days fully paid.</li>
        <li>Paternity Leave: 15 days fully paid.</li>
    </ul>
</li>
<li><b>Social Security Contribution (linked to Contribution Based Social Security Act):</b>
    <ul>
        <li>Provident Fund: 10% deducted from basic salary + 10% contributed by employer.</li>
        <li>Gratuity: 8.33% of basic salary contributed every month by the employer from day one.</li>
    </ul>
</li>
<li><b>Termination:</b> Strict procedures for termination, including notice periods and disciplinary processes. No hire-and-fire policy.</li>
</ol>`,

                    nblStrategy: `<ul>
<li><b>HR Policy Alignment:</b> NBL's Employee Service Bye-laws must be fully aligned with the Labor Act 2074, especially regarding maternity/paternity leave and contribution-based social security, to avoid labor disputes and union strikes.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.6.1": {
        subtopic: "NRB Directives 1 to 5: Capital, Credit, SOL & Interest",
        units: [
            {
                title: "Core Prudential Regulations: Capital & Credit Limits",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">NRB Unified Directives</span> are issued annually (and updated frequently) to regulate BFI operations. Directives 1 to 5 form the core of banking prudential regulation, managing capital solvency and credit quality.</p>`,

                    coreContent: `<p><b>Directive 1: Capital Adequacy (Basel III)</b></p>
<ul>
<li><b>Core Capital (Tier 1):</b> Minimum 6% of Risk-Weighted Assets (RWA).</li>
<li><b>Capital Conservation Buffer (CCB):</b> Additional 2.5% requirement.</li>
<li><b>Total Capital (Tier 1 + Tier 2):</b> Minimum 11% (including CCB) of RWA.</li>
<li><b>Countercyclical Buffer:</b> Up to 2.5% during excessive credit growth periods.</li>
<li><b>Consequences of Shortfall:</b> Restrictions on dividend distribution, branch expansion, and bonus distribution.</li>
</ul>

<p><b>Directive 2: Loan Classification & Provisioning</b></p>
<ul>
<li><b>Pass (0-1 month overdue):</b> 1% (or 1.3% depending on specific circulars).</li>
<li><b>Watchlist (1-3 months overdue):</b> 5%.</li>
<li><b>Substandard (3-6 months overdue):</b> 25%.</li>
<li><b>Doubtful (6-12 months overdue):</b> 50%.</li>
<li><b>Loss (Over 1 year overdue):</b> 100%.</li>
<li><b>NFRS 9 Override:</b> Banks must calculate Expected Credit Loss (ECL). The higher of NRB Directive 2 provision or NFRS ECL must be maintained.</li>
</ul>

<p><b>Directive 3: Single Obligor Limit (SOL)</b></p>
<ul>
<li><b>Funded Exposure:</b> Max 25% of Core Capital to a single borrower or group.</li>
<li><b>Total Exposure (Funded + Non-Funded):</b> Max 50% of Core Capital.</li>
<li><b>Exemptions:</b> Lending against Government Securities, Fixed Receipts. Hydropower projects enjoy relaxed limits (up to 50% funded).</li>
</ul>

<p><b>Directive 4: Accounting Policies & Format</b></p>
<ul>
<li>Mandates financial statement formats as per NFRS (Nepal Financial Reporting Standards).</li>
</ul>

<p><b>Directive 5: Risk Minimization</b></p>
<ul>
<li>Covers Board/Management responsibilities regarding overall risk management, establishing independent risk management committees.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Capital Optimization:</b> NBL must continuously monitor its RWA to ensure it doesn't breach the 11% threshold, raising Tier 2 capital (Subordinated Debt) if necessary to support credit growth.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.6.2": {
        subtopic: "NRB Directives 6 to 10: Governance, Compliance & Statistics",
        units: [
            {
                title: "Governance and Operational Compliance Directives",
                knowledgeAreas: {
                    foundation: `<p>Directives 6 to 10 focus heavily on <span class="ka-highlight">Corporate Governance</span> and structural compliance, ensuring that BFIs are run transparently and ethically, without conflicts of interest.</p>`,

                    coreContent: `<p><b>Directive 6: Corporate Governance</b></p>
<ul>
<li><b>Conflict of Interest:</b> Directors/CEOs cannot borrow from their own bank (except specific employee facilities).</li>
<li><b>Cooling-off Period:</b> A CEO or Director must wait 6 months before joining another BFI.</li>
<li><b>Committees:</b> Mandates formation of Audit Committee, Risk Management Committee, and AML/CFT Committee.</li>
<li><b>Age Limit:</b> Maximum age for CEO appointment is 65 years (must retire at 69); Director appointment limit is 70 years (must retire at 74).</li>
</ul>

<p><b>Directive 7: Compliance of Supervisory Instructions</b></p>
<ul>
<li>Banks must promptly implement instructions given by NRB during on-site and off-site inspections and report back within the specified timeframe.</li>
</ul>

<p><b>Directive 8: Investment in Shares and Debentures</b></p>
<ul>
<li>Commercial banks can invest up to 30% of their Core Capital in shares/debentures of organized institutions.</li>
<li>Investment in a single company's shares is limited to 10% of the bank's Core Capital.</li>
<li>Cannot invest in shares of institutions of the same class (A-class cannot buy A-class shares for trading).</li>
</ul>

<p><b>Directive 9: Statistical Reporting</b></p>
<ul>
<li>Mandates accurate, timely submission of daily, weekly, monthly, quarterly, and annual returns to NRB through the Supervisory Information System (SIS).</li>
</ul>

<p><b>Directive 10: Sale/Transfer of Promoter Shares</b></p>
<ul>
<li>Strict lock-in periods and NRB approval required for selling promoter shares to ensure ownership stability.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Board Independence:</b> Directive 6 is crucial for preventing the banking crises seen in the past (like the 2011 liquidity crunch driven by promoter-led insider lending).</li>
</ul>`
                }
            }
        ]
    },

    "I.B.6.3": {
        subtopic: "NRB Directives 11 to 15: Deprived Sector, CD Ratio & Branches",
        units: [
            {
                title: "Sectoral Lending & Liquidity Maintenance Directives",
                knowledgeAreas: {
                    foundation: `<p>Directives 11 to 15 regulate the bank's expansion, its responsibility towards the marginalized economy, and its core liquidity maintenance parameters.</p>`,

                    coreContent: `<p><b>Directive 11: Consortium Financing</b></p>
<ul>
<li>Mandatory for project loans exceeding NPR 2 Billion (initially NPR 1 Billion).</li>
<li>Lead bank is responsible for appraisal, documentation, and monitoring on behalf of participating banks.</li>
</ul>

<p><b>Directive 12: Credit Information and Blacklisting</b></p>
<ul>
<li>Mandatory reporting of loan details (above a certain threshold) to the Credit Information Bureau (CIB).</li>
<li>Borrowers defaulting > 6 months or misusing funds must be blacklisted. A blacklisted person cannot open new accounts, get new loans, or hold a bank directorship.</li>
</ul>

<p><b>Directive 13: Deprived Sector Lending</b></p>
<ul>
<li>Commercial banks (A-class) must lend at least <b>5%</b> of their total loan portfolio to the "Deprived Sector" (low-income individuals, marginalized groups, micro-enterprises).</li>
<li>Penalty for shortfall: NRB imposes fines equivalent to the highest lending rate on the shortfall amount.</li>
</ul>

<p><b>Directive 14: Branch Network and Working Area</b></p>
<ul>
<li>Guidelines for opening, relocating, and closing branches.</li>
<li>Currently, NRB encourages branches in unbanked rural municipalities and restricts unchecked expansion in Kathmandu valley without matching rural expansion.</li>
</ul>

<p><b>Directive 15: Interest Rate and CD Ratio</b></p>
<ul>
<li><b>CD Ratio (Credit-to-Deposit):</b> Must not exceed <b>90%</b>. This replaced the older CCD (Credit to Core Capital and Deposit) ratio of 85%.</li>
<li><b>Interest Rate Publication:</b> Banks must publish interest rates monthly.</li>
<li><b>Base Rate:</b> Lending rates must be tied to the Base Rate. Spreads are capped (e.g., 4% average spread limit).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>CD Ratio Management:</b> NBL must actively manage its deposit mobilization campaigns to ensure sufficient headroom for credit expansion without breaching the 90% CD limit.</li>
</ul>`
                }
            }
        ]
    },

    "I.B.6.4": {
        subtopic: "NRB Directives 16 to 21: IT, AML, Base Rate & Protection",
        units: [
            {
                title: "Modern Banking Directives: Tech, AML & Consumer Protection",
                knowledgeAreas: {
                    foundation: `<p>The final set of directives (16-21) deals with modern banking challenges: technological risks, money laundering, consumer rights, and overall systemic stability.</p>`,

                    coreContent: `<p><b>Directive 16: Financial Resources Management</b></p>
<ul>
<li>Guidelines on raising capital through debentures and subordinated debt.</li>
</ul>

<p><b>Directive 17: Upgradation of BFIs</b></p>
<ul>
<li>Rules for a lower-class institution to upgrade (e.g., a B-class development bank upgrading to an A-class commercial bank) by meeting capital and governance criteria.</li>
</ul>

<p><b>Directive 18: Customer Protection</b></p>
<ul>
<li><b>Grievance Redressal:</b> Banks must have a dedicated desk and officer.</li>
<li><b>Transparency:</b> No hidden fees. All service charges must be published.</li>
<li><b>Financial Literacy:</b> Banks must allocate a portion of their CSR fund (which is 1% of net profit) towards financial literacy programs.</li>
</ul>

<p><b>Directive 19: AML/CFT Compliance</b></p>
<ul>
<li>Mandates strict KYC/CDD, screening against UN sanction lists, reporting TTR/STR via goAML, and risk-profiling of customers.</li>
</ul>

<p><b>Directive 20: Financial Consumer Protection & Financial Literacy</b></p>
<ul>
<li>Ensures fair treatment, protection of privacy, and outlines the responsibilities of BFIs regarding consumer rights.</li>
</ul>

<p><b>Directive 21: IT Guidelines & Cybersecurity</b></p>
<ul>
<li>Mandates IS Audit (Information Systems Audit).</li>
<li>Disaster Recovery (DR) and Business Continuity Planning (BCP) requirements.</li>
<li>Cybersecurity frameworks to protect customer data and payment gateways.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>IT Security:</b> Under Directive 21, NBL must invest heavily in cybersecurity infrastructure (firewalls, VAPT, SIEM) to protect its vast customer base and ensure uninterrupted digital banking services.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.1.1": {
        subtopic: "Organization Theories, Architectural Evolution & Models",
        units: [
            {
                title: "Evolution of Organizational Theories",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Organization Theory</span> explains how organizations function, how they are structured, and how they interact with their environment. The evolution of these theories reflects the shift from treating employees as mere cogs in a machine to valuing them as critical human capital.</p>`,

                    definitions: `<table>
<tr><th>Theory/Era</th><th>Key Proponent(s)</th><th>Core Philosophy</th></tr>
<tr><td><b>Classical Theory (Scientific)</b></td><td>F.W. Taylor</td><td>Efficiency, standardization, time-motion studies, piece-rate pay. Focus on "the task".</td></tr>
<tr><td><b>Administrative Theory</b></td><td>Henri Fayol</td><td>14 Principles of Management (Division of work, Unity of Command, Scalar Chain). Focus on "the structure".</td></tr>
<tr><td><b>Bureaucratic Theory</b></td><td>Max Weber</td><td>Rules, hierarchy, impersonal relations, merit-based selection. Ideal for large institutions like NRB or NBL historically.</td></tr>
<tr><td><b>Human Relations (Neo-Classical)</b></td><td>Elton Mayo (Hawthorne Studies)</td><td>Social factors, group dynamics, and employee satisfaction drive productivity, not just money.</td></tr>
<tr><td><b>Systems Theory (Modern)</b></td><td>Ludwig von Bertalanffy</td><td>Organization is an open system interacting with its environment (Inputs → Processing → Outputs).</td></tr>
<tr><td><b>Contingency Theory</b></td><td>Joan Woodward</td><td>"It depends." There is no one best way to organize; it depends on the environment, technology, and size.</td></tr>
</table>`,

                    coreContent: `<p><b>Evolution of Bank Architectures:</b></p>
<ul>
<li><b>Past (Bureaucratic/Functional):</b> Highly centralized, steep hierarchy, siloed departments (e.g., separate Loan Dept, Deposit Dept), slow decision-making.</li>
<li><b>Present (Matrix/Customer-Centric):</b> Flatter structures, cross-functional teams (e.g., Retail Banking Head managing product development and sales), agile decision-making, high IT integration.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Structural Modernization:</b> NBL must transition from its legacy bureaucratic structure (steep hierarchy, slow file movement) to an agile, customer-centric model to compete with agile private banks.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.1.2": {
        subtopic: "OD Processes at Group & Inter-Group Framework Tiers",
        units: [
            {
                title: "Organizational Development (OD) Interventions",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Organizational Development (OD)</span> is a planned, systematic, and long-range effort to improve an organization's problem-solving and renewal processes, particularly through a more effective and collaborative diagnosis and management of organizational culture.</p>`,

                    coreContent: `<p><b>The OD Process (Action Research Model):</b></p>
<ol>
<li><b>Diagnosis:</b> Identifying the problem (e.g., high employee turnover, inter-departmental conflict) through surveys and interviews.</li>
<li><b>Data Collection & Feedback:</b> Sharing findings with the team to create awareness.</li>
<li><b>Action Planning:</b> Designing specific OD interventions.</li>
<li><b>Implementation (Intervention):</b> Executing the plan.</li>
<li><b>Evaluation:</b> Measuring the impact and adjusting.</li>
</ol>

<p><b>Group & Inter-Group Interventions:</b></p>
<ul>
<li><b>Team Building:</b> Activities designed to improve the functioning of a specific work team (e.g., a branch team improving internal communication).</li>
<li><b>Process Consultation:</b> An external expert helps the group understand and improve their own processes (communication, decision-making, leadership).</li>
<li><b>Inter-group Conflict Resolution:</b> Bringing two conflicting groups (e.g., Credit Dept vs. Risk Dept) together to understand each other's perspectives and align on shared organizational goals.</li>
<li><b>Survey Feedback:</b> Using anonymous employee survey data to facilitate group discussions about systemic issues.</li>
</ul>`,

                    prosAndCons: `<p><b class="ka-success">✅ Benefits of OD:</b></p>
<ul>
<li>Improves organizational effectiveness and adaptability.</li>
<li>Increases employee job satisfaction and commitment.</li>
<li>Fosters a culture of continuous improvement.</li>
</ul>
<p><b class="ka-important">❌ Challenges:</b></p>
<ul>
<li>Time-consuming and expensive.</li>
<li>Resistance to change from entrenched employees.</li>
<li>Difficulty in measuring direct ROI of soft-skill interventions.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.1.3": {
        subtopic: "Transforming and Changing Organizational Cultures",
        units: [
            {
                title: "Change Management and Cultural Transformation",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Organizational Culture</span> is the shared set of values, beliefs, and norms that govern how people behave in organizations ("the way we do things around here"). <b>Change Management</b> is the structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state.</p>`,

                    definitions: `<table>
<tr><th>Model</th><th>Key Concept</th></tr>
<tr><td><b>Lewin's 3-Step Model</b></td><td><b>Unfreeze:</b> Create readiness/urgency for change.<br><b>Change:</b> Implement the new processes/culture.<br><b>Refreeze:</b> Stabilize and institutionalize the new norm.</td></tr>
<tr><td><b>Kotter's 8-Step Model</b></td><td>1. Urgency, 2. Guiding Coalition, 3. Vision, 4. Communicate, 5. Empower action, 6. Quick wins, 7. Build on change, 8. Institutionalize.</td></tr>
</table>`,

                    coreContent: `<p><b>Why Organizations Need to Change:</b></p>
<ul>
<li><b>External Forces:</b> NRB regulatory changes (e.g., forced mergers, capital hikes), technological disruption (FinTech, AI), shifting customer preferences (digital over physical).</li>
<li><b>Internal Forces:</b> Leadership changes, declining profitability, high employee attrition.</li>
</ul>

<p><b>Overcoming Resistance to Change:</b></p>
<ul>
<li><b>Education & Communication:</b> Explaining the "why" behind the change.</li>
<li><b>Participation:</b> Involving employees in the design of the change.</li>
<li><b>Facilitation & Support:</b> Providing training and emotional support during the transition.</li>
<li><b>Negotiation:</b> Offering incentives for compliance.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Cultural Shift at NBL:</b> NBL must actively transform its culture from a "traditional government bank" mindset to a "competitive, customer-first, performance-driven" mindset. This requires strong change leadership at the executive level.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.2.1": {
        subtopic: "Environmental Scanning Methods & PESTEL Configurations",
        units: [
            {
                title: "Macro-Environmental Analysis for Strategic Planning",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Environmental Scanning</span> is the process of gathering, analyzing, and dispensing information for tactical or strategic purposes. The <b>PESTEL framework</b> is the primary tool used to analyze the macro-environmental (external) factors that impact a bank's operations and strategy.</p>`,

                    coreContent: `<p><b>PESTEL Analysis applied to Nepalese Banking:</b></p>
<table>
<tr><th>Factor</th><th>Impact on Banking Sector</th></tr>
<tr><td><b>P - Political</b></td><td>Government stability, fiscal policy direction, political appointments in state-owned enterprises, geopolitical relations (India/China trade impacts).</td></tr>
<tr><td><b>E - Economic</b></td><td>GDP growth rate, inflation, interest rate environment, remittance inflows, BOP status, liquidity conditions.</td></tr>
<tr><td><b>S - Social</b></td><td>Demographic shifts (youth migration), changing customer preferences (demand for digital banking), financial literacy levels.</td></tr>
<tr><td><b>T - Technological</b></td><td>FinTech disruption, mobile banking penetration, AI/Machine Learning in credit scoring, cybersecurity threats.</td></tr>
<tr><td><b>E - Environmental</b></td><td>Climate change risks (impacting agriculture loans), ESG (Environmental, Social, Governance) lending mandates by NRB.</td></tr>
<tr><td><b>L - Legal</b></td><td>NRB Unified Directives, BAFIA, AML/CFT laws, Labor Act regulations, taxation laws.</td></tr>
</table>`,

                    nblStrategy: `<ul>
<li><b>Proactive Scanning:</b> NBL's strategy team must continuously monitor PESTEL factors, especially Economic (liquidity) and Legal (NRB policy changes), to adjust lending strategies before crises hit.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.2.2": {
        subtopic: "SWOT Analysis Matrices & Strategy Formulation Systems",
        units: [
            {
                title: "Internal/External Assessment and Strategy Generation",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">SWOT Analysis</span> evaluates a company's internal strengths and weaknesses against external opportunities and threats. It forms the bridge between environmental scanning and actual strategy formulation.</p>`,

                    coreContent: `<p><b>SWOT Analysis of NBL (Hypothetical Context):</b></p>
<ul>
<li><b>Strengths (Internal):</b> Deep heritage and brand trust (established 1937), massive low-cost deposit base (CASA), extensive branch network in rural areas, implicit government backing.</li>
<li><b>Weaknesses (Internal):</b> Legacy IT systems, aging workforce, slower decision-making processes compared to private peers, lower fee-based income.</li>
<li><b>Opportunities (External):</b> Digital banking expansion, financing large infrastructure/hydropower projects, capturing remittance flow through global tie-ups.</li>
<li><b>Threats (External):</b> Aggressive competition from newly merged mega-banks, rising NPLs due to economic slowdown, stringent NRB regulations.</li>
</ul>

<p><b>Strategy Formulation (TOWS Matrix):</b></p>
<ul>
<li><b>SO Strategy (Max-Max):</b> Use Strengths to maximize Opportunities (e.g., Use deep branch network to push digital banking to rural populations).</li>
<li><b>ST Strategy (Max-Min):</b> Use Strengths to minimize Threats (e.g., Use high CASA/low base rate to undercut competitors during fierce rate wars).</li>
<li><b>WO Strategy (Min-Max):</b> Minimize Weaknesses by taking advantage of Opportunities (e.g., Hire fresh tech-savvy talent to revamp legacy IT systems).</li>
<li><b>WT Strategy (Min-Min):</b> Minimize Weaknesses and avoid Threats (e.g., Implement strict credit risk controls to prevent NPL spikes in a weak economy).</li>
</ul>`
                }
            }
        ]
    },

    "II.A.2.3": {
        subtopic: "Strategic Implementation, Evaluation & Operational Control Loops",
        units: [
            {
                title: "Executing Strategy and Performance Measurement",
                knowledgeAreas: {
                    foundation: `<p>Strategy formulation is useless without execution. <span class="ka-highlight">Strategic Implementation</span> is the process that turns plans into action. <span class="ka-highlight">Evaluation and Control</span> ensure that the implementation is achieving the desired results.</p>`,

                    coreContent: `<p><b>Implementation Framework (McKinsey 7S Model):</b></p>
<p>For successful implementation, 7 elements must be aligned:</p>
<ol>
<li><b>Hard Elements:</b> Strategy, Structure, Systems.</li>
<li><b>Soft Elements:</b> Shared Values (Culture), Style (Leadership), Staff, Skills.</li>
</ol>

<p><b>Evaluation & Control Loop:</b></p>
<ol>
<li><b>Establish Standards:</b> Define KPIs (Key Performance Indicators) based on the strategy (e.g., Target ROE of 15%, NPL < 2%).</li>
<li><b>Measure Performance:</b> Collect actual performance data via MIS.</li>
<li><b>Compare:</b> Analyze variance between actual performance and standards.</li>
<li><b>Take Corrective Action:</b> If variance is negative, adjust operations or revise the strategy itself.</li>
</ol>

<p><b>Balanced Scorecard (Strategic Control Tool):</b></p>
<p>Measures performance across four perspectives, not just financial:</p>
<ul>
<li><b>Financial:</b> Revenue growth, cost reduction, asset utilization.</li>
<li><b>Customer:</b> Market share, customer satisfaction, retention rate.</li>
<li><b>Internal Business Processes:</b> Cycle time, error rates, process automation.</li>
<li><b>Learning & Growth:</b> Employee training hours, IT infrastructure capability, staff turnover.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Strategy Execution:</b> NBL must implement a Balanced Scorecard system for branch managers to ensure they focus on customer service and process efficiency, not just deposit collection targets.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.3.1": {
        subtopic: "Core Meaning, Theories, Principles and System Functions",
        units: [
            {
                title: "Fundamentals of Management",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Management</span> is the process of getting things done through and with people in formally organized groups. It is the art of creating an environment in which people can perform and individuals can cooperate towards attainment of group goals.</p>`,

                    coreContent: `<p><b>Functions of Management (POSDCORB + C):</b></p>
<ol>
<li><b>Planning:</b> Setting goals and determining the best course of action to achieve them.</li>
<li><b>Organizing:</b> Allocating resources, assigning tasks, and establishing reporting relationships.</li>
<li><b>Staffing:</b> Recruiting, selecting, training, and retaining employees.</li>
<li><b>Directing:</b> Leading, motivating, and communicating with employees.</li>
<li><b>Controlling:</b> Monitoring performance against plans and taking corrective action.</li>
</ol>

<p><b>Fayol's 14 Principles of Management (Key ones for Banking):</b></p>
<ul>
<li><b>Division of Work:</b> Specialization increases efficiency (e.g., separate teller and credit roles).</li>
<li><b>Authority and Responsibility:</b> They must go hand-in-hand (e.g., Branch Manager has authority to approve small loans and is responsible for their recovery).</li>
<li><b>Unity of Command:</b> An employee should receive orders from only one superior to avoid confusion.</li>
<li><b>Scalar Chain:</b> The unbroken line of authority from top management down to the lowest ranks.</li>
<li><b>Esprit de Corps:</b> Promoting team spirit and unity.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Management Efficacy:</b> NBL must ensure that its branch managers are not just operational supervisors but actual 'managers' who plan, organize, and lead their teams to achieve business targets.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.3.2": {
        subtopic: "Emerging Modern Concepts & Shifting Executive Management Roles",
        units: [
            {
                title: "Modern Management Trends & Managerial Roles",
                knowledgeAreas: {
                    foundation: `<p>The modern business environment is characterized by <b>VUCA</b> (Volatility, Uncertainty, Complexity, Ambiguity). Consequently, management concepts and the role of the executive manager are rapidly shifting from a "command and control" style to a "facilitate and empower" style.</p>`,

                    definitions: `<table>
<tr><th>Modern Concept</th><th>Description</th></tr>
<tr><td><b>Knowledge Management</b></td><td>Capturing, developing, sharing, and effectively using organizational knowledge.</td></tr>
<tr><td><b>Diversity Management</b></td><td>Creating an inclusive workplace that values differences in gender, ethnicity, and thought.</td></tr>
<tr><td><b>Agile Management</b></td><td>Iterative approach focused on rapid delivery, flexibility, and customer collaboration.</td></tr>
<tr><td><b>Virtual Teams</b></td><td>Managing geographically dispersed teams using digital communication tools.</td></tr>
</table>`,

                    coreContent: `<p><b>Mintzberg's Managerial Roles:</b></p>
<ol>
<li><b>Interpersonal Roles:</b> Figurehead, Leader, Liaison (Building networks inside and outside the bank).</li>
<li><b>Informational Roles:</b> Monitor (Scanning environment), Disseminator (Sharing info internally), Spokesperson (Representing the bank externally).</li>
<li><b>Decisional Roles:</b> Entrepreneur (Innovating), Disturbance Handler (Crisis management), Resource Allocator, Negotiator.</li>
</ol>

<p><b>Shifting Role of Bank Executives:</b></p>
<ul>
<li>From <b>Administrator</b> to <b>Strategic Thinker</b>.</li>
<li>From <b>Risk Averse</b> to <b>Risk Manager</b>.</li>
<li>From <b>Process-focused</b> to <b>Customer-focused</b>.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Executive Development:</b> NBL must train its Senior Managers (Level 9+) to excel in Mintzberg's 'Decisional Roles', particularly as Entrepreneurs driving new business and Disturbance Handlers navigating economic shocks.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.3.3": {
        subtopic: "Organizational Leadership Theories and Transformational Matrices",
        units: [
            {
                title: "Leadership in Banking: Theories and Styles",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Leadership</span> is the ability to influence a group toward the achievement of a vision or set of goals. While management is about coping with complexity (bringing order), leadership is about coping with change.</p>`,

                    coreContent: `<p><b>Key Leadership Theories:</b></p>
<ol>
<li><b>Trait Theory:</b> Leaders are born with specific traits (charisma, intelligence, courage). (Largely outdated).</li>
<li><b>Behavioral Theory:</b> Leadership is a set of behaviors that can be learned (e.g., Task-oriented vs. People-oriented).</li>
<li><b>Contingency Theory (Fiedler):</b> The effectiveness of a leadership style depends on the situation (leader-member relations, task structure, position power).</li>
<li><b>Path-Goal Theory:</b> The leader's job is to assist followers in attaining their goals and provide the necessary direction/support to ensure their goals are compatible with the organization.</li>
</ol>

<p><b>Transactional vs. Transformational Leadership:</b></p>
<table>
<tr><th>Transactional Leadership</th><th>Transformational Leadership</th></tr>
<tr><td>Focuses on the exchange (reward for performance).</td><td>Focuses on inspiring and transforming followers.</td></tr>
<tr><td>Maintains the status quo.</td><td>Challenges the status quo, drives innovation.</td></tr>
<tr><td>Uses Management by Exception (intervenes only when standards aren't met).</td><td>Uses Intellectual Stimulation (encourages creative problem-solving).</td></tr>
<tr><td>Good for stable environments (e.g., routine clearing operations).</td><td>Essential for change management (e.g., digital transformation).</td></tr>
</table>`,

                    nblStrategy: `<ul>
<li><b>Transformational Leadership at NBL:</b> To regain its position as the top bank, NBL requires transformational leaders who can inspire the workforce to embrace digitalization and customer-centricity, moving beyond the transactional "task-completion" mindset.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.1": {
        subtopic: "Approaches to Strategic HR Planning & Job Description Architecture",
        units: [
            {
                title: "Strategic Human Resource Planning (HRP)",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Human Resource Planning (HRP)</span> is the process of forecasting the future human resource requirements of the organization and determining how the existing human resource capacity can be utilized to fulfill these requirements. It ensures the <b>right number of people, with the right skills, are in the right place, at the right time.</b></p>`,

                    coreContent: `<p><b>The HRP Process:</b></p>
<ol>
<li><b>Analyzing Organizational Strategy:</b> E.g., If the bank plans to open 50 new rural branches, it needs rural-centric branch managers.</li>
<li><b>Forecasting HR Demand:</b> Estimating the quantity and quality of people needed.</li>
<li><b>Forecasting HR Supply:</b> Analyzing the current internal workforce (skills inventory, expected retirements) and external labor market.</li>
<li><b>Identifying the Gap:</b> Demand minus Supply (Shortage or Surplus).</li>
<li><b>Action Planning:</b> If shortage → recruit, train. If surplus → freeze hiring, offer Voluntary Retirement Scheme (VRS).</li>
</ol>

<p><b>Job Analysis: The Foundation of HR:</b></p>
<ul>
<li><b>Job Analysis:</b> The systematic process of determining the skills, duties, and knowledge required for performing jobs in an organization.</li>
<li><b>Job Description (JD):</b> A written statement of what the job holder does, how it is done, and why it is done (Tasks, Duties, Responsibilities).</li>
<li><b>Job Specification (JS):</b> A statement of the minimum acceptable qualifications (KSA - Knowledge, Skills, Abilities) an incumbent must possess to perform the job successfully.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Succession Planning:</b> As a mature bank, NBL faces a significant number of upcoming retirements in senior management. Strategic HRP is critical to identify and groom mid-level managers to fill these leadership vacuums without disrupting operations.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.2": {
        subtopic: "Recruitment, Selection, Integration and Systems Onboarding",
        units: [
            {
                title: "Talent Acquisition and Onboarding",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Recruitment</span> is the process of generating a pool of capable candidates applying for a job. <span class="ka-highlight">Selection</span> is the process of choosing the most suitable candidate from that pool. In Nepalese government banks, this process is heavily regulated to ensure fairness.</p>`,

                    coreContent: `<p><b>Recruitment Sources:</b></p>
<ul>
<li><b>Internal:</b> Promotions, transfers, internal job postings. (Boosts morale, cheaper, but can cause stagnation).</li>
<li><b>External:</b> PSC (Public Service Commission) exams, university campus placements, job portals. (Brings fresh ideas, but expensive and risky).</li>
</ul>

<p><b>The Selection Process (Typical for NBL Level 9):</b></p>
<ol>
<li><b>Application Screening:</b> Checking basic eligibility (e.g., Master's degree, 5 years officer-level experience).</li>
<li><b>Written Examination:</b> Conducted by the Public Service Commission (PSC) to ensure meritocracy and eliminate bias. Tests technical knowledge (banking, laws, management).</li>
<li><b>Group Discussion / Case Study:</b> Assesses leadership, communication, and problem-solving skills in a group setting.</li>
<li><b>Comprehensive Interview:</b> Final assessment of personality, strategic vision, and cultural fit.</li>
<li><b>Medical Check & Background Verification.</b></li>
</ol>

<p><b>Onboarding and Socialization:</b></p>
<ul>
<li>The process of integrating a new employee into the organization's culture and operations.</li>
<li>Reduces anxiety, accelerates time-to-productivity, and reduces early turnover.</li>
<li>For senior hires, onboarding includes strategic alignment briefings with the CEO and Board members.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Meritocracy via PSC:</b> NBL's reliance on the Public Service Commission for exams ensures high-quality intake, but the bank must supplement this with excellent onboarding to transition candidates from "exam-passers" to "effective banking practitioners."</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.3": {
        subtopic: "Training, Development Methodologies & ROI Analytics Metrics",
        units: [
            {
                title: "Employee Capacity Building & Training Evaluation",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Training</span> focuses on improving an employee's current job performance (short-term), while <span class="ka-highlight">Development</span> focuses on preparing employees for future roles and responsibilities (long-term). NRB mandates BFIs to spend at least <b>3% of their total staff expenses</b> on training and development.</p>`,

                    coreContent: `<p><b>Training Needs Assessment (TNA):</b></p>
<ul>
<li><b>Organizational Level:</b> Where is training needed in the bank? (e.g., new CBS implementation requires bank-wide IT training).</li>
<li><b>Task Level:</b> What skills are required to do the job?</li>
<li><b>Individual Level:</b> Who needs training and what kind? (Determined via performance appraisals).</li>
</ul>

<p><b>Training Methods:</b></p>
<ul>
<li><b>On-the-Job (OJT):</b> Job rotation, mentoring, coaching, understudy. (Best for operational roles).</li>
<li><b>Off-the-Job:</b> Classroom lectures, case studies, role-playing, simulation, e-learning. (Best for conceptual/managerial skills).</li>
</ul>

<p><b>Evaluating Training Effectiveness (Kirkpatrick's 4-Level Model):</b></p>
<ol>
<li><b>Reaction:</b> Did the trainees like the training? (Measured via post-training surveys).</li>
<li><b>Learning:</b> Did they acquire the intended knowledge/skills? (Measured via tests).</li>
<li><b>Behavior:</b> Did they apply the learning on the job? (Measured via manager observation 3 months later).</li>
<li><b>Results (ROI Analytics):</b> Did the training impact the bottom line? (e.g., Did customer service training reduce customer complaints by 20%?).</li>
</ol>`,

                    nblStrategy: `<ul>
<li><b>Targeted Development:</b> Instead of generic training, NBL must utilize its 3% training budget on targeted competencies like digital banking sales, NFRS 9 ECL modeling, and advanced credit appraisal to address specific skill gaps.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.4": {
        subtopic: "Performance Management Systems, Balance Scorecards & Compensation",
        units: [
            {
                title: "Performance Appraisal and Reward Systems",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Performance Management</span> is an ongoing process of communication between a supervisor and an employee that occurs throughout the year, in support of accomplishing the strategic objectives of the organization. It is much broader than just the annual <span class="ka-highlight">Performance Appraisal</span>.</p>`,

                    coreContent: `<p><b>Methods of Performance Appraisal:</b></p>
<ul>
<li><b>Traditional:</b> Rating scales (1 to 5), Essay method, Critical Incident method. (Prone to biases like Halo effect, Leniency).</li>
<li><b>Modern (MBO - Management by Objectives):</b> Manager and employee jointly set specific, measurable goals. Performance is judged based on goal achievement.</li>
<li><b>Modern (360-Degree Feedback):</b> Employee is rated by their manager, peers, subordinates, and even customers. Provides a holistic view but can be politically manipulated.</li>
<li><b>Modern (Balanced Scorecard):</b> Evaluates performance across financial, customer, internal process, and learning perspectives.</li>
</ul>

<p><b>Compensation and Benefits:</b></p>
<ul>
<li><b>Direct Compensation:</b> Basic salary, DA (Dearness Allowance), performance bonuses.</li>
<li><b>Indirect Compensation (Fringe Benefits):</b> Provident fund, gratuity, health insurance, paid leave, subsidized staff loans (a major retention tool in banks).</li>
</ul>

<p><b>The Link (Pay for Performance):</b></p>
<ul>
<li>A robust performance management system directly links appraisal scores to compensation (bonuses, salary increments) and career progression (promotions).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Objective Appraisal:</b> NBL must transition from seniority-based promotions to a strict performance-based system (MBO/Balanced Scorecard) to motivate high performers and discourage complacency.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.5": {
        subtopic: "Labor Relations, Bargaining, Dispute Negotiations & Union Realities",
        units: [
            {
                title: "Managing Industrial Relations in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Labor Relations (Industrial Relations)</span> refers to the dynamic relationship between management and employees (usually represented by trade unions). In government-owned banks like NBL, managing union relations is a critical strategic competency.</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Trade Union</b></td><td>An organized association of workers formed to protect and further their rights and interests.</td></tr>
<tr><td><b>Collective Bargaining</b></td><td>Negotiation between management and union representatives regarding wages, working conditions, and benefits.</td></tr>
<tr><td><b>Grievance</b></td><td>A formal complaint by an employee regarding a workplace issue or policy violation.</td></tr>
<tr><td><b>CBA (Collective Bargaining Agent)</b></td><td>The specific union recognized by management (often through an election) to negotiate on behalf of all employees.</td></tr>
</table>`,

                    coreContent: `<p><b>Causes of Industrial Disputes:</b></p>
<ul>
<li>Economic: Demand for higher salary, better bonuses, higher staff loan limits.</li>
<li>Management Practices: Unfair transfers, biased promotions, harsh disciplinary actions.</li>
<li>Political: Interference from national political parties affiliating with internal bank unions.</li>
</ul>

<p><b>Dispute Resolution Mechanisms (as per Labor Act):</b></p>
<ol>
<li><b>Bipartite Negotiation:</b> Direct discussion between management and the CBA. (Best approach).</li>
<li><b>Conciliation/Mediation:</b> A neutral third party (e.g., Labor Office) helps the two sides reach an agreement but cannot force a decision.</li>
<li><b>Arbitration:</b> A neutral third party hears both sides and makes a binding decision.</li>
<li><b>Adjudication:</b> Resolving the dispute through the Labor Court.</li>
</ol>`,

                    nblStrategy: `<ul>
<li><b>Constructive Unionism:</b> NBL management must engage proactively with the CBA, treating them as partners in the bank's growth rather than adversaries. Transparent communication about the bank's financial health is key to managing union expectations.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.4.6": {
        subtopic: "Contemporary Strategic HR Challenges and Impediments in Nepalese Banking",
        units: [
            {
                title: "Modern HR Challenges in the Banking Sector",
                knowledgeAreas: {
                    foundation: `<p>The Nepalese banking sector is undergoing rapid transformation driven by digitalization, regulatory pressure, and changing workforce demographics. These shifts create complex, contemporary challenges for HR managers.</p>`,

                    coreContent: `<p><b>Key Strategic HR Challenges:</b></p>
<ol>
<li><b>Talent Retention (Brain Drain):</b> High turnover of skilled IT and risk management professionals who either migrate abroad (Australia, Canada, US) or get poached by rival banks offering higher pay.</li>
<li><b>Managing the Generational Gap:</b> Bridging the cultural and technological divide between older, experienced staff (Gen X/Boomers) and younger, tech-savvy recruits (Millennials/Gen Z).</li>
<li><b>Post-Merger Integration:</b> Harmonizing different HR policies, salaries, and corporate cultures after a merger. Managing the anxiety and redundancy of duplicate roles.</li>
<li><b>Digital Upskilling:</b> Retraining traditional tellers and credit officers to handle digital banking, data analytics, and automated credit scoring systems.</li>
<li><b>Work-Life Balance & Stress:</b> Addressing employee burnout caused by high sales targets, deposit collection pressures, and strict regulatory compliance demands.</li>
</ol>`,

                    nblStrategy: `<ul>
<li><b>Retention Strategy:</b> NBL must focus on building a strong employer brand, offering fast-track career progression for high performers, and providing continuous learning opportunities to retain top talent against aggressive private sector poaching.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.5.1": {
        subtopic: "Fundamentals of OB, Group Dynamics & Operational Team Formation",
        units: [
            {
                title: "Organizational Behavior and Group Dynamics",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Organizational Behavior (OB)</span> is the study of human behavior in organizational settings, the interface between human behavior and the organization, and the organization itself. It is crucial for understanding how to manage people effectively in a banking environment.</p>`,

                    coreContent: `<p><b>Key Elements of OB:</b></p>
<ul>
<li><b>People:</b> Individuals and groups (formal and informal).</li>
<li><b>Structure:</b> Formal relationship of people in the organization (hierarchy).</li>
<li><b>Technology:</b> Resources with which people work (CBS, computers).</li>
<li><b>Environment:</b> Both internal and external factors influencing the organization.</li>
</ul>

<p><b>Group Dynamics & Team Formation (Tuckman's Model):</b></p>
<ol>
<li><b>Forming:</b> The team comes together. High dependence on the leader for guidance and direction. (Polite but guarded).</li>
<li><b>Storming:</b> Conflict arises as personalities clash and members vie for position. (Critical phase; many teams fail here).</li>
<li><b>Norming:</b> Agreement and consensus begin forming. Roles and responsibilities are accepted.</li>
<li><b>Performing:</b> The team is highly functioning, strategically aware, and knows clearly what it is doing. (High productivity).</li>
<li><b>Adjourning:</b> The team breaks up after achieving its goal (e.g., a special task force for NFRS implementation).</li>
</ol>`,

                    nblStrategy: `<ul>
<li><b>Cross-Functional Teams:</b> To launch new digital products quickly, NBL must form cross-functional teams (IT, Marketing, Risk) and actively manage them through the 'Storming' phase to reach 'Performing' rapidly.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.5.2": {
        subtopic: "Motivation Theories, Corporate Communication Flows & Friction Points",
        units: [
            {
                title: "Motivation and Communication in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Motivation</span> is the internal drive that directs behavior towards a goal. In banking, where tasks can be highly repetitive (teller) or highly stressful (credit/sales), maintaining motivation is a daily managerial challenge.</p>`,

                    definitions: `<table>
<tr><th>Theory</th><th>Core Concept</th></tr>
<tr><td><b>Maslow's Hierarchy</b></td><td>Needs progress from basic (physiological/safety) to high-level (esteem/self-actualization).</td></tr>
<tr><td><b>Herzberg's Two-Factor</b></td><td><b>Hygiene Factors</b> (Salary, Job Security) prevent dissatisfaction but don't motivate. <b>Motivators</b> (Recognition, Growth) actually drive performance.</td></tr>
<tr><td><b>Vroom's Expectancy</b></td><td>Motivation = Expectancy (effort leads to performance) × Instrumentality (performance leads to reward) × Valence (value of reward).</td></tr>
<tr><td><b>Equity Theory</b></td><td>Employees compare their input/output ratio with others. Inequity leads to demotivation.</td></tr>
</table>`,

                    coreContent: `<p><b>Corporate Communication Flows:</b></p>
<ul>
<li><b>Downward:</b> Directives, policies, feedback from Management to Staff. (Often suffers from distortion).</li>
<li><b>Upward:</b> Reports, suggestions, grievances from Staff to Management. (Often filtered or blocked by middle management).</li>
<li><b>Horizontal (Lateral):</b> Between peers or departments (e.g., Credit talking to Risk). (Crucial for coordination).</li>
<li><b>Grapevine:</b> Informal communication network. (Spreads rumors rapidly during times of uncertainty, like a merger).</li>
</ul>

<p><b>Communication Friction Points in Banks:</b></p>
<ul>
<li><b>Jargon:</b> Overuse of technical banking terms (NPL, CD ratio, LCR) confusing non-technical staff or customers.</li>
<li><b>Hierarchy:</b> Junior staff fearing to speak up about a risky loan due to a strict chain of command.</li>
<li><b>Information Overload:</b> Too many emails/circulars from Head Office leading to branches ignoring important updates.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Addressing the Hygiene Factors:</b> According to Herzberg, NBL must first ensure its base pay and job security (Hygiene factors) are competitive to stop dissatisfaction, then focus on career growth and recognition (Motivators) to drive high performance.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.5.3": {
        subtopic: "Time Management Systems, Conflict Management & Decision-Making Models",
        units: [
            {
                title: "Managerial Skills: Time, Conflict, and Decisions",
                knowledgeAreas: {
                    foundation: `<p>Effectiveness in a senior management role requires mastery over personal resources (<span class="ka-highlight">Time Management</span>), interpersonal friction (<span class="ka-highlight">Conflict Management</span>), and organizational direction (<span class="ka-highlight">Decision-Making</span>).</p>`,

                    coreContent: `<p><b>Time Management (Eisenhower Matrix):</b></p>
<ul>
<li><b>Urgent & Important:</b> Do it immediately (e.g., Resolving a CBS server crash).</li>
<li><b>Important, Not Urgent:</b> Schedule it (e.g., Strategic planning, staff training). <i>Effective managers spend most time here.</i></li>
<li><b>Urgent, Not Important:</b> Delegate it (e.g., Responding to routine inquiries, some meetings).</li>
<li><b>Not Urgent, Not Important:</b> Eliminate it (e.g., Scrolling social media, unnecessary paperwork).</li>
</ul>

<p><b>Conflict Management Styles (Thomas-Kilmann):</b></p>
<ul>
<li><b>Competing (Win-Lose):</b> High assertiveness, low cooperativeness. (Used in emergencies).</li>
<li><b>Accommodating (Lose-Win):</b> Low assertiveness, high cooperativeness. (Used to build goodwill).</li>
<li><b>Avoiding (Lose-Lose):</b> Low assertiveness, low cooperativeness. (Used when the issue is trivial).</li>
<li><b>Compromising (Tie):</b> Moderate assertiveness, moderate cooperativeness. (Finding a middle ground).</li>
<li><b>Collaborating (Win-Win):</b> High assertiveness, high cooperativeness. (Used for complex, important issues requiring innovative solutions).</li>
</ul>

<p><b>Decision-Making Models:</b></p>
<ul>
<li><b>Rational Model:</b> Step-by-step logic (Define problem → Generate alternatives → Evaluate → Choose best). Assumes perfect information.</li>
<li><b>Bounded Rationality (Satisficing):</b> Decision-makers are limited by time, cognitive ability, and information. They choose the first "good enough" option rather than the perfect one. (Most common in reality).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Collaborative Conflict Resolution:</b> In inter-departmental conflicts (e.g., Business vs. Risk), NBL managers must strive for a 'Collaborating' style to ensure credit growth without compromising asset quality, creating a Win-Win scenario.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.6.1": {
        subtopic: "Total Quality Management (TQM) Techniques & Kaizen Adaptations",
        units: [
            {
                title: "Quality Management in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Total Quality Management (TQM)</span> is an organization-wide approach focused on continuously improving the quality of products, services, and processes to achieve customer satisfaction. In banking, quality is defined by accuracy, speed, and customer experience.</p>`,

                    definitions: `<table>
<tr><th>Concept</th><th>Definition</th></tr>
<tr><td><b>Customer Focus</b></td><td>The customer ultimately determines the level of quality.</td></tr>
<tr><td><b>Continuous Improvement</b></td><td>Always looking for ways to do things better (no matter how small).</td></tr>
<tr><td><b>Employee Empowerment</b></td><td>Giving front-line staff the authority to solve customer problems immediately.</td></tr>
<tr><td><b>Kaizen</b></td><td>Japanese term for "continuous improvement." Focuses on small, incremental daily changes involving all employees.</td></tr>
</table>`,

                    coreContent: `<p><b>TQM Techniques in Banking:</b></p>
<ul>
<li><b>Quality Circles:</b> Small groups of employees (e.g., tellers) who meet regularly to identify and solve work-related problems.</li>
<li><b>Six Sigma:</b> A data-driven methodology to eliminate defects (e.g., aiming for 99.99966% error-free transaction processing).</li>
<li><b>5S Methodology (from Kaizen):</b>
    <ul>
        <li><i>Sort:</i> Keep only what is needed (e.g., clearing old files).</li>
        <li><i>Set in order:</i> Organize for efficiency (e.g., ergonomic branch layout).</li>
        <li><i>Shine:</i> Keep the workplace clean.</li>
        <li><i>Standardize:</i> Create consistent processes (e.g., standard loan application checklist).</li>
        <li><i>Sustain:</i> Maintain the discipline.</li>
    </ul>
</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Kaizen at the Branch Level:</b> NBL should empower branch staff to implement Kaizen—small improvements like reorganizing the teller queue or simplifying a form—which cumulatively lead to massive improvements in customer wait times and satisfaction.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.6.2": {
        subtopic: "Benchmarking Frameworks & Quality Assurance Implementations",
        units: [
            {
                title: "Benchmarking and Quality Assurance",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Benchmarking</span> is the process of comparing one's business processes and performance metrics to industry bests or best practices from other companies. <span class="ka-highlight">Quality Assurance (QA)</span> is a proactive process designed to prevent defects before they occur.</p>`,

                    coreContent: `<p><b>Types of Benchmarking:</b></p>
<ul>
<li><b>Internal Benchmarking:</b> Comparing performance between different branches within NBL (e.g., comparing the best performing branch's loan processing time against others).</li>
<li><b>Competitive Benchmarking:</b> Comparing NBL's products or services directly against top competitors (e.g., comparing NBL's mobile app rating and features against Nabil or Global IME).</li>
<li><b>Functional/Generic Benchmarking:</b> Comparing a specific function against a non-competitor who is excellent at it (e.g., benchmarking NBL's customer service call center against a top telecom company's call center).</li>
</ul>

<p><b>The Benchmarking Process:</b></p>
<ol>
<li>Identify what to benchmark (e.g., Loan turnaround time).</li>
<li>Identify comparative companies.</li>
<li>Determine data collection method and collect data.</li>
<li>Determine current performance gap.</li>
<li>Project future performance levels.</li>
<li>Communicate findings and gain acceptance.</li>
<li>Establish functional goals.</li>
<li>Develop action plans.</li>
</ol>

<p><b>Quality Assurance (QA) vs. Quality Control (QC):</b></p>
<ul>
<li><b>QA (Proactive):</b> Establishing processes (like standard operating procedures and training) to ensure errors don't happen. (e.g., Maker-Checker system).</li>
<li><b>QC (Reactive):</b> Checking the final output to catch errors before the customer sees them. (e.g., Internal Audit reviewing a loan file).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Competitive Benchmarking:</b> NBL must continuously benchmark its digital banking features and user experience against the top 3 private commercial banks to ensure it does not lose its younger, tech-savvy customer base.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.6.3": {
        subtopic: "Managing Structural Institutional Transitions & Growth Paradigms",
        units: [
            {
                title: "Institutional Transition and Growth Management",
                knowledgeAreas: {
                    foundation: `<p>Organizations evolve through distinct lifecycles. Managing the transition between these phases—especially transitioning from a stagnant legacy institution to a modern growth-oriented bank—requires careful strategic navigation.</p>`,

                    coreContent: `<p><b>Greiner's Curve (Stages of Organizational Growth):</b></p>
<ol>
<li><b>Growth through Creativity:</b> Ends in a <i>crisis of leadership</i> (needs formal management).</li>
<li><b>Growth through Direction:</b> Ends in a <i>crisis of autonomy</i> (centralized control stifles local branches).</li>
<li><b>Growth through Delegation:</b> Ends in a <i>crisis of control</i> (branches act too independently, risking NPLs).</li>
<li><b>Growth through Coordination:</b> Ends in a <i>crisis of red tape</i> (bureaucracy slows everything down).</li>
<li><b>Growth through Collaboration:</b> Focuses on teamwork, matrix structures, and agility to overcome red tape.</li>
</ol>

<p><b>Managing Transitions (The NBL Context):</b></p>
<ul>
<li>Historically, government banks suffered from a "crisis of red tape."</li>
<li>The transition requires moving towards the "Collaboration" phase:
    <ul>
        <li>Decentralizing operational decisions while centralizing risk management.</li>
        <li>Replacing rigid bureaucratic rules with flexible guidelines and empowered teams.</li>
        <li>Implementing robust MIS (Management Information Systems) to maintain control without needing physical files to move through 5 layers of management.</li>
    </ul>
</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Overcoming Red Tape:</b> NBL's growth paradigm must focus on structural agility. This means cutting down the layers in the loan approval hierarchy (de-layering) and using technology (loan origination systems) to speed up decision-making without losing control.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.7.1": {
        subtopic: "Corporate Governance Frameworks, Ethics, Morality & Integrity Systems",
        units: [
            {
                title: "Corporate Governance and Banking Ethics",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Corporate Governance</span> is the system of rules, practices, and processes by which a bank is directed and controlled. It involves balancing the interests of a company's many stakeholders (shareholders, senior management, customers, suppliers, financiers, the government, and the community).</p>`,

                    definitions: `<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td><b>Agency Problem</b></td><td>The conflict of interest inherent in any relationship where one party (Management) is expected to act in another's (Shareholders) best interests.</td></tr>
<tr><td><b>Ethics</b></td><td>Moral principles that govern a person's behavior or the conducting of an activity (e.g., refusing a bribe).</td></tr>
<tr><td><b>Integrity</b></td><td>The quality of being honest and having strong moral principles; doing the right thing even when no one is watching.</td></tr>
</table>`,

                    coreContent: `<p><b>Pillars of Corporate Governance in Banks:</b></p>
<ul>
<li><b>Transparency:</b> Clear disclosure of financial performance, risks, and ownership structure.</li>
<li><b>Accountability:</b> Management is accountable to the Board, and the Board is accountable to the shareholders and regulators (NRB).</li>
<li><b>Fairness:</b> Equitable treatment of all shareholders (minority and majority).</li>
<li><b>Independence:</b> The presence of Independent Directors on the Board to prevent promoter-driven biases.</li>
</ul>

<p><b>NRB's Focus (Directive 6):</b></p>
<ul>
<li>Strict separation of Promoters/Board and Executive Management. The Board governs; the CEO manages.</li>
<li>Mandatory establishment of an Audit Committee (headed by a non-executive director).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Ethical Leadership:</b> As a government bank, NBL must maintain the highest standards of integrity to prevent corruption and political lending, ensuring decisions are made strictly on banking merit.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.7.2": {
        subtopic: "Social Responsibility Mandates & Fiduciary Transparency Boundaries",
        units: [
            {
                title: "CSR and Fiduciary Duties in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Corporate Social Responsibility (CSR)</span> is a self-regulating business model that helps a company be socially accountable to itself, its stakeholders, and the public. A <span class="ka-highlight">Fiduciary Duty</span> is the highest standard of care, requiring a bank to act solely in the best financial interest of its clients.</p>`,

                    coreContent: `<p><b>NRB Mandates on CSR:</b></p>
<ul>
<li>Banks must allocate at least <b>1% of their net profit</b> to a CSR Fund.</li>
<li><b>Utilization areas:</b> Education, health, disaster relief, environmental protection, financial literacy, and direct grants to marginalized communities.</li>
<li>Expenditure is closely monitored by NRB to ensure funds aren't misused for marketing or political donations.</li>
</ul>

<p><b>Fiduciary Transparency Boundaries:</b></p>
<ul>
<li><b>The Banker-Customer Relationship:</b> A bank acts as a trustee for the depositor's money. It has a legal and moral obligation to protect those funds.</li>
<li><b>Secrecy vs. Transparency:</b> A bank must maintain strict customer confidentiality (privacy laws) but must simultaneously be completely transparent with regulators (reporting STRs/TTRs to FIU, providing data to NRB).</li>
<li><b>Conflict of Interest:</b> A loan officer cannot process a loan for a company in which their spouse has a financial interest.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>CSR as Brand Building:</b> NBL should strategically deploy its CSR funds in financial literacy campaigns in rural areas, which not only fulfills regulatory mandates but also creates a future customer base.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.8.1": {
        subtopic: "IT/MIS Concepts, Scope & E-Commerce Operational Infrastructures",
        units: [
            {
                title: "Information Systems and E-Commerce in Banking",
                knowledgeAreas: {
                    foundation: `<p>Modern banking is entirely reliant on <span class="ka-highlight">Information Technology (IT)</span>. A <span class="ka-highlight">Management Information System (MIS)</span> is a computerized database of financial information organized and programmed to produce regular reports for managers.</p>`,

                    coreContent: `<p><b>Core Banking System (CBS):</b></p>
<ul>
<li>The central IT infrastructure that processes daily banking transactions and posts updates to accounts and general ledger records. It allows customers to access their accounts from any branch ("Any Branch Banking").</li>
</ul>

<p><b>Levels of Information Systems:</b></p>
<ol>
<li><b>Transaction Processing System (TPS):</b> Operational level (e.g., ATM withdrawals, teller deposits).</li>
<li><b>Management Information System (MIS):</b> Tactical level. Summarizes TPS data into standard reports (e.g., Daily deposit growth report for a Branch Manager).</li>
<li><b>Decision Support System (DSS):</b> Strategic level. Uses models to help analyze data (e.g., "What if we increase interest rates by 0.5%?").</li>
<li><b>Executive Information System (EIS):</b> Highly summarized, graphical dashboards for the CEO and Board.</li>
</ol>

<p><b>E-Commerce Infrastructure:</b></p>
<ul>
<li>Payment Gateways (ConnectIPS, eSewa integration).</li>
<li>Electronic Funds Transfer (EFT), RTGS, SWIFT.</li>
<li>Public Key Infrastructure (PKI) for digital signatures and secure online transactions.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Data-Driven Decisions:</b> NBL must upgrade its MIS to a predictive DSS to allow Senior Managers to proactively manage liquidity and NPL trends rather than reacting to historical reports.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.8.2": {
        subtopic: "Hardware, Operating System and DBMS Architecture Controls",
        units: [
            {
                title: "IT Architecture and Database Management",
                knowledgeAreas: {
                    foundation: `<p>The underlying technical infrastructure of a bank must be robust, scalable, and highly available (24/7 uptime). This involves the physical servers (<span class="ka-highlight">Hardware</span>), the system software (<span class="ka-highlight">OS</span>), and how data is stored (<span class="ka-highlight">DBMS</span>).</p>`,

                    coreContent: `<p><b>IT Architecture Components:</b></p>
<ul>
<li><b>Hardware:</b> Mainframe servers for CBS, specialized hardware security modules (HSM) for PIN generation, redundant power supplies.</li>
<li><b>Operating Systems (OS):</b> Usually highly secure enterprise versions like Unix/Linux or Windows Server for critical applications.</li>
<li><b>Database Management System (DBMS):</b> Software that handles the storage, retrieval, and updating of data (e.g., Oracle, MS SQL, PostgreSQL). Ensures ACID properties (Atomicity, Consistency, Isolation, Durability) for financial transactions.</li>
</ul>

<p><b>Architecture Controls:</b></p>
<ul>
<li><b>Redundancy:</b> Having duplicate servers so if one fails, the other takes over immediately (High Availability).</li>
<li><b>Disaster Recovery (DR) Site:</b> A physically separate data center (often in a different seismic zone) that mirrors the primary data center. In case of a major disaster (earthquake/fire), operations shift to the DR site.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Zero Data Loss:</b> The DBMS architecture must ensure that if an ATM transaction fails halfway due to a power cut, the customer's account is not wrongly debited (Atomicity).</li>
</ul>`
                }
            }
        ]
    },

    "II.A.8.3": {
        subtopic: "IT-Risk Analysis Frameworks, Security Auditing & Access Governance",
        units: [
            {
                title: "IT Risk, Auditing, and Access Control",
                knowledgeAreas: {
                    foundation: `<p>As banking becomes digital, <span class="ka-highlight">IT Risk</span> (the potential for an IT failure to cause financial or reputational loss) is as critical as credit risk. Managing this requires strict auditing and access controls.</p>`,

                    coreContent: `<p><b>IT Risk Analysis:</b></p>
<ul>
<li>Identifying threats (hackers, hardware failure, rogue employees).</li>
<li>Assessing vulnerabilities (outdated software, weak passwords).</li>
<li>Determining impact (financial loss, data breach).</li>
<li>Implementing controls (firewalls, encryption, backups).</li>
</ul>

<p><b>Information Systems (IS) Auditing:</b></p>
<ul>
<li>An independent review of the bank's IT infrastructure, policies, and operations.</li>
<li>Evaluates if the systems safeguard assets, maintain data integrity, and operate effectively.</li>
<li>NRB mandates annual IS Audits for all commercial banks.</li>
</ul>

<p><b>Access Governance (Identity and Access Management - IAM):</b></p>
<ul>
<li><b>Principle of Least Privilege:</b> Employees are given only the minimum system access necessary to perform their jobs.</li>
<li><b>Segregation of Duties (Maker-Checker):</b> The person who inputs a transaction (Maker) cannot authorize it (Checker).</li>
<li><b>Multi-Factor Authentication (MFA):</b> Using passwords + OTPs/Biometrics for critical system access.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Access Control:</b> NBL must ensure strict Access Governance, automatically revoking CBS access the moment an employee is transferred or terminated, to prevent insider fraud.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.8.4": {
        subtopic: "Cyber Crime Controls, IT Policies & Legislative Frameworks in Nepal",
        units: [
            {
                title: "Cybersecurity and Legal Frameworks",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Cyber Crime</span> involves any criminal activity that involves a computer, networked device, or a network. Banks are the primary targets for cybercriminals.</p>`,

                    definitions: `<table>
<tr><th>Threat</th><th>Description</th></tr>
<tr><td><b>Phishing</b></td><td>Tricking employees/customers into revealing passwords via fake emails or websites.</td></tr>
<tr><td><b>Ransomware</b></td><td>Malware that encrypts the bank's data and demands payment for the decryption key.</td></tr>
<tr><td><b>DDoS Attack</b></td><td>Overwhelming the bank's servers with fake traffic to crash its online banking portal.</td></tr>
<tr><td><b>Social Engineering</b></td><td>Manipulating people into breaking normal security procedures.</td></tr>
</table>`,

                    coreContent: `<p><b>Cyber Crime Controls:</b></p>
<ul>
<li>Technical: Firewalls, Intrusion Detection/Prevention Systems (IDS/IPS), Data Loss Prevention (DLP) software, End-to-End Encryption.</li>
<li>Administrative: Security awareness training for staff and customers (e.g., "Never share your OTP").</li>
</ul>

<p><b>Legislative Framework (Electronic Transactions Act, 2063):</b></p>
<ul>
<li>Legalizes electronic records and digital signatures.</li>
<li>Criminalizes hacking, altering computer source code, unauthorized access, and computer fraud (punishable by fines and imprisonment).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Proactive Defense:</b> NBL must establish a Security Operations Center (SOC) to monitor cyber threats 24/7 and conduct regular Vulnerability Assessment and Penetration Testing (VAPT) on its digital products.</li>
</ul>`
                }
            }
        ]
    },

    "II.A.8.5": {
        subtopic: "NRB IT Policy and Technical Guidelines Implementation Manuals",
        units: [
            {
                title: "NRB IT Guidelines Compliance",
                knowledgeAreas: {
                    foundation: `<p>To ensure systemic stability, the central bank issues strict <span class="ka-highlight">IT Guidelines</span> that all BFIs must follow. Non-compliance can lead to severe penalties or suspension of digital services.</p>`,

                    coreContent: `<p><b>Key Highlights of NRB IT Guidelines (Directive 21):</b></p>
<ul>
<li><b>IT Governance:</b> Board of Directors must oversee IT strategy and risk. Formation of an IT Steering Committee is mandatory.</li>
<li><b>Information Security:</b> Implementation of a comprehensive Information Security Management System (ISMS), often aligned with ISO 27001 standards.</li>
<li><b>Business Continuity Plan (BCP) & DR:</b> Banks must have a tested BCP. The DR site must be located in a different seismic zone than the primary site. Regular DR drills (failover tests) must be conducted and reported to NRB.</li>
<li><b>Outsourcing:</b> Strict rules on outsourcing IT functions (like cloud hosting or CBS maintenance). The bank retains ultimate responsibility for data security and must ensure the vendor complies with NRB standards.</li>
<li><b>Incident Reporting:</b> Any major cyber incident (breach, prolonged downtime) must be reported to NRB immediately.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Regulatory Compliance:</b> NBL's IT department must align its entire operational manual with NRB's IT Guidelines, ensuring DR drills are successful and IS audits are clean, thus avoiding regulatory friction.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.1.1": {
        subtopic: "Financial Management, Systems, Capital Markets & Money Markets",
        units: [
            {
                title: "Overview of the Financial System",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Financial Management</span> is the process of planning, directing, and controlling the financial activities (procurement and utilization of funds) of an enterprise. The <span class="ka-highlight">Financial System</span> is the set of institutions, instruments, and markets that facilitates this flow of funds from savers to borrowers.</p>`,

                    definitions: `<table>
<tr><th>Market Type</th><th>Characteristics</th><th>Instruments</th></tr>
<tr><td><b>Money Market</b></td><td>Short-term (less than 1 year), high liquidity, low risk.</td><td>Treasury Bills, Commercial Paper, Certificate of Deposits, Interbank Loans.</td></tr>
<tr><td><b>Capital Market</b></td><td>Long-term (more than 1 year), lower liquidity, higher risk, used for capital formation.</td><td>Shares (Equity), Debentures/Bonds (Debt).</td></tr>
<tr><td><b>Primary Market</b></td><td>Where securities are created and sold for the first time (IPOs).</td><td>Initial Public Offerings, Right Shares, FPOs.</td></tr>
<tr><td><b>Secondary Market</b></td><td>Where previously issued securities are traded among investors (NEPSE).</td><td>Traded Shares, Traded Bonds.</td></tr>
</table>`,

                    coreContent: `<p><b>Functions of the Financial System:</b></p>
<ul>
<li><b>Resource Allocation:</b> Moving funds from surplus units (households/savers) to deficit units (businesses/government).</li>
<li><b>Risk Sharing/Management:</b> Providing instruments (like insurance or derivatives) to hedge against financial risk.</li>
<li><b>Price Discovery:</b> Determining the cost of capital (interest rates) through the forces of demand and supply.</li>
<li><b>Liquidity Provision:</b> Allowing investors to quickly convert assets into cash.</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Bank's Dual Role:</b> NBL acts as a major player in both markets. It borrows/lends in the money market (interbank) to manage daily liquidity and issues debentures in the capital market to shore up its Tier 2 capital.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.1.2": {
        subtopic: "Securities Market Mechanics & Derivative Instruments Configuration",
        units: [
            {
                title: "Securities and Derivatives",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Securities Market</span> in Nepal is regulated by SEBON (Securities Board of Nepal) and operated by NEPSE (Nepal Stock Exchange). <span class="ka-highlight">Derivatives</span> are advanced financial instruments whose value is derived from an underlying asset.</p>`,

                    coreContent: `<p><b>Mechanics of the Securities Market (Nepal Context):</b></p>
<ul>
<li><b>Regulator:</b> SEBON (approves IPOs, regulates brokers and merchant bankers).</li>
<li><b>Exchange:</b> NEPSE (the only stock exchange where secondary trading occurs).</li>
<li><b>Depository:</b> CDSC (CDS and Clearing Ltd) - handles the dematerialization (Demat) of shares and electronic settlement (MeroShare).</li>
<li><b>Intermediaries:</b> Stock Brokers, Merchant Bankers (Issue Managers, Portfolio Managers).</li>
</ul>

<p><b>Derivative Instruments:</b></p>
<p><i>Note: The derivatives market in Nepal is still in its infancy (mostly limited to commodities), but understanding the theory is crucial for advanced risk management.</i></p>
<ul>
<li><b>Forwards:</b> A customized, over-the-counter (OTC) contract to buy/sell an asset at a specified price on a future date. (Used heavily by banks for Forex hedging).</li>
<li><b>Futures:</b> Similar to forwards but highly standardized and traded on an exchange.</li>
<li><b>Options:</b> Gives the buyer the <i>right, but not the obligation</i>, to buy (Call Option) or sell (Put Option) an asset at a set price on/before a certain date.</li>
<li><b>Swaps:</b> Agreement to exchange cash flows in the future (e.g., swapping a variable interest rate loan for a fixed interest rate loan).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Hedging Forex Risk:</b> NBL uses Forward Contracts extensively when opening Letters of Credit (LC) for importers to lock in the exchange rate and protect against currency volatility.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.1.3": {
        subtopic: "Financial Planning, Capital Cost Analysis & Investment Appraisals",
        units: [
            {
                title: "Cost of Capital and Financial Planning",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Financial Planning</span> involves estimating capital requirements and determining its composition. The <span class="ka-highlight">Cost of Capital</span> is the minimum return a company must earn on its investments to satisfy its investors (shareholders and debt holders).</p>`,

                    coreContent: `<p><b>Components of Cost of Capital:</b></p>
<ol>
<li><b>Cost of Debt (Kd):</b> The effective rate a company pays on its current debt. Since interest is tax-deductible, the after-tax cost is calculated as: <code>Kd = Interest Rate × (1 - Tax Rate)</code>.</li>
<li><b>Cost of Equity (Ke):</b> The return required by equity investors given the risk of the company. Often calculated using the CAPM model.</li>
</ol>

<p><b>Weighted Average Cost of Capital (WACC):</b></p>
<ul>
<li>The overall cost of capital is the weighted average of the costs of the different sources of financing (Equity + Debt).</li>
<li><code>WACC = (Weight of Equity × Ke) + (Weight of Debt × Kd)</code></li>
<li><b>Significance:</b> WACC acts as the <i>Discount Rate</i> or <i>Hurdle Rate</i> in capital budgeting. An investment is only accepted if its Expected Return > WACC.</li>
</ul>

<p><b>Time Value of Money (Present Value):</b></p>
<ul>
<li>A rupee today is worth more than a rupee tomorrow due to inflation and opportunity cost (potential to earn interest).</li>
<li><b>Present Value (PV):</b> <code>PV = Future Value / (1 + r)^n</code> (where r is the discount rate and n is the time period).</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Project Financing:</b> When NBL evaluates a massive hydropower loan request, the credit team must calculate the project's WACC to ensure the project generates enough cash flow to cover both the bank's interest (Cost of Debt) and the promoter's expected return.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.2.1": {
        subtopic: "Capital Budgeting Valuation Techniques & Asset Selection Profiles",
        units: [
            {
                title: "Capital Budgeting Techniques",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Capital Budgeting</span> is the process of evaluating and selecting long-term investments that are consistent with the goal of maximizing owner wealth. It involves analyzing massive cash outflows today for uncertain cash inflows in the future.</p>`,

                    definitions: `<table>
<tr><th>Technique</th><th>Concept</th><th>Decision Rule</th></tr>
<tr><td><b>Net Present Value (NPV)</b></td><td>The sum of the present values of all cash inflows minus the present value of cash outflows.</td><td>Accept if NPV > 0. (The absolute best method).</td></tr>
<tr><td><b>Internal Rate of Return (IRR)</b></td><td>The discount rate that makes the NPV equal to zero.</td><td>Accept if IRR > Cost of Capital (WACC).</td></tr>
<tr><td><b>Profitability Index (PI)</b></td><td>Ratio of PV of future cash flows to the initial investment.</td><td>Accept if PI > 1.</td></tr>
</table>`,

                    coreContent: `<p><b>NPV vs. IRR:</b></p>
<ul>
<li>While both usually lead to the same accept/reject decision for independent projects, <b>NPV is theoretically superior</b>.</li>
<li>IRR assumes that intermediate cash flows are reinvested at the IRR itself (which may be unrealistically high), while NPV assumes reinvestment at the more realistic Cost of Capital (WACC).</li>
<li>IRR can also yield multiple answers if cash flows change from positive to negative during the project's life.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Internal Investments:</b> When NBL decides whether to invest NPR 500 Million in upgrading its Core Banking System, it must run an NPV analysis. The 'cash inflows' would be the estimated operational cost savings and increased fee revenue over the next 10 years, discounted by the bank's WACC.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.2.2": {
        subtopic: "Mutually Exclusive Proposals Analysis & Variable Lifecycle Options",
        units: [
            {
                title: "Mutually Exclusive Projects and Lifecycles",
                knowledgeAreas: {
                    foundation: `<p>In capital budgeting, projects are either <b>Independent</b> (accepting one doesn't affect the other) or <span class="ka-highlight">Mutually Exclusive</span> (accepting one means rejecting the other—e.g., choosing between Oracle or MS SQL for the database).</p>`,

                    coreContent: `<p><b>Analyzing Mutually Exclusive Proposals:</b></p>
<ul>
<li>If there is a conflict between NPV and IRR rankings (e.g., Project A has higher NPV, but Project B has higher IRR), <b>always choose the project with the highest NPV</b>. NPV directly maximizes shareholder wealth in absolute currency terms.</li>
</ul>

<p><b>Variable Lifecycle (Unequal Lives) Problem:</b></p>
<ul>
<li>When comparing two mutually exclusive machines where Machine A lasts 5 years and Machine B lasts 10 years, you cannot simply compare their standard NPVs.</li>
<li><b>Solution (Equivalent Annual Annuity - EAA approach):</b>
    <ol>
        <li>Calculate the NPV of each project over its respective life.</li>
        <li>Divide the NPV by the Present Value Annuity Factor (PVAF) for its lifespan to find the equivalent annual cash flow.</li>
        <li>Select the project with the higher EAA.</li>
    </ol>
</li>
</ul>`
                }
            }
        ]
    },

    "II.B.2.3": {
        subtopic: "Pay Back Method Adjustments & Strategic Capital Rationing Vectors",
        units: [
            {
                title: "Payback Period and Capital Rationing",
                knowledgeAreas: {
                    foundation: `<p>While NPV is the gold standard, managers also use simpler metrics like the <span class="ka-highlight">Payback Period</span>. Furthermore, companies rarely have unlimited funds; they face <span class="ka-highlight">Capital Rationing</span>.</p>`,

                    coreContent: `<p><b>Payback Period Method:</b></p>
<ul>
<li><b>Concept:</b> The amount of time required for a firm to recover its initial investment in a project.</li>
<li><b>Decision Rule:</b> Accept if the payback period is less than the management's pre-defined cutoff period.</li>
<li><b>Pros:</b> Simple to calculate; heavily focuses on liquidity (getting cash back quickly).</li>
<li><b>Cons (Major Flaws):</b> Ignores the Time Value of Money (a rupee in Year 3 is treated the same as Year 1). Ignores all cash flows that occur <i>after</i> the payback period.</li>
<li><b>Adjustment (Discounted Payback Period):</b> Calculates payback using the <i>present values</i> of cash flows, fixing the time-value flaw, but still ignoring cash flows after payback.</li>
</ul>

<p><b>Capital Rationing:</b></p>
<ul>
<li>Occurs when a firm has more positive NPV projects available than it has the funds to finance.</li>
<li><b>Hard Rationing:</b> Imposed by external markets (banks refuse to lend more).</li>
<li><b>Soft Rationing:</b> Imposed internally by management (e.g., setting a strict CAPEX budget for the year).</li>
<li><b>Strategy:</b> Under capital rationing, you cannot just accept all projects with NPV > 0. You must rank projects using the <b>Profitability Index (PI)</b> and select a combination of projects that maximizes total NPV within the budget constraint.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Liquidity Focus:</b> Given Nepal's volatile liquidity environment, NBL's credit department often calculates the Discounted Payback Period for SME loans to gauge how quickly the bank will recover its principal exposure.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.3.1": {
        subtopic: "Cash Flow Analysis Concepts, Operating, Investing & Financing Tracking",
        units: [
            {
                title: "Cash Flow Statement Analysis",
                knowledgeAreas: {
                    foundation: `<p>A <span class="ka-highlight">Cash Flow Statement</span> provides aggregate data regarding all cash inflows and outflows a company receives from its ongoing operations and external investment sources. In banking, "Profit" does not always mean "Cash" (due to accrual accounting), making cash flow analysis critical.</p>`,

                    coreContent: `<p><b>Three Components of Cash Flow:</b></p>
<ol>
<li><b>Operating Activities (CFO):</b> Cash generated from the bank's core business (Net interest income, fee income, minus operating expenses and taxes). <i>For banks, changes in customer deposits and loans are usually classified under operating cash flows in NFRS formats.</i></li>
<li><b>Investing Activities (CFI):</b> Cash flow from the purchase or sale of long-term assets (e.g., buying new CBS servers, selling old branch buildings) and investments in subsidiaries.</li>
<li><b>Financing Activities (CFF):</b> Cash flow between the bank and its owners/creditors (e.g., issuing new shares, paying dividends, raising subordinated debt/debentures).</li>
</ol>

<p><b>Significance for Banks:</b></p>
<ul>
<li>A bank might show high profit by aggressively booking accrued interest on loans that haven't actually paid cash yet. The cash flow statement strips away this accrual illusion to show true liquidity.</li>
<li>A healthy bank should have positive and growing Cash Flow from Operating Activities.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.3.2": {
        subtopic: "Nepal Financial Reporting Standards (NFRS) Structural Framework",
        units: [
            {
                title: "NFRS Framework Overview",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Nepal Financial Reporting Standards (NFRS)</span> are accounting standards issued by the Accounting Standards Board (ASB) of Nepal, fully aligned with International Financial Reporting Standards (IFRS). NRB mandates all commercial banks to prepare financials as per NFRS.</p>`,

                    coreContent: `<p><b>Key Shifts from Traditional GAAP to NFRS:</b></p>
<ul>
<li><b>Fair Value Measurement:</b> Assets and liabilities are increasingly measured at their current market value (fair value) rather than historical cost.</li>
<li><b>Comprehensive Income:</b> Introduction of the "Statement of Other Comprehensive Income" (OCI) to capture gains/losses not yet realized in the regular income statement (e.g., revaluation of property).</li>
<li><b>Substance over Form:</b> NFRS looks at the economic reality of a transaction, not just its legal form (e.g., treating a long-term lease as an asset).</li>
<li><b>Extensive Disclosures:</b> Requires massive footnotes detailing risk management policies, maturity profiles of assets/liabilities, and related-party transactions.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Transparency:</b> NBL must ensure strict NFRS compliance to provide foreign corresponding banks and international rating agencies (if applied) with globally understandable financial statements.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.3.3": {
        subtopic: "International Financial Reporting Standards (IFRS) Harmonization Paths",
        units: [
            {
                title: "IFRS Harmonization and Global Standards",
                knowledgeAreas: {
                    foundation: `<p>The <span class="ka-highlight">Harmonization</span> of accounting standards means bringing national standards (like Nepal's old local GAAP) into alignment with a globally accepted standard (IFRS) to ensure comparability across borders.</p>`,

                    coreContent: `<p><b>Benefits of Harmonization:</b></p>
<ul>
<li><b>Global Comparability:</b> Investors can easily compare NBL's performance against a bank in India or Europe.</li>
<li><b>Lower Cost of Capital:</b> Transparent, globally recognized financials reduce perceived risk for foreign investors, allowing banks to raise foreign loans (ECB - External Commercial Borrowings) at cheaper rates.</li>
<li><b>Better Risk Management:</b> IFRS forces banks to recognize risks earlier and more accurately (e.g., IFRS 9).</li>
</ul>

<p><b>Challenges in Nepal:</b></p>
<ul>
<li><b>Skill Gap:</b> Severe shortage of accountants and auditors fully trained in complex NFRS/IFRS provisions.</li>
<li><b>Valuation Difficulties:</b> Lack of active, liquid markets makes "Fair Value" calculations highly subjective (e.g., valuing an unlisted hydro company's shares).</li>
</ul>`
                }
            }
        ]
    },

    "II.B.3.4": {
        subtopic: "NFRS 9 Financial Instruments Asset Classification Matrix Rules",
        units: [
            {
                title: "NFRS 9: Classification of Financial Assets",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">NFRS 9 (Financial Instruments)</span> revolutionized how banks classify and measure their assets (loans, bonds, shares). It replaced the older, flawed incurred-loss model of IAS 39.</p>`,

                    coreContent: `<p><b>The Three Classification Categories (The Matrix):</b></p>
<p>Classification depends on the bank's <i>Business Model</i> for managing the asset and the asset's <i>Contractual Cash Flow Characteristics (SPPI Test - Solely Payments of Principal and Interest)</i>.</p>

<ol>
<li><b>Amortized Cost (AC):</b>
    <ul>
        <li>Business Model: Hold the asset to collect contractual cash flows.</li>
        <li>SPPI Test: Yes (it's just a standard loan paying interest and principal).</li>
        <li><i>Example: Standard retail loans, mortgages.</i></li>
    </ul>
</li>
<li><b>Fair Value Through Other Comprehensive Income (FVOCI):</b>
    <ul>
        <li>Business Model: Hold to collect contractual cash flows AND to sell the asset if needed.</li>
        <li>SPPI Test: Yes.</li>
        <li><i>Example: Government bonds held for liquidity (can be sold, but otherwise held for interest).</i></li>
    </ul>
</li>
<li><b>Fair Value Through Profit or Loss (FVTPL):</b>
    <ul>
        <li>Business Model: Held for trading (buying and selling quickly for profit).</li>
        <li>SPPI Test: Fails the test (e.g., equity shares).</li>
        <li><i>Example: Shares in the bank's trading portfolio. Changes in market price immediately hit the P&L.</i></li>
    </ul>
</li>
</ol>`
                }
            }
        ]
    },

    "II.B.3.5": {
        subtopic: "Expected Credit Loss (ECL) Modeling for Forward-Looking System Risk",
        units: [
            {
                title: "Expected Credit Loss (ECL) Model",
                knowledgeAreas: {
                    foundation: `<p>The most significant change brought by NFRS 9 is the <span class="ka-highlight">Expected Credit Loss (ECL)</span> model. Previously, banks provisioned for loans only <i>after</i> a default event occurred (Incurred Loss). ECL requires provisioning based on <i>future expectations</i> of loss.</p>`,

                    coreContent: `<p><b>The Three-Stage ECL Model:</b></p>
<ol>
<li><b>Stage 1 (Performing):</b> Loan is healthy. The bank must recognize a <b>12-month ECL</b> (the loss expected from default events possible within the next 12 months).</li>
<li><b>Stage 2 (Underperforming - SICR):</b> There has been a Significant Increase in Credit Risk (SICR) (e.g., the borrower is 30 days past due). The bank must recognize <b>Lifetime ECL</b> (expected loss over the entire remaining life of the loan).</li>
<li><b>Stage 3 (Non-Performing):</b> The loan is credit-impaired (defaulted/90+ days past due). The bank recognizes <b>Lifetime ECL</b>, and interest income is calculated on the net carrying amount (net of provision).</li>
</ol>

<p><b>ECL Calculation Formula:</b></p>
<p><code>ECL = PD × LGD × EAD</code></p>
<ul>
<li><b>PD (Probability of Default):</b> Likelihood the borrower will default.</li>
<li><b>LGD (Loss Given Default):</b> The percentage of exposure that won't be recovered if default occurs (depends on collateral value).</li>
<li><b>EAD (Exposure at Default):</b> The total amount owed at the time of default.</li>
</ul>

<p><b>NRB Directive vs. NFRS 9:</b></p>
<ul>
<li>NRB requires banks to calculate both the regulatory provision (Directive 2: 1%, 5%, 25%, 50%, 100%) and the NFRS 9 ECL. The bank must maintain whichever provision amount is <b>higher</b>.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Macroeconomic Modeling:</b> Under ECL, NBL must incorporate forward-looking macroeconomic data (GDP forecasts, inflation) into its PD models. If an economic recession is forecasted, NBL must increase its ECL provisions today, even if loans are currently performing well.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.4.1": {
        subtopic: "Portfolio Management Analysis, Selection Mechanics & Efficient Frontiers",
        units: [
            {
                title: "Modern Portfolio Theory (MPT)",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Portfolio Management</span> is the art and science of selecting and overseeing a group of investments that meet the long-term financial objectives and risk tolerance of a client, a company, or an institution.</p>`,

                    coreContent: `<p><b>Markowitz's Modern Portfolio Theory (MPT):</b></p>
<ul>
<li><b>Core Idea:</b> Do not put all your eggs in one basket. Risk is not just about the individual asset, but how it interacts with other assets in the portfolio.</li>
<li><b>Diversification:</b> Combining assets that have a negative or low positive correlation (e.g., airline stocks and oil company stocks). If one goes down, the other might go up, reducing the overall portfolio risk (variance) without necessarily reducing the expected return.</li>
</ul>

<p><b>The Efficient Frontier:</b></p>
<ul>
<li>A graph representing a set of portfolios that maximizes expected return for a given level of risk, or conversely, minimizes risk for a given level of expected return.</li>
<li>Portfolios that lie <i>below</i> the efficient frontier are sub-optimal (they don't provide enough return for the risk taken). Portfolios that lie <i>on</i> the curve are efficient.</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Credit Portfolio Diversification:</b> NBL applies MPT to its loan book. Instead of lending 60% to the real estate sector (high correlation, high systemic risk), it diversifies across agriculture, manufacturing, retail, and energy to ensure a localized crisis doesn't wipe out the bank's capital.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.4.2": {
        subtopic: "Associated Portfolio Structural Risk Matrix and Asset Pricing Models",
        units: [
            {
                title: "Risk Matrix and Capital Asset Pricing Model (CAPM)",
                knowledgeAreas: {
                    foundation: `<p>In finance, risk is the probability that the actual return on an investment will be lower than the expected return. Understanding the structure of this risk is the basis of asset pricing.</p>`,

                    definitions: `<table>
<tr><th>Risk Type</th><th>Description</th></tr>
<tr><td><b>Systematic Risk (Market Risk)</b></td><td>Macro-level risk affecting the entire market (e.g., inflation, NRB interest rate hikes, political instability). <i>Cannot be diversified away.</i></td></tr>
<tr><td><b>Unsystematic Risk (Specific Risk)</b></td><td>Micro-level risk affecting a specific company or industry (e.g., a strike at a factory, loss of a key CEO). <i>Can be eliminated through diversification.</i></td></tr>
</table>`,

                    coreContent: `<p><b>Capital Asset Pricing Model (CAPM):</b></p>
<ul>
<li><b>Concept:</b> Since unsystematic risk can be diversified away for free, investors should only be compensated for taking on <i>systematic risk</i>.</li>
<li><b>The Formula:</b> <code>Expected Return (Ke) = Rf + β × (Rm - Rf)</code>
    <ul>
        <li><b>Rf (Risk-Free Rate):</b> Return on 91-day Government Treasury Bills.</li>
        <li><b>Rm (Market Return):</b> Average return of the NEPSE index.</li>
        <li><b>(Rm - Rf) (Market Risk Premium):</b> The extra return expected for taking on market risk.</li>
        <li><b>β (Beta):</b> The measure of the asset's systematic risk relative to the market. (Beta of 1 = moves with the market; Beta > 1 = more volatile; Beta < 1 = less volatile).</li>
    </ul>
</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Cost of Equity:</b> Banks use CAPM to determine the Cost of Equity (Ke) required by their shareholders, which is a critical input when calculating the WACC for capital budgeting.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.4.3": {
        subtopic: "Profit Management: CVP Analysis, Cost-Volume Configurations & Breaks",
        units: [
            {
                title: "Cost-Volume-Profit (CVP) and Break-Even Analysis",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">CVP Analysis</span> is a managerial accounting tool used to determine how changes in costs (both variable and fixed) and sales volume affect a company's profit.</p>`,

                    coreContent: `<p><b>Key Components:</b></p>
<ul>
<li><b>Fixed Costs:</b> Costs that do not change with volume (e.g., Branch rent, core CBS software license, security guard salaries).</li>
<li><b>Variable Costs:</b> Costs that change directly with volume (e.g., Interest paid on deposits, stationery used per transaction).</li>
<li><b>Contribution Margin:</b> <code>Sales Revenue - Variable Costs</code>. This is the amount available to cover fixed costs and generate profit.</li>
</ul>

<p><b>Break-Even Point (BEP):</b></p>
<ul>
<li>The level of sales at which total revenues equal total costs (Zero Profit, Zero Loss).</li>
<li><b>Formula (in units):</b> <code>Fixed Costs / Contribution Margin per Unit</code>.</li>
<li><b>Margin of Safety:</b> The difference between actual/expected sales and the break-even sales. (High margin = low risk of incurring losses).</li>
</ul>`,

                    nblStrategy: `<ul>
<li><b>Branch Profitability:</b> Before NBL opens a new branch in a remote municipality, management must calculate the BEP. "How many loans and deposits must this branch mobilize to cover its rent and staff costs?" Only if the projected volume exceeds the BEP is the branch viable.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.4.4": {
        subtopic: "Sources and Uses of Funds Analytics, Linear & Goal Programming Models",
        units: [
            {
                title: "Funds Analytics and Optimization Models",
                knowledgeAreas: {
                    foundation: `<p>A bank is essentially an engine that takes funds from various sources and deploys them into various uses. Optimizing this flow requires advanced mathematical models.</p>`,

                    coreContent: `<p><b>Sources and Uses of Funds:</b></p>
<ul>
<li><b>Sources (Inflows):</b> Increase in Deposits, Increase in Capital/Borrowings, Decrease in Loans (Repayments), Sale of Assets.</li>
<li><b>Uses (Outflows):</b> Increase in Loans (New lending), Decrease in Deposits (Withdrawals), Purchase of Fixed Assets, Payment of Dividends.</li>
<li><i>Fund Flow Statement</i> helps management see where money came from and where it went during a specific period.</li>
</ul>

<p><b>Optimization Models (Operations Research):</b></p>
<ul>
<li><b>Linear Programming (LP):</b> A mathematical method to determine the best possible outcome (e.g., maximum profit or lowest cost) in a given mathematical model given some list of constraints.
    *   <i>Example:</i> Maximizing interest income subject to the constraint that CD Ratio must be ≤ 90% and Deprived Sector Lending must be ≥ 5%.</li>
<li><b>Goal Programming:</b> An extension of LP. Used when there are <i>multiple, often conflicting, objectives</i> (e.g., NBL wants to maximize profit AND maximize rural branch expansion AND minimize risk). It attempts to minimize the deviations from all the set goals.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.5.1": {
        subtopic: "Techniques and Core Engineering Methods of Project Evaluation",
        units: [
            {
                title: "Project Appraisal in Banking",
                knowledgeAreas: {
                    foundation: `<p><span class="ka-highlight">Project Appraisal</span> is the comprehensive and systematic assessment of a proposed project to determine its viability before extending a large term loan (e.g., for a cement factory or hydropower plant).</p>`,

                    coreContent: `<p><b>The 5 Dimensions of Project Appraisal:</b></p>
<ol>
<li><b>Technical Appraisal:</b> Is the project physically and technologically feasible? (e.g., Geological survey for a hydropower tunnel, availability of raw materials).</li>
<li><b>Commercial/Market Appraisal:</b> Is there a demand for the product? Who are the competitors? (e.g., Power Purchase Agreement (PPA) with NEA for hydro projects guarantees the market).</li>
<li><b>Financial Appraisal:</b> Is the project financially viable? (Using Capital Budgeting tools: NPV, IRR, Payback Period, DSCR).</li>
<li><b>Economic Appraisal:</b> Does the project benefit the national economy? (Job creation, import substitution, foreign exchange earnings).</li>
<li><b>Managerial/Organizational Appraisal:</b> Does the promoter have the experience, integrity, and capability to execute the project? (Often the most critical factor).</li>
</ol>

<p><b>Key Banking Metric (DSCR):</b></p>
<ul>
<li><b>Debt Service Coverage Ratio (DSCR):</b> <code>Net Operating Income / Total Debt Service (Principal + Interest)</code>.</li>
<li>Banks typically look for a DSCR of > 1.25. A DSCR of 1 means the project generates exactly enough cash to pay the bank, leaving nothing for emergencies.</li>
</ul>`
                }
            }
        ]
    },

    "II.B.5.2": {
        subtopic: "Analysis of Financial Statements, Horizontal/Vertical Ratios & DuPont Matrix",
        units: [
            {
                title: "Financial Statement Analysis",
                knowledgeAreas: {
                    foundation: `<p>Once a project is running, or when assessing a corporate borrower for working capital, banks must rigorously analyze their historical financial statements using various techniques.</p>`,

                    coreContent: `<p><b>Analytical Techniques:</b></p>
<ul>
<li><b>Horizontal Analysis (Trend Analysis):</b> Comparing financial data over several years to identify trends (e.g., "Sales grew by 10% in Year 1, 12% in Year 2").</li>
<li><b>Vertical Analysis (Common-Size Statements):</b> Expressing each item on a financial statement as a percentage of a base figure (e.g., "Cost of Goods Sold is 60% of Total Sales", "Inventory is 15% of Total Assets"). Useful for comparing companies of different sizes.</li>
</ul>

<p><b>The DuPont Matrix (Deconstructing ROE):</b></p>
<ul>
<li>Return on Equity (ROE) is the ultimate measure of performance for shareholders. The DuPont model breaks ROE down into three distinct components to identify <i>why</i> ROE is changing.</li>
<li><code>ROE = Net Profit Margin × Asset Turnover × Equity Multiplier</code>
    <ol>
        <li><b>Net Profit Margin (Net Income / Sales):</b> Measures operational efficiency (Pricing power and cost control).</li>
        <li><b>Asset Turnover (Sales / Total Assets):</b> Measures asset use efficiency (How well the company uses its assets to generate sales).</li>
        <li><b>Equity Multiplier (Total Assets / Total Equity):</b> Measures financial leverage (How much debt the company is using).</li>
    </ol>
</li>
</ul>`,

                    bankingRelation: `<ul>
<li><b>Credit Assessment:</b> If a corporate borrower's ROE is high solely because of a high Equity Multiplier (they are heavily debt-burdened), the NBL credit officer must flag this as high risk, as a slight drop in sales could lead to default.</li>
</ul>`
                }
            }
        ]
    }
};


// ═══════════════════════════════════════════════════
// RENDERING ENGINE FOR STUDY SECTIONS
// ═══════════════════════════════════════════════════

function renderStudySectionHTML(customNumber) {
    const content = studyContentDB[customNumber];
    if (!content) return '';

    let unitsHTML = '';
    content.units.forEach((unit, idx) => {
        let kaHTML = '';
        for (const [key, meta] of Object.entries(kaTemplates)) {
            const html = unit.knowledgeAreas[key];
            if (!html) continue;
            kaHTML += `
                <div class="ka-section">
                    <div class="ka-section-title">
                        <span class="ka-icon ${meta.cls}">${meta.icon}</span>
                        ${meta.label}
                    </div>
                    <div class="ka-body">${html}</div>
                </div>`;
        }

        unitsHTML += `
            <div class="study-unit-card" id="study_unit_${customNumber.replace(/\./g,'_')}_${idx}">
                <div class="study-unit-header" onclick="toggleStudyUnit(this)">
                    <div class="study-unit-title">
                        <span class="study-unit-badge">Unit ${idx + 1}</span>
                        ${unit.title}
                    </div>
                    <span class="study-unit-chevron">▼</span>
                </div>
                <div class="study-unit-body">${kaHTML}</div>
            </div>`;
    });

    return `
        <div class="study-section-container">
            <div class="study-section-header" onclick="toggleStudySection(this)">
                📖 Study Section — Knowledge Area Units (${content.units.length} Units)
            </div>
            <div class="study-section-body">${unitsHTML}</div>
        </div>`;
}

function toggleStudySection(headerEl) {
    const body = headerEl.nextElementSibling;
    body.classList.toggle('visible');
}

function toggleStudyUnit(headerEl) {
    const card = headerEl.parentElement;
    card.classList.toggle('expanded');
}
