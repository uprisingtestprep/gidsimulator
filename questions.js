const QUESTIONS = [
  {
    "id": 1,
    "domain": "foundations",
    "chapter": 1,
    "question": "An 84-year-old man becomes acutely confused after several days of poor intake and weakness. He has no fever. Which finding most strongly supports infection in an older adult?",
    "options": {
      "A": "Mild chronic leukocytosis noted on a routine outpatient blood count previously",
      "B": "Sudden functional decline compared with his previously documented daily baseline abilities",
      "C": "Longstanding urinary frequency without any clearly new urinary tract symptoms",
      "D": "A normal temperature pattern documented consistently throughout the entire day"
    },
    "answer": "B",
    "explanation": "Acute loss of function from baseline is a common geriatric infection presentation and often signals delirium or systemic illness. Mild leukocytosis may be nonspecific. A normal temperature does not exclude infection in older adults. Chronic urinary frequency without a new syndrome does not establish infection."
  },
  {
    "id": 2,
    "domain": "foundations",
    "chapter": 1,
    "question": "Why can serious infection present with little fever in adults over age 65?",
    "options": {
      "A": "Immune senescence often blunts the normal febrile inflammatory response to infection",
      "B": "Antibiotics taken many years earlier permanently prevent future fever responses",
      "C": "Older adults always maintain a lower baseline body temperature than others",
      "D": "Bacteria generally become less virulent specifically within older adult hosts"
    },
    "answer": "A",
    "explanation": "Immune senescence can blunt the inflammatory response, including fever. Older adults do not always have lower baseline temperature, and pathogen virulence does not generally decrease because of age. Prior antibiotic exposure does not permanently prevent fever."
  },
  {
    "id": 3,
    "domain": "foundations",
    "chapter": 1,
    "question": "A frail 79-year-old with pneumonia worsens after starting treatment. What should the clinician reassess first?",
    "options": {
      "A": "Source control measures and the overall adequacy of supportive care",
      "B": "Whether fever is absolutely mandatory before confirming the diagnosis",
      "C": "Whether the blood culture result should simply be completely ignored",
      "D": "Whether the causative organism must instead be a viral pathogen"
    },
    "answer": "A",
    "explanation": "In frail older adults, worsening after treatment may reflect inadequate source control, dehydration, hypoxemia, aspiration, or medication toxicity. Viral infection is not the first assumption. Fever is not mandatory for diagnosis. Blood culture results should be interpreted in clinical context, not ignored."
  },
  {
    "id": 4,
    "domain": "foundations",
    "chapter": 1,
    "question": "Which age-related change most increases aspiration-related infection risk?",
    "options": {
      "A": "Improved airway protection occurring regularly during normal sleep in aging",
      "B": "Increased gastric acid secretion occurring routinely as a consequence of aging",
      "C": "Reduced cough strength together with impaired swallowing coordination during meals",
      "D": "Faster mucociliary clearance developing within the lungs of older adults"
    },
    "answer": "C",
    "explanation": "Reduced cough strength and impaired swallowing coordination increase aspiration risk and reduce clearance of aspirated material. Gastric acid secretion does not increase with aging in a way that protects against aspiration. Mucociliary clearance generally declines, and airway protection during sleep is not improved."
  },
  {
    "id": 5,
    "domain": "foundations",
    "chapter": 1,
    "question": "An older adult with delirium has pyuria on urinalysis but no urinary symptoms. What is the best interpretation?",
    "options": {
      "A": "Pyuria always requires immediate treatment using broad-spectrum antimicrobial therapy",
      "B": "Pyuria alone does not establish a symptomatic urinary tract infection",
      "C": "Delirium by itself excludes any possible urinary tract source completely",
      "D": "Urinalysis reliably distinguishes colonization from true infection in older adults"
    },
    "answer": "B",
    "explanation": "Pyuria and bacteriuria are common and may reflect colonization rather than symptomatic infection, especially in older adults. They do not always require immediate broad-spectrum therapy. Delirium can occur with urinary infection, so it does not exclude a urinary source. Urinalysis cannot reliably distinguish colonization from infection on its own."
  },
  {
    "id": 6,
    "domain": "foundations",
    "chapter": 1,
    "question": "A hospitalized 88-year-old with chronic kidney disease needs empiric antimicrobial therapy. What geriatric factor most directly affects regimen choice?",
    "options": {
      "A": "Hair color and the family history of prior serious infections",
      "B": "Only prior childhood vaccination status directly guides empiric therapy selection",
      "C": "Chronologic age alone determines the most appropriate antimicrobial regimen",
      "D": "Renal function and the overall burden of potential drug interactions"
    },
    "answer": "D",
    "explanation": "Renal function and drug interactions are central to safe antimicrobial selection in older adults. Age alone does not determine the regimen. Hair color and childhood vaccination status are not relevant to current empiric treatment choice."
  },
  {
    "id": 7,
    "domain": "foundations",
    "chapter": 1,
    "question": "What is the main reason to de-escalate antibiotics promptly in an older adult who is improving?",
    "options": {
      "A": "To reduce toxicity, resistance, and Clostridioides difficile infection risk overall",
      "B": "To prevent all future infections from ever occurring permanently",
      "C": "To make cultures more likely to remain positive over time",
      "D": "To increase fever so it can mark successful clinical recovery"
    },
    "answer": "A",
    "explanation": "Prompt de-escalation lowers adverse drug effects, selective pressure for resistance, and risk of C. difficile infection. Fever is not a recovery target. Antibiotic continuation does not preserve culture positivity, and it does not prevent all future infections."
  },
  {
    "id": 8,
    "domain": "foundations",
    "chapter": 1,
    "question": "Which supportive measure most directly helps prevent delirium during infection recovery?",
    "options": {
      "A": "Reorientation strategies, sleep preservation, and use of sensory aids",
      "B": "Routine anticholinergic medication given nightly for treatment of insomnia",
      "C": "Deep sedation to control agitation rapidly during the recovery period",
      "D": "Strict bed rest until all laboratory values have fully normalized"
    },
    "answer": "A",
    "explanation": "Delirium care benefits from reorientation, sleep hygiene, and sensory support such as glasses or hearing aids. Deep sedation worsens delirium risk and function. Prolonged bed rest accelerates deconditioning. Anticholinergic drugs can worsen confusion and urinary retention."
  },
  {
    "id": 9,
    "domain": "foundations",
    "chapter": 1,
    "question": "An 81-year-old with frailty and infection is on lisinopril, hydrochlorothiazide, and diphenhydramine. Which medication most increases delirium and retention risk?",
    "options": {
      "A": "Hydrochlorothiazide taken regularly for blood pressure management therapy",
      "B": "Acetaminophen taken intermittently for relief of mild discomfort",
      "C": "Diphenhydramine taken at bedtime as a sleep aid medication",
      "D": "Lisinopril taken daily for chronic treatment of hypertension"
    },
    "answer": "C",
    "explanation": "Diphenhydramine has anticholinergic effects that can worsen delirium and urinary retention in older adults. Lisinopril may contribute to kidney vulnerability during illness but is not a typical delirium driver. Hydrochlorothiazide can worsen volume depletion. Acetaminophen is generally less likely to worsen delirium."
  },
  {
    "id": 10,
    "domain": "foundations",
    "chapter": 1,
    "question": "Which statement best describes infection in a frail older adult compared with a healthier younger adult?",
    "options": {
      "A": "Frailty generally protects patients against hospitalization when infection develops",
      "B": "Small physiologic insults may trigger major functional collapse in frailty",
      "C": "Older adults always develop more obvious localizing symptoms during infection",
      "D": "Recovery is usually faster because physiologic reserve is substantially lower"
    },
    "answer": "B",
    "explanation": "Frailty reduces physiologic reserve, so even a modest infection can cause delirium, falls, dehydration, or functional collapse. Older adults do not always develop more obvious local symptoms. Frailty does not protect against hospitalization. Lower reserve usually slows recovery rather than speeding it."
  },
  {
    "id": 11,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An 84-year-old man with mild dementia becomes acutely confused and refuses meals. He has no fever and no localizing complaint. What is the best next diagnostic frame?",
    "options": {
      "A": "Wait forty-eight hours before evaluating, allowing symptoms to declare themselves",
      "B": "Attribute these symptoms to reduced appetite and normal aging alone",
      "C": "Treat this abrupt change as possible acute illness until clearly proven otherwise",
      "D": "Assume dementia progression because absent fever makes serious disease very unlikely"
    },
    "answer": "C",
    "explanation": "Acute confusion and anorexia in an older adult are often nonspecific manifestations of acute illness, medication toxicity, dehydration, or hypoxia. Absence of fever does not exclude serious disease. Dementia progression is usually not abrupt. Poor appetite from aging is not an adequate explanation for an acute change. Delaying evaluation risks missing a reversible process."
  },
  {
    "id": 12,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "A frail 79-year-old woman has new delirium after a fall. Urinalysis shows pyuria and bacteriuria. What is the most accurate reasoning step?",
    "options": {
      "A": "This delirium presentation effectively rules out any possible urinary contribution",
      "B": "A normal temperature completely excludes urinary infection as an explanation",
      "C": "These urine findings prove a urinary infection directly caused the delirium",
      "D": "These urine findings may be incidental and require careful clinical correlation"
    },
    "answer": "D",
    "explanation": "Pyuria and bacteriuria are common in older adults and do not by themselves establish causation. The clinician must decide whether the urine findings explain the acute change or merely coexist with another cause. Delirium can occur with urinary infection, but it can also result from many noninfectious triggers. Fever absence does not fully exclude infection."
  },
  {
    "id": 13,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An 88-year-old nursing home resident has sudden inability to stand, poor oral intake, and agitation. No pain complaint is offered. Which explanation best fits geriatric presentation?",
    "options": {
      "A": "Refusal to stand in older adults is usually primarily behavioral",
      "B": "Acute illness in frailty may present as generalized functional decline",
      "C": "Agitation in this setting effectively excludes medical illness as the cause",
      "D": "One normal vital sign meaningfully excludes serious underlying disease here"
    },
    "answer": "B",
    "explanation": "Frailty often converts organ-specific illness into global decompensation such as weakness, agitation, and reduced intake. Behavioral explanations are tempting but unsafe. Refusal to stand may reflect delirium, orthostasis, pain, or weakness. A normal individual vital sign does not exclude serious illness because older adults can have muted physiologic responses."
  },
  {
    "id": 14,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "A 91-year-old woman with hearing loss and dementia presents with new restlessness and falls. Her family reports she has been taking diphenhydramine nightly. What mechanism best explains the presentation?",
    "options": {
      "A": "Hearing loss usually causes falls primarily through underlying vestibular failure",
      "B": "Anticholinergic medication adverse effects can closely mimic acute illness syndromes",
      "C": "Nightly antihistamine use generally helps prevent delirium in older adults",
      "D": "Dementia itself sufficiently explains all new acute behavioral changes"
    },
    "answer": "B",
    "explanation": "Anticholinergic drugs can precipitate delirium, urinary retention, constipation, and falls in older adults. Hearing loss may complicate communication but does not explain the acute syndrome. Dementia increases vulnerability to delirium, but it does not account for new symptoms by itself. Diphenhydramine is a classic medication trigger rather than a preventive agent."
  },
  {
    "id": 15,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An older adult with chronic cough is admitted for confusion and weakness. Chest radiograph shows an old infiltrate unchanged from prior imaging. What is the best diagnostic interpretation?",
    "options": {
      "A": "This radiograph abnormality adequately explains the new acute mental status change",
      "B": "Confusion in older adults cannot result from any respiratory disease",
      "C": "This unchanged chronic imaging finding may simply be an incidental abnormality",
      "D": "Any visible lung shadow on imaging confirms acute pneumonia immediately"
    },
    "answer": "C",
    "explanation": "Chronic or unchanged imaging abnormalities are common and may not explain the new syndrome. Clinical correlation with timeline, exam, oxygenation, and baseline status is required. A lung shadow does not automatically confirm acute pneumonia. Conversely, confusion can accompany respiratory illness, but the clinician must avoid assuming that every chronic abnormality is causal."
  },
  {
    "id": 16,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An 86-year-old woman with stage 4 chronic kidney disease has new confusion, reduced intake, and dry mucous membranes. Which principle is most relevant to the workup?",
    "options": {
      "A": "Acute kidney disease is irrelevant unless the creatinine level becomes extreme",
      "B": "Renal disease prevents obtaining any useful history from the patient",
      "C": "Delirium should be diagnosed only after obtaining brain imaging first",
      "D": "Medication review and assessment of volume status may reveal reversible causes"
    },
    "answer": "D",
    "explanation": "Medication adverse effects and dehydration are common reversible causes of delirium and functional decline, and kidney disease increases vulnerability to drug accumulation and metabolic disturbances. A brain scan is not the first required step unless focal neurologic findings suggest it. Kidney disease does not prevent history taking, although collateral history may be needed."
  },
  {
    "id": 17,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An 82-year-old man has a new fall, no fever, and normal white blood cell count. He seems slower and less engaged than usual. What is the best conclusion?",
    "options": {
      "A": "New falls may signal acute illness despite reassuring laboratory findings",
      "B": "Falls in older adults usually represent unavoidable consequences of aging",
      "C": "Slower behavior is generally reassuring when no pain is being reported",
      "D": "Normal laboratory values effectively exclude any significant acute underlying illness"
    },
    "answer": "A",
    "explanation": "Older adults can have serious illness with muted laboratory and vital sign abnormalities. New falls and functional slowing are warning signs that warrant evaluation for infection, medication effects, orthostasis, arrhythmia, neurologic disease, and metabolic problems. Falls should not be dismissed as inevitable aging. Lack of pain reporting does not rule out an acute process."
  },
  {
    "id": 18,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "A long-term care resident has delirium, constipation, and urinary retention after starting an opioid. What is the best reasoning about the symptom cluster?",
    "options": {
      "A": "Constipation in older adults is unrelated to delirium development altogether",
      "B": "Urinary retention means infection cannot possibly be present simultaneously",
      "C": "Symptoms arising after medication changes are usually merely coincidental findings",
      "D": "The opioid may be a common reversible precipitant of this cluster"
    },
    "answer": "D",
    "explanation": "Opioids can precipitate delirium directly and indirectly through constipation and urinary retention, especially in frail older adults. Constipation is a frequent and reversible contributor to delirium. Urinary retention does not exclude infection. A tight temporal relationship between a medication change and new symptoms should raise suspicion for an adverse drug effect rather than coincidence."
  },
  {
    "id": 19,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An older adult with baseline mild cognitive impairment is sent from assisted living for poor appetite and a fall. Which history element is most useful for diagnostic reasoning?",
    "options": {
      "A": "The patient’s favorite foods and preferred meals before this illness",
      "B": "Whether the patient has always tended to sleep very lightly",
      "C": "The family history of dementia among distant biological relatives",
      "D": "The exact baseline ability to walk, eat, and toilet independently"
    },
    "answer": "D",
    "explanation": "Comparison with the patient’s own baseline function is central to assessing acute change. Walking, eating, toileting, and transfer ability help distinguish chronic impairment from new decompensation. Food preference and sleep habits are less useful here. Family history does not explain the acute presentation."
  },
  {
    "id": 20,
    "domain": "diagnostic_reasoning",
    "chapter": 2,
    "question": "An 89-year-old man with frailty and advanced heart disease develops delirium during an acute illness. His family asks whether to pursue a broad invasive workup. What principle best guides care?",
    "options": {
      "A": "Goals of care should guide the intensity of diagnostic evaluation",
      "B": "Frailty means no diagnostic evaluation should ever be offered at all",
      "C": "An invasive workup is always required whenever delirium is present",
      "D": "Family preferences should completely replace clinical judgment in decision making"
    },
    "answer": "A",
    "explanation": "In older adults with frailty and serious comorbidity, diagnostic intensity should reflect prognosis, reversibility, and patient goals. Frailty does not prohibit evaluation, but it changes the balance of benefit and burden. Delirium alone does not mandate invasive testing. Family input informs, but does not replace, clinician judgment and the patient’s preferences when known."
  },
  {
    "id": 21,
    "domain": "stewardship",
    "chapter": 3,
    "question": "An 82-year-old nursing home resident has confusion and a positive urine culture, but no urinary symptoms or fever. What is the best next step?",
    "options": {
      "A": "Repeat the urine culture and begin antimicrobial treatment immediately afterward",
      "B": "Start broad-spectrum antibiotics for presumed urinary infection despite absent localizing symptoms",
      "C": "Observe closely and evaluate for noninfectious causes contributing to the delirium episode",
      "D": "Treat only when the urine appears cloudy and has a foul odor"
    },
    "answer": "C",
    "explanation": "Confusion alone does not diagnose urinary tract infection in an older adult. A positive urine culture may represent asymptomatic bacteriuria, which should not be treated in the absence of urinary symptoms or systemic instability. Broad-spectrum antibiotics and repeat cultures add harm without clarifying the syndrome. Cloudy or foul-smelling urine is not a reliable indication for treatment."
  },
  {
    "id": 22,
    "domain": "stewardship",
    "chapter": 3,
    "question": "Which finding most strongly supports antibiotic treatment for suspected urinary infection in an older adult?",
    "options": {
      "A": "Isolated pyuria detected incidentally during routine screening without urinary symptoms",
      "B": "Malodorous urine observed in a long-term care resident with dementia",
      "C": "Chronic urinary incontinence with bacteriuria identified on a routine urine culture",
      "D": "New dysuria with suprapubic pain accompanied by fever in an older adult"
    },
    "answer": "D",
    "explanation": "Localizing urinary symptoms with fever support symptomatic urinary tract infection. Chronic incontinence, malodorous urine, and isolated pyuria are poor discriminators and often reflect colonization or chronic inflammation. Screening cultures in asymptomatic older adults commonly lead to overtreatment."
  },
  {
    "id": 23,
    "domain": "stewardship",
    "chapter": 3,
    "question": "An 87-year-old with cough, rhinorrhea, and low-grade fever has stable oxygenation and no focal lung findings. What is the best stewardship approach?",
    "options": {
      "A": "Treat with both antibiotics and antivirals to provide broad combined coverage",
      "B": "Start antibiotics because older adults often have underlying bacterial respiratory infection",
      "C": "Provide supportive care and avoid prescribing routine antibiotics for this illness",
      "D": "Order serial blood cultures before deciding whether antimicrobial treatment is necessary"
    },
    "answer": "C",
    "explanation": "This syndrome is most consistent with a viral respiratory illness, and antibiotics do not treat viral disease. Older age alone does not justify bacterial coverage. Blood cultures are not routinely helpful in a stable outpatient respiratory syndrome, and combined antibiotic and antiviral therapy is not indicated without evidence of bacterial infection."
  },
  {
    "id": 24,
    "domain": "stewardship",
    "chapter": 3,
    "question": "An older adult with influenza-like illness presents within 48 hours of symptom onset and has high-risk comorbidity. What is the most appropriate targeted therapy if influenza is suspected?",
    "options": {
      "A": "Give corticosteroids and reserve antivirals only for severe influenza pneumonia",
      "B": "Use an appropriate antiviral instead of giving empiric antibiotics for influenza",
      "C": "Start broad-spectrum antibiotics for possible bacterial coinfection despite suspected influenza",
      "D": "Withhold all treatment until the viral culture result is available"
    },
    "answer": "B",
    "explanation": "Selected older adults with suspected influenza may benefit from antiviral therapy when treatment is started early. Antibiotics do not treat influenza and should not be used simply because the patient is older or hospitalized. Waiting for culture confirmation can delay therapy beyond the window of benefit, and steroids are not a substitute for antiviral treatment."
  },
  {
    "id": 25,
    "domain": "stewardship",
    "chapter": 3,
    "question": "A frail 79-year-old receives empiric antibiotics for sepsis. Blood cultures and imaging later do not support bacterial infection. What stewardship action is best?",
    "options": {
      "A": "Switch to an oral antibiotic and continue treating despite uncertainty",
      "B": "Add a second antimicrobial agent to achieve broader empiric coverage",
      "C": "Stop antibiotics when bacterial infection is no longer supported by data",
      "D": "Continue antibiotics to complete a customary full treatment course anyway"
    },
    "answer": "C",
    "explanation": "If subsequent data do not support bacterial infection, antibiotics should be discontinued rather than completed by default. Continuing or broadening therapy exposes the patient to avoidable harm. Switching to oral therapy still treats a condition that may not exist."
  },
  {
    "id": 26,
    "domain": "stewardship",
    "chapter": 3,
    "question": "Which adverse outcome is especially relevant when broad-spectrum antibiotics are used repeatedly in older adults?",
    "options": {
      "A": "Improved appetite and consistently lower risk of falls during treatment",
      "B": "Guaranteed prevention of future urinary infections in vulnerable older adults",
      "C": "Clostridioides difficile infection and selection of resistant organisms with repeated exposure",
      "D": "Reduced risk of delirium arising from all possible underlying causes"
    },
    "answer": "C",
    "explanation": "Broad-spectrum antibiotic exposure increases the risk of C difficile infection and selects for resistant organisms. These harms are particularly important in older adults with frailty, multimorbidity, and repeated healthcare contact. Antibiotics do not improve appetite, prevent delirium, or reliably prevent future infection."
  },
  {
    "id": 27,
    "domain": "stewardship",
    "chapter": 3,
    "question": "An 85-year-old with pneumonia is improving after IV antibiotics and is hemodynamically stable. What is the best stewardship next step?",
    "options": {
      "A": "Extend treatment automatically because the patient is of advanced age",
      "B": "Add anaerobic antimicrobial coverage to improve treatment response further",
      "C": "De-escalate therapy and switch to oral treatment when clinically feasible",
      "D": "Maintain intravenous therapy until hospital discharge regardless of clinical improvement"
    },
    "answer": "C",
    "explanation": "Once the patient is stable and able to take oral medication, de-escalation and oral step-down are appropriate if an effective oral option exists. Continued IV therapy without need increases line complications and burden. Added anaerobic coverage and automatic prolongation are not justified by age alone."
  },
  {
    "id": 28,
    "domain": "stewardship",
    "chapter": 3,
    "question": "A long-term care resident has bacteriuria found during evaluation for weakness and falls, but no urinary symptoms. What is the most appropriate interpretation?",
    "options": {
      "A": "Occult pyelonephritis that should be presumed until disproven by imaging",
      "B": "Definite urinary infection that requires immediate antibiotic therapy without delay",
      "C": "A sufficient reason to prescribe antibiotics after the culture returns",
      "D": "Likely asymptomatic bacteriuria rather than a urinary infection requiring treatment"
    },
    "answer": "D",
    "explanation": "Bacteriuria is common in older long-term care residents and often represents colonization. Weakness and falls are nonspecific and do not establish urinary infection. Treating incidental bacteriuria does not improve outcomes in most cases and exposes the patient to harm."
  },
  {
    "id": 29,
    "domain": "stewardship",
    "chapter": 3,
    "question": "Which medication issue should be reviewed before prescribing antibiotics to a frail older adult?",
    "options": {
      "A": "Whether the antibiotic regimen offers the lowest total pill count",
      "B": "Only the patient’s personal dietary preference regarding medication timing",
      "C": "Whether the urine appears dark or unusually concentrated today",
      "D": "Potential drug interactions and the need for renal dose adjustment"
    },
    "answer": "D",
    "explanation": "Older adults have higher risk from drug interactions, renal impairment, and cumulative medication burden. Antibiotic choice should account for concurrent anticoagulants, hypoglycemics, psychotropics, and kidney function. Pill count and urine appearance do not address the major safety issues."
  },
  {
    "id": 30,
    "domain": "stewardship",
    "chapter": 3,
    "question": "An older adult in assisted living has mild cough and nasal congestion, reliable follow-up, and uncertain bacterial risk. Which stewardship strategy may be reasonable?",
    "options": {
      "A": "Admit to the hospital for intravenous antibiotics despite clinical stability",
      "B": "Offer no diagnosis and arrange no specific follow-up or reassessment",
      "C": "Prescribe immediate broad-spectrum antibiotics primarily for added diagnostic safety",
      "D": "Use a delayed prescription with clear return precautions and follow-up instructions"
    },
    "answer": "D",
    "explanation": "In selected outpatient respiratory syndromes with uncertain bacterial likelihood, a delayed prescription can reduce unnecessary antibiotic use when follow-up is reliable. This approach must be paired with clear instructions and reassessment. Immediate broad-spectrum treatment and hospitalization are not appropriate when the patient is stable."
  },
  {
    "id": 31,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "An 82-year-old woman with sarcopenia needs a renally cleared drug with a narrow therapeutic window. Serum creatinine is 0.8 mg/dL. What is the best interpretation?",
    "options": {
      "A": "Creatinine may overestimate renal function when muscle mass is significantly reduced.",
      "B": "Albumin concentration can replace creatinine when making medication dosing decisions.",
      "C": "Renal function is likely normal because the creatinine value remains within range.",
      "D": "Advanced age alone removes any need for renal dose adjustment decisions."
    },
    "answer": "A",
    "explanation": "Low muscle mass reduces creatinine generation, so serum creatinine can look normal despite impaired filtration. That makes creatinine-based estimates vulnerable to overestimating kidney function. Renal dose adjustment may still be needed. Age alone does not remove the need for adjustment. Albumin affects protein binding, not filtration, so it cannot replace kidney assessment."
  },
  {
    "id": 32,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "A frail older adult with hypoalbuminemia is receiving a highly protein bound medication. What change is most likely?",
    "options": {
      "A": "Renal clearance becomes zero once protein binding is significantly reduced overall.",
      "B": "A lower free fraction is expected, with a reduced pharmacologic effect.",
      "C": "No change in active drug exposure occurs, regardless of albumin concentration.",
      "D": "A higher free fraction is expected, with possible increased toxicity risk."
    },
    "answer": "D",
    "explanation": "When albumin is low, the unbound fraction of a highly protein bound drug can rise, increasing active exposure and toxicity risk. The total concentration may appear misleadingly low or normal. Protein binding changes do not make renal clearance zero, and they do not guarantee reduced effect."
  },
  {
    "id": 33,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "Which dosing principle is most appropriate for a needed loading dose in an older adult with chronic kidney disease?",
    "options": {
      "A": "Avoid loading doses routinely in older adults, regardless of clinical urgency.",
      "B": "Reduce the loading dose because impaired clearance lowers drug elimination substantially.",
      "C": "Base the loading dose primarily on volume of distribution and target concentration.",
      "D": "Use albumin concentration alone when calculating the appropriate loading dose initially."
    },
    "answer": "C",
    "explanation": "Loading doses are determined mainly by volume of distribution and target concentration, not by clearance. Renal impairment affects maintenance dosing more than the initial loading dose. Older adults may still need a loading dose if rapid therapeutic exposure is required. Albumin may influence distribution for some drugs but is not the sole determinant."
  },
  {
    "id": 34,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "A patient with acute kidney injury is receiving a drug eliminated mainly by the kidneys. What is the safest approach?",
    "options": {
      "A": "Follow creatinine trends, urine output, and repeated clinical reassessment closely.",
      "B": "Disregard kidney function until the serum creatinine level has clearly doubled.",
      "C": "Rely on one calculated eGFR value and continue treatment without changes.",
      "D": "Automatically reduce every medication dose by half without further evaluation."
    },
    "answer": "A",
    "explanation": "In unstable kidney function, any estimating equation can lag behind the true state. Repeated reassessment using creatinine trends, urine output, and clinical status is safer. A single eGFR should not be treated as definitive. Automatic halving of all drugs risks undertreatment and is not pharmacokinetically sound."
  },
  {
    "id": 35,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "Why can hydrophilic drugs behave differently in a cachectic older adult?",
    "options": {
      "A": "Increased body fat stores enlarge the volume of distribution for hydrophilic drugs.",
      "B": "Reduced lean body mass may produce higher peak drug concentrations initially.",
      "C": "Hepatic blood flow alone always determines the clearance of hydrophilic medications.",
      "D": "Extensive protein binding completely prevents toxicity from standard hydrophilic drug doses."
    },
    "answer": "B",
    "explanation": "Hydrophilic drugs distribute mainly into body water and lean tissue. With reduced lean body mass, their apparent volume of distribution may be smaller, increasing peak concentrations after a standard dose. Fat stores mainly affect lipophilic drugs. Hepatic blood flow and protein binding may matter for some drugs but do not explain this pattern alone."
  },
  {
    "id": 36,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "A delirious older adult with poor oral intake needs prompt treatment. Which factor most strongly argues against relying on oral absorption?",
    "options": {
      "A": "Recent poor intake and unstable swallowing make oral administration unreliable now.",
      "B": "A longstanding history of chronic hypertension is present in the medical record.",
      "C": "A low body temperature alone is noted on initial triage evaluation.",
      "D": "A normal pulse oximetry value is documented during the current assessment."
    },
    "answer": "A",
    "explanation": "Poor oral intake and unstable swallowing make oral absorption and reliable administration uncertain. Delirium adds adherence risk. Chronic hypertension, pulse oximetry, and low temperature do not directly answer whether the drug will be absorbed or taken reliably."
  },
  {
    "id": 37,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "Which statement about creatinine-based estimating equations is most accurate for drug dosing in frail older adults?",
    "options": {
      "A": "All estimating equations are interchangeable for dosing every medication in practice.",
      "B": "Measured serum creatinine always outweighs bedside clinical assessment for dosing decisions.",
      "C": "The choice of equation can matter when muscle mass is especially low.",
      "D": "Only chronological age, not kidney function, meaningfully changes medication dosing."
    },
    "answer": "C",
    "explanation": "Estimates can diverge in frail older adults, especially at low muscle mass or extremes of body size. Equation choice may matter depending on the drug label or institutional protocol. Measured serum creatinine alone is not enough, and age-related changes do not replace kidney assessment."
  },
  {
    "id": 38,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "A patient has low albumin and a very high total level of a protein bound drug but no toxicity. What is the best next step?",
    "options": {
      "A": "Assess the free level, sampling time, and overall clinical status carefully.",
      "B": "Disregard the result because elevated total levels are always clinically meaningless.",
      "C": "Stop the medication immediately in all cases, regardless of bedside findings.",
      "D": "Increase the dose to compensate for reduced albumin binding capacity."
    },
    "answer": "A",
    "explanation": "In hypoalbuminemia, total levels can misrepresent active exposure. The free concentration, timing of the sample, and the bedside exam should guide interpretation. Not every high total level means toxicity, and not every low albumin state requires stopping therapy or increasing the dose."
  },
  {
    "id": 39,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "Which maintenance strategy best fits a renally cleared drug with accumulation risk?",
    "options": {
      "A": "Skip reassessment entirely after writing the initial maintenance prescription today.",
      "B": "Continue the same regimen regardless of current renal function measurements.",
      "C": "Use larger doses at shorter intervals to preserve peak concentrations.",
      "D": "Reduce the dose or extend the interval, depending on the medication."
    },
    "answer": "D",
    "explanation": "Maintenance dosing is governed by clearance. Depending on the pharmacology, clinicians may reduce the dose, extend the interval, or both. Larger and more frequent doses increase accumulation risk. Reassessment is essential because renal function and clinical status change over time."
  },
  {
    "id": 40,
    "domain": "pharmacokinetics",
    "chapter": 4,
    "question": "An older adult is discharged after an episode of AKI while taking a renally cleared medication. What discharge element most improves safety?",
    "options": {
      "A": "Discontinuation of all medications without any explanation or monitoring instructions.",
      "B": "A nonspecific note that medication dosing may need review at some point.",
      "C": "Documentation of the renal estimate used and a clear follow-up plan.",
      "D": "No laboratory follow-up if symptoms seem improved after hospital discharge."
    },
    "answer": "C",
    "explanation": "Transitions of care should specify the renal estimate used, the dosing rationale, and the planned timing for repeat labs or reassessment. Vague instructions are unsafe. Stopping all medications is unnecessarily disruptive, and symptom improvement does not eliminate the need for follow-up after AKI."
  },
  {
    "id": 41,
    "domain": "sepsis",
    "chapter": 5,
    "question": "An 82 year old nursing home resident becomes acutely confused and weak. He is afebrile, hypotensive, and has a lactate of 3.2 mmol per L. What is the best next step?",
    "options": {
      "A": "Treat the suspected infection only if fever develops later during observation",
      "B": "Obtain cultures, begin broad antibiotics, and start immediate hemodynamic resuscitation without delay",
      "C": "Delay antibiotics and fluids until imaging first confirms an infectious source",
      "D": "Observe closely for 12 hours before initiating antibiotics or hemodynamic support"
    },
    "answer": "B",
    "explanation": "This presentation is consistent with sepsis with organ dysfunction, even without fever. Cultures and treatment should proceed promptly in parallel with resuscitation. Observation delays needed care. Fever is not required. Imaging can help identify source, but therapy should not wait for confirmatory imaging when the patient is unstable."
  },
  {
    "id": 42,
    "domain": "sepsis",
    "chapter": 5,
    "question": "Which finding in an older adult most strongly supports septic shock rather than uncomplicated infection?",
    "options": {
      "A": "Elevated lactate with persistent hypotension despite initial fluid resuscitation strongly suggests shock",
      "B": "Localized pain at an infected wound suggests infection without systemic circulatory collapse",
      "C": "Positive urine culture in a stable patient may reflect colonization, not shock",
      "D": "Mild leukocytosis without symptoms or hemodynamic instability may occur with infection"
    },
    "answer": "A",
    "explanation": "Persistent hypotension with elevated lactate indicates impaired perfusion and supports septic shock in the right clinical context. Mild leukocytosis and localized pain can occur with infection without shock. A positive urine culture alone does not establish shock or even symptomatic infection."
  },
  {
    "id": 43,
    "domain": "sepsis",
    "chapter": 5,
    "question": "An older woman with heart failure and suspected sepsis remains hypotensive after an initial fluid bolus. What is the most appropriate next step?",
    "options": {
      "A": "Withhold vasopressors until central venous access is obtained and confirmed radiographically",
      "B": "Stop all resuscitative treatment because underlying heart failure limits further management",
      "C": "Continue repeated large fluid boluses despite hypotension and underlying heart failure",
      "D": "Start norepinephrine promptly and reassess perfusion, volume status, and end organ response"
    },
    "answer": "D",
    "explanation": "When hypotension persists after reasonable fluid, vasopressors are indicated. Norepinephrine is the usual first line agent. Repeated large boluses risk pulmonary edema in heart failure. Vasopressors can begin through a well placed peripheral line while central access is arranged if needed. Heart failure changes dosing vigilance, not the need for treatment."
  },
  {
    "id": 44,
    "domain": "sepsis",
    "chapter": 5,
    "question": "What is the best interpretation of an elevated lactate in suspected sepsis?",
    "options": {
      "A": "Specific evidence identifying the urinary tract as the infection source",
      "B": "A severity marker requiring interpretation within the broader clinical perfusion context",
      "C": "Definitive proof of bacterial infection even without other supporting clinical findings",
      "D": "A laboratory finding that reliably excludes dehydration or volume depletion"
    },
    "answer": "B",
    "explanation": "Lactate is useful for severity and perfusion assessment, but it is not specific for infection or for any source. It can rise with hypoperfusion, adrenergic stress, impaired clearance, and other conditions. Dehydration can coexist with elevated lactate, so lactate does not exclude it."
  },
  {
    "id": 45,
    "domain": "sepsis",
    "chapter": 5,
    "question": "Which geriatric feature most often causes sepsis to present without classic fever?",
    "options": {
      "A": "Excess muscle mass in older adults usually decreases body heat production",
      "B": "Universal inability to mount leukocytosis explains afebrile infection in all elders",
      "C": "Blunted immune and inflammatory responses often reduce febrile manifestations in aging",
      "D": "Higher baseline temperature in aging commonly masks fever during severe infections"
    },
    "answer": "C",
    "explanation": "Older adults often have a muted inflammatory response, so fever and leukocytosis may be absent or less pronounced. Increased muscle mass is not the explanation. Baseline temperature does not universally rise with age. Leukocytosis can still occur, so universal absence is incorrect."
  },
  {
    "id": 46,
    "domain": "sepsis",
    "chapter": 5,
    "question": "A frail older man with sepsis has a heel abscess. Which intervention most directly addresses the infection nidus?",
    "options": {
      "A": "Recommend bed rest and antipyretics while monitoring the abscess conservatively",
      "B": "Perform urgent drainage and debridement to achieve timely source control",
      "C": "Provide escalating oxygen therapy alone without addressing the purulent collection",
      "D": "Wait for repeat blood cultures before intervening on the infected heel"
    },
    "answer": "B",
    "explanation": "Source control is central in sepsis and includes drainage, debridement, or removal of infected material when indicated. Oxygen and antipyretics do not remove the source. Repeat blood cultures may help follow response, but they do not replace source control."
  },
  {
    "id": 47,
    "domain": "sepsis",
    "chapter": 5,
    "question": "Blood cultures should be obtained in suspected sepsis when doing so will not cause meaningful delay. Why?",
    "options": {
      "A": "They can identify the pathogen and support later antibiotic narrowing decisions",
      "B": "They confirm that serious infection is always bloodstream based in sepsis",
      "C": "They replace the need for imaging when localizing the infectious source",
      "D": "They determine whether vasopressor therapy is indicated during resuscitation efforts"
    },
    "answer": "A",
    "explanation": "Cultures help identify the pathogen and support antimicrobial narrowing. They do not prove every infection is bloodstream based, and they do not replace imaging or determine vasopressor need. Treatment should still begin promptly after cultures are drawn."
  },
  {
    "id": 48,
    "domain": "sepsis",
    "chapter": 5,
    "question": "An older adult with sepsis has rising creatinine and minimal urine output after fluids. What should the clinician reassess first?",
    "options": {
      "A": "Whether the antibiotic regimen should be stopped immediately despite ongoing dysfunction",
      "B": "Whether fever has developed yet since initial treatment and fluid administration",
      "C": "Perfusion, adequacy of source control, and possible medication related kidney injury",
      "D": "Whether the white blood cell count remains within the normal range"
    },
    "answer": "C",
    "explanation": "Persistent organ dysfunction should trigger reassessment of perfusion, adequacy of source control, and nephrotoxic or sedating medications. Fever and white count are not the key determinants of response. Antibiotics should not be stopped reflexively before the source and trajectory are clarified."
  },
  {
    "id": 49,
    "domain": "sepsis",
    "chapter": 5,
    "question": "Which statement best describes antibiotic management after initial stabilization in sepsis?",
    "options": {
      "A": "Stop therapy as soon as blood pressure improves after initial resuscitation",
      "B": "Continue broad spectrum therapy indefinitely regardless of microbiology or patient improvement",
      "C": "Avoid culture guided antibiotic changes in older adults due to age alone",
      "D": "Narrow therapy when cultures, source data, and clinical course safely permit"
    },
    "answer": "D",
    "explanation": "Antibiotic stewardship requires de escalation when microbiology and clinical data support it. Broad therapy should not continue indefinitely without indication. Hemodynamic improvement does not by itself justify stopping therapy. Older adults benefit from culture guided adjustment as much as younger patients."
  },
  {
    "id": 50,
    "domain": "sepsis",
    "chapter": 5,
    "question": "An older woman with suspected sepsis is improving, but delirium and weakness persist. What is the best interpretation?",
    "options": {
      "A": "Persistent delirium alone proves current treatment has failed and infection persists",
      "B": "Organ recovery may lag behind normalized vitals and early laboratory improvement",
      "C": "Weakness after severe illness means the original sepsis diagnosis was incorrect",
      "D": "Further rehabilitation is never useful once weakness follows a septic episode"
    },
    "answer": "B",
    "explanation": "In older adults, cognitive and functional recovery often lags behind blood pressure or lactate improvement. Persistent delirium alone does not prove treatment failure, though it should prompt reassessment. Weakness is common after severe illness, and rehabilitation can be very helpful."
  },
  {
    "id": 51,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 79-year-old woman has sore throat, cough, rhinorrhea, and hoarseness for two days. Examination shows no exudate or tender nodes. Best management?",
    "options": {
      "A": "Obtain an urgent neck CT scan to evaluate uncomplicated upper airway symptoms.",
      "B": "Start azithromycin treatment for presumed viral laryngitis despite minimal expected benefit.",
      "C": "Prescribe amoxicillin now for presumed streptococcal pharyngitis despite clear viral features.",
      "D": "Provide supportive care only, without antibiotics, for likely self-limited viral pharyngitis."
    },
    "answer": "D",
    "explanation": "Viral features dominate, and uncomplicated acute pharyngitis in older adults is usually self limited. Supportive care is appropriate. Amoxicillin treats confirmed or strongly suspected group A streptococcal disease, which is less likely here. CT imaging is reserved for concern about deep space infection, abscess, or airway compromise. Azithromycin does not treat viral laryngitis and adds avoidable interaction and adverse effect risk."
  },
  {
    "id": 52,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 72-year-old man has facial pressure, purulent nasal drainage, and worsening symptoms after initial improvement 10 days ago. Best next step?",
    "options": {
      "A": "Start amoxicillin clavulanate for likely acute bacterial rhinosinusitis after double worsening.",
      "B": "Reassure him that bacterial sinusitis is impossible despite this worsening pattern.",
      "C": "Order sinus CT immediately to confirm the diagnosis before any treatment.",
      "D": "Give levofloxacin routinely for all sinus symptoms regardless of severity or course."
    },
    "answer": "A",
    "explanation": "A worsening course after initial improvement is consistent with acute bacterial rhinosinusitis, for which amoxicillin clavulanate is an appropriate initial option in adults. Sinus CT is not needed for routine diagnosis. Reassurance alone misses a likely bacterial syndrome. Levofloxacin is not a preferred routine option and carries important adverse effect and interaction risks in older adults."
  },
  {
    "id": 53,
    "domain": "respiratory",
    "chapter": 6,
    "question": "An 84-year-old woman has otalgia and itching after using hearing aids. The canal is tender and swollen. Tympanic membrane is intact. Best treatment?",
    "options": {
      "A": "Provide no treatment because advanced age supposedly protects against this infection.",
      "B": "Use topical therapy for otitis externa with local care and canal treatment.",
      "C": "Prescribe oral amoxicillin for otitis media despite an intact tympanic membrane.",
      "D": "Arrange immediate mastoid surgery for isolated external canal tenderness and swelling."
    },
    "answer": "B",
    "explanation": "Canal tenderness, swelling, and hearing aid use point to otitis externa, which is usually treated with local care and topical therapy. Oral amoxicillin is aimed at middle ear infection, not external canal disease. Mastoid surgery is irrelevant without mastoiditis or invasive infection. Older age does not protect from otitis externa or its complications."
  },
  {
    "id": 54,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 68-year-old man has cough for nine days without dyspnea, fever, or focal lung findings. He requests antibiotics because sputum is yellow. Best response?",
    "options": {
      "A": "Order bronchoscopy now to define the cause of this uncomplicated cough.",
      "B": "Prescribe doxycycline because yellow sputum alone proves a bacterial lower infection.",
      "C": "Explain that acute bronchitis rarely benefits from antibiotics, despite yellow sputum.",
      "D": "Admit him for intravenous antibiotics and oxygen despite stable examination findings."
    },
    "answer": "C",
    "explanation": "Acute bronchitis is usually viral and inflammatory, so antibiotics rarely help. Yellow sputum alone does not establish bacterial infection. Doxycycline is not indicated on sputum color alone. Admission and bronchoscopy are unnecessary without red flags such as hypoxemia, severe dyspnea, focal findings, or concern for an alternative diagnosis."
  },
  {
    "id": 55,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 77-year-old woman with COPD has worsened dyspnea, increased sputum volume, and new purulence. Which treatment is most appropriate?",
    "options": {
      "A": "Prescribe long-term suppressive prednisone as primary management for this flare.",
      "B": "Offer only reassurance and watchful waiting despite increased purulent sputum production.",
      "C": "Start a high-dose proton pump inhibitor to treat her respiratory worsening.",
      "D": "Give a short-acting bronchodilator plus an antibiotic for this exacerbation."
    },
    "answer": "D",
    "explanation": "This presentation is compatible with a bacterial COPD exacerbation, where bronchodilator therapy and antibiotics are often appropriate. Reassurance alone may undertreat a clinically significant exacerbation. Proton pump inhibitors do not address the syndrome. Long-term suppressive prednisone is not standard management and would expose the patient to substantial harm."
  },
  {
    "id": 56,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 74-year-old man has paroxysmal cough for three weeks and vomits after coughing. His grandchild is a newborn. Best next action?",
    "options": {
      "A": "Test for pertussis and begin macrolide treatment to reduce possible transmission.",
      "B": "Ignore infant exposure because adults cannot spread pertussis to vulnerable contacts.",
      "C": "Use inhaled corticosteroids routinely for all cases of posttussive emesis.",
      "D": "Treat this only as uncomplicated acute bronchitis despite classic pertussis features."
    },
    "answer": "A",
    "explanation": "Prolonged paroxysmal cough with posttussive emesis raises concern for pertussis, especially when infant exposure is present. Testing and macrolide treatment are appropriate to reduce transmission, and earlier treatment can help symptoms if given early enough. Acute bronchitis is too nonspecific. Adults do transmit pertussis. Inhaled corticosteroids are not the primary treatment for pertussis."
  },
  {
    "id": 57,
    "domain": "respiratory",
    "chapter": 6,
    "question": "An 86-year-old man with mild dementia and CKD is thought to have sinus infection. He is afebrile and has bilateral congestion for four days. Best approach?",
    "options": {
      "A": "Start immediate antibiotics for possible bacterial sinusitis despite short symptom duration.",
      "B": "Obtain sinus CT before deciding treatment for routine outpatient congestion symptoms.",
      "C": "Send a nasal culture to guide urgent therapy for uncomplicated congestion.",
      "D": "Observe with symptomatic therapy for likely uncomplicated viral rhinosinusitis initially."
    },
    "answer": "D",
    "explanation": "Short duration, bilateral congestion, and no severe features favor viral rhinosinusitis. Observation and symptomatic therapy are preferred. Immediate antibiotics expose the patient to harm without clear benefit. Sinus CT is not required for routine diagnosis and can be misleading. Nasal cultures are not useful for uncomplicated outpatient sinus symptoms."
  },
  {
    "id": 58,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A frail older adult with sore throat cannot swallow tablets well and has poor intake. Which additional concern should guide management?",
    "options": {
      "A": "Assume the symptoms are psychogenic without pursuing further clinical evaluation.",
      "B": "Choose the strongest antibiotic available regardless of likely cause or tolerance.",
      "C": "Assess hydration status and swallowing safety before relying on oral treatment.",
      "D": "Avoid any examination because advanced age makes assessment unnecessarily burdensome."
    },
    "answer": "C",
    "explanation": "In frail older adults, odynophagia can quickly lead to dehydration and aspiration risk. Hydration and swallowing safety should be assessed before relying on oral treatment. Broadest antibiotics are not safer and may be harmful. Age does not preclude examination. Symptoms should not be dismissed as psychogenic without appropriate evaluation."
  },
  {
    "id": 59,
    "domain": "respiratory",
    "chapter": 6,
    "question": "A 71-year-old woman on warfarin is prescribed azithromycin for cough. Which issue deserves attention?",
    "options": {
      "A": "Prepare for emergent dialysis because this medication requires it routinely.",
      "B": "Anticipate complete loss of benefit from all inhaled respiratory medications.",
      "C": "Watch for potential drug interaction and increased QT prolongation risk.",
      "D": "Expect guaranteed cure of viral bronchitis after starting this antibiotic."
    },
    "answer": "C",
    "explanation": "Macrolides can interact with warfarin and contribute to QT prolongation risk, which is relevant in older adults with polypharmacy. Azithromycin does not cure viral bronchitis. It does not abolish inhaler benefit. Dialysis is not routinely needed and is unrelated to typical macrolide use."
  },
  {
    "id": 60,
    "domain": "respiratory",
    "chapter": 6,
    "question": "An 80-year-old woman with COPD has dyspnea and wheeze after a viral illness. She has difficulty using her inhaler because of tremor and cognitive slowing. Best management issue?",
    "options": {
      "A": "Ignore inhaler technique because devices work automatically without proper coordination.",
      "B": "Stop all bronchodilators immediately despite ongoing wheeze and breathing difficulty.",
      "C": "Reinforce inhaler delivery technique and arrange caregiver support for medication use.",
      "D": "Use antibiotics instead of bronchodilators to manage this obstructive flare."
    },
    "answer": "C",
    "explanation": "Inhaler technique strongly affects COPD outcomes, and older adults with tremor or cognitive impairment often need spacer use, coaching, or caregiver assistance. Stopping bronchodilators worsens symptoms. Antibiotics do not replace bronchodilator therapy when the main issue is airway obstruction. Devices do not work automatically if technique is poor."
  },
  {
    "id": 61,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 82-year-old woman from home has cough, dyspnea, delirium, and a new right lower lobe infiltrate. Which finding most supports pneumonia requiring treatment rather than isolated aspiration pneumonitis?",
    "options": {
      "A": "Normal white blood cell count noted at the time of initial presentation",
      "B": "Transient hypoxemia that improves completely within several hours after supportive treatment",
      "C": "Immediate coughing immediately after a clearly witnessed choking episode during eating",
      "D": "Persistent fever with worsening infiltrate beyond twenty-four hours after the aspiration event"
    },
    "answer": "D",
    "explanation": "Persistent fever and radiographic worsening after a day support bacterial aspiration pneumonia rather than transient chemical pneumonitis. Immediate coughing after choking can occur in either syndrome. Early hypoxemia alone does not distinguish infection from inflammation. A normal white blood cell count does not exclude pneumonia in older adults."
  },
  {
    "id": 62,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 87-year-old man with dysphagia aspirates gastric contents during breakfast and becomes acutely hypoxemic. He has no infiltrate yet and improves with suctioning and oxygen. Best initial management?",
    "options": {
      "A": "Withhold reassessment entirely unless fever or worsening symptoms later develop clinically",
      "B": "Perform immediate intubation after every witnessed aspiration event regardless of severity",
      "C": "Begin broad anaerobic and antipseudomonal antibiotics immediately despite early clinical improvement",
      "D": "Provide supportive care alone without starting immediate antibiotics after the aspiration"
    },
    "answer": "D",
    "explanation": "This presentation is most consistent with aspiration pneumonitis, which is managed with supportive care and close observation. Routine broad antibiotics are not indicated at the outset. Intubation is not automatic and depends on respiratory failure. Reassessment is needed because bacterial infection can develop later."
  },
  {
    "id": 63,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "A frail 79-year-old in assisted living has pneumonia, chronic kidney disease, and baseline QT prolongation. Which empiric regimen choice is most concerning for avoidable harm?",
    "options": {
      "A": "Renal-adjusted beta lactam therapy chosen with attention to kidney function",
      "B": "Beta lactam plus macrolide therapy selected despite possible additive QT effects",
      "C": "Oral step-down therapy after clinical improvement when swallowing safely is possible",
      "D": "Respiratory fluoroquinolone monotherapy despite baseline QT prolongation and chronic kidney disease"
    },
    "answer": "D",
    "explanation": "Respiratory fluoroquinolones can worsen QT prolongation, delirium, dysglycemia, and tendon injury, making them a higher-risk choice in this patient. Renal-adjusted beta lactams are often safer. Beta lactam plus macrolide can also affect QT, but risk depends on the agent and context. Oral step-down after improvement is appropriate when swallowing and stability permit."
  },
  {
    "id": 64,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 85-year-old man with community acquired pneumonia is improving on intravenous therapy. He is afebrile, oxygen needs are falling, and he can swallow safely. Best next step?",
    "options": {
      "A": "Stop all antibiotics immediately because symptoms have already clearly improved clinically",
      "B": "Switch promptly to an appropriate oral antibiotic now that stability is achieved",
      "C": "Continue intravenous antibiotic therapy unchanged until the planned day of discharge",
      "D": "Add routine anaerobic coverage now to prevent future aspiration-related complications"
    },
    "answer": "B",
    "explanation": "When clinical stability returns and oral intake is safe, transition to an oral regimen is appropriate. Prolonging intravenous therapy adds line risk without benefit. Stopping antibiotics immediately is premature unless the treatment course is complete. Routine anaerobic coverage is not needed without abscess, empyema, or necrotizing infection."
  },
  {
    "id": 65,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 80-year-old woman with Parkinson disease and recurrent pneumonia coughs during meals and loses weight. Which intervention most directly addresses the aspiration risk?",
    "options": {
      "A": "Arrange a formal swallowing evaluation to assess dysphagia and feeding safety",
      "B": "Obtain routine chest CT imaging to evaluate repeated pulmonary infiltrates",
      "C": "Prescribe a longer course of antibiotics to reduce recurrent infection risk",
      "D": "Start daily bronchodilator therapy to improve airway clearance during meals"
    },
    "answer": "A",
    "explanation": "Swallowing evaluation identifies dysphagia, guides diet modification, and helps reduce aspiration risk. Longer antibiotics do not prevent aspiration. Bronchodilators do not address the mechanism unless bronchospasm is present. Chest CT may be useful in selected cases but does not correct swallowing dysfunction."
  },
  {
    "id": 66,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 88-year-old nursing facility resident has pneumonia and recent broad-spectrum antibiotic exposure. Which history most increases concern for resistant pathogens?",
    "options": {
      "A": "Prior respiratory culture growing a resistant organism before this current illness",
      "B": "Advanced age alone without any documented prior resistant microbiologic history",
      "C": "Residence in assisted living only without additional healthcare exposure risk",
      "D": "Remote history of seasonal allergies without recent infectious complications or cultures"
    },
    "answer": "A",
    "explanation": "Prior isolation of a resistant organism is a strong predictor of recurrence with the same pathogen class and should influence empiric therapy. Advanced age alone does not predict resistance. Residence in assisted living by itself does not mandate broad coverage. Seasonal allergies are not relevant to bacterial resistance risk."
  },
  {
    "id": 67,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 83-year-old man with pneumonia is confused, hypotensive, and cannot safely take oral medications. What best determines hospital-level care?",
    "options": {
      "A": "A normal chest radiograph despite otherwise concerning clinical presentation findings",
      "B": "Hypoxemia, confusion, and inability to take oral therapy safely together",
      "C": "Presence of a productive cough alone during the current respiratory illness",
      "D": "Age older than eighty years alone without other signs of severity"
    },
    "answer": "B",
    "explanation": "Hypoxemia, confusion, and inability to take oral therapy indicate high severity and the need for inpatient treatment. Age alone does not determine site of care. Productive cough is nonspecific. A normal chest radiograph argues against pneumonia, though early disease can occasionally be radiographically subtle."
  },
  {
    "id": 68,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 86-year-old man develops a large left lower lobe infiltrate and parapneumonic effusion after aspiration. Which component is most appropriate as source control?",
    "options": {
      "A": "Increase the steroid dose temporarily to reduce inflammation around the infection",
      "B": "Recommend bed rest alone without any further procedural or therapeutic intervention",
      "C": "Drain the pleural collection when features suggest a complicated infected effusion",
      "D": "Add a second oral antibiotic agent without addressing the pleural space"
    },
    "answer": "C",
    "explanation": "A complicated parapneumonic effusion or empyema requires drainage as part of source control. Simply adding another antibiotic does not address a loculated pleural infection. Steroids are not standard therapy for this syndrome. Bed rest alone is inadequate when a drainable infected collection is present."
  },
  {
    "id": 69,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 81-year-old woman with dementia and recurrent aspiration pneumonia has limited life expectancy. Which preventive strategy best fits a person-centered approach?",
    "options": {
      "A": "Assume prevention is impossible and discontinue routine oral care measures",
      "B": "Automatically place a feeding tube to prevent all future aspiration episodes",
      "C": "Avoid all future antibiotics regardless of symptoms, comfort, or expressed preferences",
      "D": "Discuss goals about feeding, hospitalization, and antibiotics with patient or family"
    },
    "answer": "D",
    "explanation": "For advanced frailty and dementia, prevention should align with values and expected benefit. Conversations about feeding, hospitalization, and antibiotic goals support shared decision-making. Feeding tubes do not reliably prevent aspiration. Blanket avoidance of antibiotics may conflict with symptom relief goals. Oral care remains a meaningful preventive measure."
  },
  {
    "id": 70,
    "domain": "pneumonia",
    "chapter": 7,
    "question": "An 84-year-old man with pneumonia is receiving a macrolide and takes several psychotropic medications. What is the most relevant medication safety issue?",
    "options": {
      "A": "Permanent hearing loss developing universally after only a single antibiotic dose",
      "B": "Immediate hemolysis occurring predictably in essentially all patients receiving treatment",
      "C": "QT prolongation risk and increased interaction burden with concurrent psychotropic medications",
      "D": "High risk of severe nephrolithiasis developing soon after starting this antibiotic"
    },
    "answer": "C",
    "explanation": "Macrolides can prolong QT interval and add interaction burden, especially in patients already taking other QT-active drugs or psychotropics. Nephrolithiasis is not a typical concern. Hemolysis is not expected in all patients. Hearing loss can occur with some drugs, but not as an immediate universal effect of a single dose."
  },
  {
    "id": 71,
    "domain": "influenza",
    "chapter": 8,
    "question": "An 84-year-old nursing home resident has abrupt weakness, confusion, and cough during influenza season. Which finding most strongly supports influenza in this age group?",
    "options": {
      "A": "Isolated pleuritic chest pain occurring without cough or other respiratory symptoms",
      "B": "Gradually worsening cough progressing slowly over the previous six weeks",
      "C": "Abrupt functional decline accompanied by new delirium during peak community influenza activity",
      "D": "Lifelong chronic hoarseness present continuously since early childhood years"
    },
    "answer": "C",
    "explanation": "Older adults often present with delirium, weakness, anorexia, or loss of function rather than classic fever and myalgias. Sudden functional decline during influenza season should trigger testing and treatment consideration. A prolonged cough suggests another process. Isolated pleuritic pain is not typical for influenza. Chronic hoarseness is unrelated."
  },
  {
    "id": 72,
    "domain": "influenza",
    "chapter": 8,
    "question": "A frail 79-year-old with chronic kidney disease has influenza symptoms for 36 hours. The rapid antigen test is negative, but suspicion remains high. What is the best next step?",
    "options": {
      "A": "Delay one week and repeat testing only if fever later appears",
      "B": "Stop further evaluation because the negative test fully excludes influenza",
      "C": "Begin antiviral treatment immediately without waiting for confirmatory or repeat testing",
      "D": "Treat solely when chest radiography confirms a superimposed pneumonia complication"
    },
    "answer": "C",
    "explanation": "False negative rapid antigen tests occur, especially with suboptimal sampling or lower viral burden. In a high-risk older adult with high clinical suspicion, treatment should not be delayed. Influenza is not excluded by a negative rapid antigen test. Waiting a week risks missed benefit. Pneumonia is not required for treatment."
  },
  {
    "id": 73,
    "domain": "influenza",
    "chapter": 8,
    "question": "Which antiviral regimen is standard for uncomplicated influenza treatment in an older adult, before renal adjustment?",
    "options": {
      "A": "Oseltamivir 75 mg taken once daily for a total of 10 days",
      "B": "Oseltamivir 75 mg taken twice daily for a total of 5 days",
      "C": "Amoxicillin 500 mg taken three times daily for a total of 5 days",
      "D": "Acyclovir 800 mg taken five times daily for a total of 7 days"
    },
    "answer": "B",
    "explanation": "Oseltamivir 75 mg twice daily for 5 days is standard adult influenza treatment, with renal dose adjustment when needed. Once-daily treatment is not the standard regimen for uncomplicated influenza. Acyclovir treats herpesviruses, not influenza. Amoxicillin is an antibacterial drug and does not treat influenza."
  },
  {
    "id": 74,
    "domain": "influenza",
    "chapter": 8,
    "question": "An 88-year-old assisted living resident has wheeze, cough, and mild hypoxemia in December. Influenza testing is negative and RSV is confirmed. What is the most appropriate management?",
    "options": {
      "A": "Start routine oseltamivir treatment specifically targeting confirmed RSV infection",
      "B": "Provide supportive care with supplemental oxygen, hydration, and close monitoring",
      "C": "Withhold therapy because RSV infection in elders is always clinically mild",
      "D": "Give immediate high-dose corticosteroids routinely to every infected patient"
    },
    "answer": "B",
    "explanation": "For most immunocompetent older adults, RSV management is supportive, focusing on oxygenation, hydration, and treatment of bronchospasm or chronic disease exacerbations. Oseltamivir does not treat RSV. RSV can cause serious illness in frail elders, so dismissing it as always mild is wrong. Corticosteroids are not routine for all RSV infections."
  },
  {
    "id": 75,
    "domain": "influenza",
    "chapter": 8,
    "question": "A long term care facility reports three residents with fever, cough, and influenza A. What infection control step is most appropriate immediately?",
    "options": {
      "A": "Wait until every viral result is finalized before beginning precautions",
      "B": "Isolate symptomatic residents promptly and cohort infected individuals when feasible",
      "C": "Reduce routine hand hygiene practices to lessen workload for staff",
      "D": "Discharge all exposed residents immediately without any ongoing symptom monitoring"
    },
    "answer": "B",
    "explanation": "During a facility cluster, source control and cohorting should begin promptly to reduce spread. Waiting for every result delays containment. Hand hygiene remains essential. Exposed residents should be monitored, not simply discharged from surveillance. Prompt action is especially important in congregate settings with frail older adults."
  },
  {
    "id": 76,
    "domain": "influenza",
    "chapter": 8,
    "question": "Which medication is most likely to worsen delirium and fall risk during an acute respiratory virus illness in an older adult?",
    "options": {
      "A": "Plain acetaminophen used intermittently for fever or body aches",
      "B": "Oral rehydration solution given to maintain hydration and electrolytes",
      "C": "A nightly sedative hypnotic taken regularly for sleep initiation",
      "D": "Inhaled supplemental oxygen administered for documented hypoxemia during illness"
    },
    "answer": "C",
    "explanation": "Sedative hypnotics can worsen delirium, impair balance, and increase falls, especially during acute illness. Acetaminophen is generally safer when used appropriately. Oxygen and oral rehydration are supportive measures and do not increase delirium risk in the same way."
  },
  {
    "id": 77,
    "domain": "influenza",
    "chapter": 8,
    "question": "An 81-year-old with heart failure and influenza has poor oral intake, mild hypoxemia, and rising creatinine. Which factor most supports hospital-level care?",
    "options": {
      "A": "The presence of a seasonal cough without additional concerning features",
      "B": "The absence of focal lung crackles on physical examination",
      "C": "A history of receiving influenza vaccination earlier in the year",
      "D": "An inability to maintain hydration safely in the current setting"
    },
    "answer": "D",
    "explanation": "Older adults may need hospitalization when they cannot maintain hydration, oxygenation, or safe function. Rising creatinine and poor intake increase risk. Seasonal cough alone is nonspecific. Vaccination does not eliminate the need for escalation when clinically indicated. Absence of crackles does not rule out significant viral illness."
  },
  {
    "id": 78,
    "domain": "influenza",
    "chapter": 8,
    "question": "A resident with confirmed influenza is improving clinically after three days of oseltamivir. Which approach to therapy is best?",
    "options": {
      "A": "Add empiric antibiotics routinely for every patient with confirmed influenza",
      "B": "Finish the prescribed treatment course unless significant toxicity or intolerance develops",
      "C": "Continue treatment indefinitely until the resident's baseline energy fully returns",
      "D": "Stop antiviral therapy immediately once the cough shows noticeable improvement"
    },
    "answer": "B",
    "explanation": "Standard influenza treatment is a defined course, and clinical improvement does not justify routine early discontinuation. Stopping when cough improves is not standard. Indefinite extension is unnecessary unless a specialist indicates otherwise. Empiric antibiotics are not automatically indicated for influenza without evidence of bacterial infection."
  },
  {
    "id": 79,
    "domain": "influenza",
    "chapter": 8,
    "question": "Which statement best reflects RSV prevention in older adults?",
    "options": {
      "A": "Prior influenza vaccination also prevents subsequent RSV infection in elders",
      "B": "Only antiviral medications can effectively prevent RSV transmission between adults",
      "C": "RSV vaccination may lower infection risk in appropriately eligible older adults",
      "D": "RSV prevention relies primarily on routine antibacterial prophylaxis for contacts"
    },
    "answer": "C",
    "explanation": "Current prevention for eligible older adults includes RSV vaccination, along with source control and outbreak precautions. Antiviral drugs are not the main preventive strategy. Antibacterial prophylaxis does not prevent RSV. Influenza vaccination does not protect against RSV, although it remains essential for influenza prevention."
  },
  {
    "id": 80,
    "domain": "influenza",
    "chapter": 8,
    "question": "A nursing home resident with influenza is being discharged after improvement. What discharge element is most important for safe transition?",
    "options": {
      "A": "A complete record of all childhood vaccines received decades earlier",
      "B": "Clear residual isolation instructions and specific warning signs requiring reevaluation",
      "C": "Advice to seek care again only during the next influenza season",
      "D": "Directions to discontinue every chronic medication after returning home"
    },
    "answer": "B",
    "explanation": "Transitions should specify viral diagnosis, remaining isolation needs, medication plan, and symptoms that require reevaluation. Childhood immunizations are not the priority. Chronic medications should not be stopped without reason. Patients should not wait until the next season to seek care if symptoms worsen."
  },
  {
    "id": 81,
    "domain": "covid",
    "chapter": 9,
    "question": "An 84-year-old with diabetes and frailty develops confusion, poor intake, and a positive home COVID test. What is the best next step?",
    "options": {
      "A": "Order broad autoimmune studies to explain the patient's new cognitive symptoms now",
      "B": "Treat only after chest radiography confirms bilateral pneumonia from COVID infection",
      "C": "Assess illness severity, medication interactions, and eligibility for prompt antiviral treatment initiation",
      "D": "Wait for clear respiratory symptoms before pursuing any treatment decisions or further testing"
    },
    "answer": "C",
    "explanation": "Older adults may present with delirium, anorexia, or functional decline as the dominant manifestations of acute COVID-19. Early severity assessment and rapid review of drug interactions determine whether antiviral therapy can be started within the treatment window. Waiting for respiratory symptoms can miss the period of greatest benefit. Autoimmune testing is not a first-line response, and radiographic pneumonia is not required to justify treatment."
  },
  {
    "id": 82,
    "domain": "covid",
    "chapter": 9,
    "question": "Which outpatient regimen is standard for early COVID-19 treatment when renal function permits full dosing?",
    "options": {
      "A": "Remdesivir 200 mg taken orally once daily for 5 consecutive treatment days",
      "B": "Nirmatrelvir 300 mg plus ritonavir 100 mg twice daily for 5 days",
      "C": "Dexamethasone 6 mg taken orally twice daily for 7 consecutive treatment days",
      "D": "Nirmatrelvir 150 mg plus ritonavir 100 mg once daily for 10 days"
    },
    "answer": "B",
    "explanation": "The standard outpatient regimen is nirmatrelvir 300 mg plus ritonavir 100 mg by mouth twice daily for 5 days when renal function allows full dosing. The other options are incorrect because the dose and schedule are wrong, remdesivir is not an oral drug, and dexamethasone is not routine therapy for uncomplicated mild outpatient infection."
  },
  {
    "id": 83,
    "domain": "covid",
    "chapter": 9,
    "question": "A frail 79-year-old on apixaban, diltiazem, and rosuvastatin has mild COVID-19 and poor oral intake. What is the main prescribing concern?",
    "options": {
      "A": "COVID-19 treatment requires stopping all cardiovascular medications before antiviral prescribing",
      "B": "Nirmatrelvir routinely causes permanent kidney failure in frail older adult patients",
      "C": "Antiviral therapy should never be prescribed for frail patients with COVID-19",
      "D": "Ritonavir can cause major interactions with many chronic medications in older adults"
    },
    "answer": "D",
    "explanation": "Ritonavir is a strong CYP3A inhibitor and can markedly increase levels of many common geriatric medications, including some anticoagulants, statins, antiarrhythmics, and sedatives. The other statements are too absolute or false. Frailty alone is not a contraindication, and cardiovascular medications are not automatically stopped; they are reviewed and adjusted individually."
  },
  {
    "id": 84,
    "domain": "covid",
    "chapter": 9,
    "question": "An older adult with COVID-19 has oxygen saturation 95% on room air and no dyspnea. Which management is most appropriate?",
    "options": {
      "A": "Start immediate high-flow oxygen now to prevent possible future deterioration",
      "B": "Give routine dexamethasone now despite no current oxygen requirement or dyspnea",
      "C": "Provide supportive care without routine supplemental oxygen when saturation remains normal",
      "D": "Provide no monitoring because current symptoms appear mild and uncomplicated"
    },
    "answer": "C",
    "explanation": "Supplemental oxygen is indicated for hypoxemia, not for patients with normal oxygenation. Routine oxygen and routine dexamethasone are not appropriate in uncomplicated mild disease. Older adults still need monitoring because clinical decline can be subtle, but supportive care without oxygen is the correct approach when saturation is preserved."
  },
  {
    "id": 85,
    "domain": "covid",
    "chapter": 9,
    "question": "A 77-year-old recovered from COVID-19 but has persistent fatigue, dyspnea, and cognitive complaints 8 weeks later. What is the best framing?",
    "options": {
      "A": "Treat empirically with antibiotics for presumed hidden bacterial infection now",
      "B": "Dismiss these symptoms as normal aging without further clinical evaluation",
      "C": "Assume these symptoms demonstrate persistent active viral replication from COVID-19",
      "D": "Evaluate for post-acute sequelae and consider possible alternative contributing diagnoses"
    },
    "answer": "D",
    "explanation": "Persistent symptoms after acute infection may reflect post-acute sequelae, deconditioning, medication effects, or unrecognized cardiopulmonary disease. They do not prove ongoing viral replication. Symptoms should not be dismissed as normal aging, and empiric antibiotics are not the default without evidence of bacterial infection."
  },
  {
    "id": 86,
    "domain": "covid",
    "chapter": 9,
    "question": "Which finding in an older adult should raise concern for severe COVID-19 requiring urgent evaluation?",
    "options": {
      "A": "Fever that resolved after two days of uncomplicated home supportive care",
      "B": "New confusion accompanied by oxygen saturation lower than the patient's baseline",
      "C": "Positive COVID test without symptoms and with stable baseline daily function",
      "D": "Mild headache with preserved appetite, comfortable breathing, and normal overall function"
    },
    "answer": "B",
    "explanation": "Delirium plus new hypoxemia is a red flag in older adults and may indicate severe disease or another serious complication. The other findings may occur in mild infection or asymptomatic carriage and do not by themselves signal urgent decompensation."
  },
  {
    "id": 87,
    "domain": "covid",
    "chapter": 9,
    "question": "An 81-year-old with COVID-19 has worsening dyspnea, chest pain, and leg swelling. What should be considered?",
    "options": {
      "A": "Consider hyperthyroidism as the single most likely explanation for these symptoms",
      "B": "Consider post-viral syndrome as the only explanation for this acute deterioration",
      "C": "Choose routine outpatient observation only because these symptoms are generally nonspecific",
      "D": "Consider thromboembolic and cardiac complications rather than attributing everything to pneumonia"
    },
    "answer": "D",
    "explanation": "COVID-19 can be complicated by venous thromboembolism, myocardial injury, heart failure exacerbation, and other acute processes. Chest pain, dyspnea, and swelling warrant evaluation beyond attribution to viral pneumonia alone. Observation without assessment is inadequate, and post-viral syndrome does not explain acute potentially life-threatening findings."
  },
  {
    "id": 88,
    "domain": "covid",
    "chapter": 9,
    "question": "Why can a negative rapid antigen test be insufficient in a symptomatic older adult?",
    "options": {
      "A": "Only antibody-based tests are valid during the acute symptomatic illness",
      "B": "A negative antigen result excludes COVID-19 infection with complete certainty",
      "C": "Rapid antigen tests are never useful diagnostic tools in older adults",
      "D": "A single negative result may miss early infection or low-level viral burden"
    },
    "answer": "D",
    "explanation": "A negative rapid antigen test does not reliably exclude infection when clinical suspicion remains high, especially early in illness. Repeat testing or nucleic acid amplification testing may be needed. Rapid tests can still be useful, and antibody tests are not the primary diagnostic tool for acute infection."
  },
  {
    "id": 89,
    "domain": "covid",
    "chapter": 9,
    "question": "An 86-year-old after COVID-19 hospitalization is weak, deconditioned, and has poor balance. What is the most useful next step?",
    "options": {
      "A": "Recommend prolonged bed rest until all symptoms have completely resolved",
      "B": "Arrange individualized rehabilitation services and practical mobility support after hospitalization",
      "C": "Assume this weakness is permanent, irreversible, and not meaningfully treatable",
      "D": "Stop all current medications immediately to accelerate recovery after hospitalization"
    },
    "answer": "B",
    "explanation": "Post-hospital decline in older adults often improves with rehabilitation, mobility support, and targeted therapy. Prolonged bed rest worsens deconditioning, stopping all medications is unsafe, and many functional deficits are partially reversible with appropriate support and follow-up."
  },
  {
    "id": 90,
    "domain": "covid",
    "chapter": 9,
    "question": "Which medication issue should be reviewed before prescribing ritonavir-containing therapy?",
    "options": {
      "A": "Review oral calcium supplements alone for major potential interactions before prescribing",
      "B": "Review vitamin C alone and dietary fiber for major potential interactions",
      "C": "Review sedatives, statins, anticoagulants, and antiarrhythmics for major potential interactions",
      "D": "Review topical emollients and saline nasal spray for major potential interactions"
    },
    "answer": "C",
    "explanation": "Ritonavir can interact with many common geriatric medications, especially sedatives, statins, anticoagulants, and antiarrhythmics. These interactions can be clinically significant and may require holding, adjusting, or changing therapy. The other items are not typical major interaction concerns."
  },
  {
    "id": 91,
    "domain": "urinary",
    "chapter": 10,
    "question": "An 87-year-old woman with dementia has new confusion and a positive urine culture. She has no dysuria, fever, flank pain, or suprapubic tenderness. What is the best next step?",
    "options": {
      "A": "Evaluate alternative causes and withhold antibiotics in the absence of urinary symptoms",
      "B": "Begin antibiotics for a presumed hidden urinary infection despite lacking localizing signs",
      "C": "Repeat the urine culture and treat only if bacteriuria remains persistent",
      "D": "Obtain computed tomography imaging of the kidneys and bladder for evaluation"
    },
    "answer": "A",
    "explanation": "In older adults, delirium with bacteriuria but no urinary localizing symptoms usually reflects asymptomatic bacteriuria or another illness, not proven urinary infection. The best next step is to evaluate dehydration, medications, constipation, retention, and other sources. Antibiotics are not indicated without a clinical syndrome. Repeating the culture does not establish infection. Imaging is not first-line without focal findings or obstruction concerns."
  },
  {
    "id": 92,
    "domain": "urinary",
    "chapter": 10,
    "question": "A 79-year-old man with an indwelling Foley catheter has fever and suprapubic discomfort. Urine culture is sent. Which action best supports source control?",
    "options": {
      "A": "Add a second empiric antibiotic before urine culture results have returned",
      "B": "Wait for culture results before removing or replacing the current catheter",
      "C": "Promptly remove the catheter, or replace it if ongoing catheterization remains necessary",
      "D": "Collect the urine specimen directly from the drainage bag for culture"
    },
    "answer": "C",
    "explanation": "When catheter-associated symptomatic infection is suspected, the catheter itself can maintain biofilm and perpetuate bacteriuria. Removing the catheter if it is unnecessary, or replacing it if it must remain, is key source control and improves culture interpretation. Collecting urine from the drainage bag is poor practice. Delaying catheter management while waiting for culture misses an important part of treatment."
  },
  {
    "id": 93,
    "domain": "urinary",
    "chapter": 10,
    "question": "An 82-year-old woman has dysuria and urinary frequency without fever or flank pain. She can take oral medications and has no drug allergies. Which syndrome is most consistent with her presentation?",
    "options": {
      "A": "Bacteriuria without symptoms, representing asymptomatic colonization rather than true infection syndrome",
      "B": "Lower urinary tract infection consistent with uncomplicated cystitis and no systemic features",
      "C": "Upper urinary tract infection consistent with acute pyelonephritis and systemic illness",
      "D": "Prostatic infection causing urinary obstruction and pelvic symptoms in an older man"
    },
    "answer": "B",
    "explanation": "Dysuria and frequency without systemic features most strongly suggest lower tract infection, usually cystitis. Pyelonephritis would more often include fever, flank pain, or vomiting. Prostatitis is a male syndrome involving the prostate. Asymptomatic bacteriuria lacks urinary symptoms by definition. The syndrome matters because it determines need for oral therapy and whether a short course is likely appropriate."
  },
  {
    "id": 94,
    "domain": "urinary",
    "chapter": 10,
    "question": "An 80-year-old man has fever, perineal pain, and difficulty urinating. Which diagnosis should be considered first?",
    "options": {
      "A": "Postmenopausal vaginal atrophy causing burning discomfort and irritative voiding symptoms alone",
      "B": "Asymptomatic bacteriuria with bacterial growth despite complete absence of urinary complaints",
      "C": "Simple bladder infection causing mild dysuria without systemic features or pelvic pain",
      "D": "Acute bacterial prostatitis causing fever, perineal pain, and obstructive urinary symptoms"
    },
    "answer": "D",
    "explanation": "Fever plus pelvic or perineal pain and obstructive urinary symptoms in an older man strongly suggests prostatitis. This changes treatment because the infected site is the prostate, which usually needs a longer course than cystitis and careful attention to urinary retention. Simple cystitis is less likely with systemic symptoms. Asymptomatic bacteriuria has no symptoms. Vaginal atrophy is not relevant in a male patient."
  },
  {
    "id": 95,
    "domain": "urinary",
    "chapter": 10,
    "question": "A 90-year-old nursing home resident has cloudy urine and a positive urinalysis but no urinary symptoms. What is the best interpretation?",
    "options": {
      "A": "A positive urinalysis automatically means antibiotics are indicated despite absent symptoms",
      "B": "These findings establish definite symptomatic pyelonephritis despite absent urinary localizing complaints",
      "C": "The urinalysis confirms catheter biofilm infection as the sole explanation for bacteriuria",
      "D": "Findings most likely represent asymptomatic bacteriuria rather than a true urinary infection"
    },
    "answer": "D",
    "explanation": "Cloudy urine and pyuria are common and nonspecific in older adults, especially with incontinence or catheter use. A positive urinalysis alone does not diagnose symptomatic infection. The most likely interpretation is asymptomatic bacteriuria unless there are localizing urinary symptoms or a convincing systemic syndrome. Pyelonephritis requires a compatible clinical picture. Bacteriuria alone is not an automatic indication for antibiotics."
  },
  {
    "id": 96,
    "domain": "urinary",
    "chapter": 10,
    "question": "A frail 85-year-old woman with suspected pyelonephritis cannot tolerate oral intake and has vomiting. What is the most appropriate level of care?",
    "options": {
      "A": "Provide only bladder analgesics and hydration while managing symptoms at home",
      "B": "Offer reassurance because pyelonephritis is unlikely despite vomiting and systemic illness",
      "C": "Observation without treatment is reasonable unless the urine culture later returns positive",
      "D": "Hospital evaluation is appropriate for intravenous therapy and monitoring of complications"
    },
    "answer": "D",
    "explanation": "Vomiting and inability to take oral medications make outpatient treatment unsafe for suspected pyelonephritis, particularly in a frail older adult. Hospital evaluation allows IV fluids, parenteral antibiotics if needed, and assessment for obstruction or complications. Waiting for culture without treating a convincing syndrome is inappropriate. Symptom-only management is insufficient for upper tract infection. Reassurance is not appropriate when systemic illness is present."
  },
  {
    "id": 97,
    "domain": "urinary",
    "chapter": 10,
    "question": "A 78-year-old man with benign prostatic hyperplasia has recurrent urinary tract infections and high postvoid residual volume. What underlying mechanism most contributes to his risk?",
    "options": {
      "A": "Loss of bladder acid production with aging eliminates a primary antimicrobial defense",
      "B": "Reduced urine osmolarity from age-related kidney changes directly promotes bacterial colonization",
      "C": "Urinary stasis develops from incomplete bladder emptying caused by outlet obstruction",
      "D": "Decreased urethral length after menopause increases ascending infection risk in older men"
    },
    "answer": "C",
    "explanation": "Incomplete bladder emptying causes urinary stasis, which promotes bacterial growth and recurrence. Obstruction from benign prostatic hyperplasia is a common mechanism in older men. Reduced urine osmolarity is not the key driver. Bladder acid production is not a standard mechanism used clinically here. Decreased urethral length after menopause applies to women, not men."
  },
  {
    "id": 98,
    "domain": "urinary",
    "chapter": 10,
    "question": "A urine culture from a catheterized patient shows mixed growth and was collected from the drainage bag. What is the best interpretation?",
    "options": {
      "A": "Mixed growth completely excludes a urinary source for the patient's symptoms",
      "B": "The culture definitively proves an invasive urinary infection requiring directed treatment",
      "C": "Sampling from the drainage bag is the preferred technique for catheter cultures",
      "D": "The specimen was poorly collected and is likely contaminated rather than diagnostic"
    },
    "answer": "D",
    "explanation": "Drainage bag specimens are unreliable and often contaminated. In catheterized patients, urine should be obtained from the sampling port using appropriate technique, often after catheter replacement when infection is suspected. Mixed growth from a bad specimen does not prove invasive infection. Drainage bag sampling is not preferred. Mixed growth does not fully exclude a urinary source, but it does weaken diagnostic confidence."
  },
  {
    "id": 99,
    "domain": "urinary",
    "chapter": 10,
    "question": "An 83-year-old woman with stage 4 chronic kidney disease has symptomatic cystitis. Which medication raises concern for hyperkalemia and interaction risk?",
    "options": {
      "A": "Nitrofurantoin monohydrate is the classic urinary agent most associated with hyperkalemia",
      "B": "Phenazopyridine alone frequently interacts with renin-angiotensin drugs and elevates potassium levels",
      "C": "Trimethoprim-sulfamethoxazole raises potassium risk, especially with chronic kidney disease and interacting drugs",
      "D": "Fosfomycin tromethamine commonly causes significant hyperkalemia through similar renal potassium effects"
    },
    "answer": "C",
    "explanation": "Trimethoprim-sulfamethoxazole can increase potassium, especially in older adults with chronic kidney disease or when combined with agents such as ACE inhibitors, ARBs, or spironolactone. Fosfomycin does not share that classic interaction profile. Phenazopyridine may relieve dysuria but does not treat infection. Nitrofurantoin is not the main concern for hyperkalemia, though it is not appropriate for pyelonephritis or prostatitis."
  },
  {
    "id": 100,
    "domain": "urinary",
    "chapter": 10,
    "question": "An 81-year-old man with fever and flank pain is diagnosed with pyelonephritis. After cultures return, he is improving on empiric therapy. What is the best stewardship step?",
    "options": {
      "A": "De-escalate to the narrowest active antibiotic supported by culture susceptibility results",
      "B": "Treat only if a repeat urine culture later becomes completely sterile",
      "C": "Continue broad-spectrum therapy until all symptoms have fully resolved clinically",
      "D": "Stop all antibiotics once the fever improves and appetite has returned"
    },
    "answer": "A",
    "explanation": "Once susceptibilities are known and the patient is improving, therapy should be narrowed to the most targeted active agent. Continuing broad coverage increases harm without benefit. Stopping solely because fever improves can undertreat pyelonephritis. Sterile repeat cultures are not required to decide whether the patient has improved clinically. De-escalation is a core stewardship step in complicated urinary infection."
  },
  {
    "id": 101,
    "domain": "skin",
    "chapter": 11,
    "question": "An 84-year-old man has a fluctuant forearm lesion with purulent drainage. What is the best next step?",
    "options": {
      "A": "Use topical mupirocin with warm compresses as the only treatment",
      "B": "Start oral cephalexin alone and reassess the lesion after one week",
      "C": "Obtain immediate MRI imaging before performing any bedside intervention",
      "D": "Perform incision and drainage, obtaining a wound culture when feasible today"
    },
    "answer": "D",
    "explanation": "A fluctuant purulent lesion is most consistent with an abscess, and source control is the key treatment. Drainage is usually required, with culture helpful when feasible. Oral cephalexin alone often fails because antibiotics do not reliably penetrate an undrained cavity. Topical therapy is inadequate for a true abscess. MRI is not the first step when the diagnosis is clinically clear and there is no specific concern for deep extension."
  },
  {
    "id": 102,
    "domain": "skin",
    "chapter": 11,
    "question": "A 79-year-old woman has unilateral lower leg erythema, warmth, and tenderness after a skin tear. No pus is present. Which organism should usually be covered first?",
    "options": {
      "A": "Cover streptococci first using relatively narrow therapy for nonpurulent cellulitis initially",
      "B": "Cover nontuberculous mycobacteria first using prolonged multidrug therapy from outset",
      "C": "Cover Candida first using systemic antifungal therapy for this presentation",
      "D": "Cover Pseudomonas first using broad antipseudomonal therapy for routine cellulitis"
    },
    "answer": "A",
    "explanation": "Nonpurulent cellulitis is commonly streptococcal, so initial therapy should cover streptococci unless other features suggest a different syndrome. Broad antipseudomonal therapy is not routine without specific exposure or risk factors. Candida does not cause typical cellulitis in this setting. Nontuberculous mycobacteria are uncommon and usually present with a different exposure history and chronic course."
  },
  {
    "id": 103,
    "domain": "skin",
    "chapter": 11,
    "question": "An 86-year-old nursing home resident has painful erythema of the calf, confusion, and rapid progression over hours. Pain seems worse than the visible skin findings. What is the best next action?",
    "options": {
      "A": "Prescribe oral antibiotics and arrange outpatient reassessment on the next day",
      "B": "Wait for blood culture results before escalating treatment or consultation",
      "C": "Observe overnight without imaging, antibiotics, or surgical consultation for now",
      "D": "Obtain urgent surgical evaluation for possible necrotizing soft tissue infection"
    },
    "answer": "D",
    "explanation": "Pain out of proportion, rapid progression, and systemic change raise concern for necrotizing soft tissue infection, which is a surgical emergency. Immediate surgical evaluation should not be delayed for outpatient treatment, observation alone, or blood cultures. Cultures can help later, but they must not postpone operative assessment and broad empiric therapy when suspicion is high."
  },
  {
    "id": 104,
    "domain": "skin",
    "chapter": 11,
    "question": "An 81-year-old woman has a red, swollen lower leg that is itchy, scaly, and bilateral. She had no fever and did not improve after three days of antibiotics. What is the most likely explanation?",
    "options": {
      "A": "Disseminated herpes zoster is causing this bilateral leg eruption",
      "B": "Venous stasis dermatitis is more likely than bacterial cellulitis here",
      "C": "Acute septic arthritis is affecting both ankles at the same time",
      "D": "Undiagnosed necrotizing fasciitis is present despite relatively preserved overlying skin"
    },
    "answer": "B",
    "explanation": "Bilateral erythema, pruritus, scaling, and poor antibiotic response suggest venous stasis dermatitis or another inflammatory mimic rather than bacterial cellulitis. Necrotizing fasciitis usually progresses rapidly and is associated with severe pain and toxicity. Disseminated zoster would present with a characteristic vesicular eruption. Septic arthritis would primarily cause joint pain, restricted motion, and localized joint findings rather than diffuse bilateral leg rash."
  },
  {
    "id": 105,
    "domain": "skin",
    "chapter": 11,
    "question": "A frail 88-year-old with chronic edema has nonpurulent cellulitis and stage 4 chronic kidney disease. Which factor most strongly affects initial treatment choice?",
    "options": {
      "A": "Renal function and capacity to tolerate outpatient treatment safely matter most",
      "B": "Skin color and whether erythema appears sharply demarcated matter most",
      "C": "Whether the white blood cell count is low matters most",
      "D": "A remote history of eczema during early adulthood matters most"
    },
    "answer": "A",
    "explanation": "In frail older adults, kidney function and the ability to safely take and monitor treatment often determine antibiotic choice, route, and disposition. Skin color may affect visual assessment, but it does not drive initial therapy. Remote eczema history is not decisive here. A low white blood cell count can support illness severity, but treatment decisions rely more on clinical syndrome, host reserve, and safe follow-up."
  },
  {
    "id": 106,
    "domain": "skin",
    "chapter": 11,
    "question": "An 83-year-old man has a pressure injury on the sacrum with foul odor, necrotic tissue, and surrounding erythema. Which treatment principle is most important?",
    "options": {
      "A": "Avoid wound care until the full oral antibiotic course is finished",
      "B": "Treat colonization only without improving pressure relief or local care",
      "C": "Use topical steroid treatment with dry gauze dressing alone initially",
      "D": "Prioritize pressure offloading and debridement when these measures match goals"
    },
    "answer": "D",
    "explanation": "An infected or clinically worsening pressure injury requires local wound management, including offloading and debridement when appropriate. Topical steroids are not treatment for infection. Colonization alone should not be overtreated, but clear spreading erythema and necrotic tissue require more than antibiotics. Wound care should not be delayed until after antibiotics, because pressure relief and tissue management are part of source control and healing."
  },
  {
    "id": 107,
    "domain": "skin",
    "chapter": 11,
    "question": "An 85-year-old woman develops confusion and leg pain after a small skin tear. Which bedside finding most increases concern for deeper infection?",
    "options": {
      "A": "A stable shallow abrasion is seen without surrounding concerning findings",
      "B": "Symmetric edema affects both ankles without focal progression or tenderness",
      "C": "Tenderness extends beyond the borders of the visible skin erythema",
      "D": "Pruritus is present around the superficial wound edge alone"
    },
    "answer": "C",
    "explanation": "Tenderness that extends beyond the apparent erythema suggests deep tissue involvement and raises concern for a more serious process, including necrotizing infection. Pruritus is nonspecific and often seen with dermatitis or healing skin. Symmetric ankle edema points more toward chronic venous disease than invasive infection. A stable shallow abrasion is a portal of entry, but by itself it does not indicate deep extension."
  },
  {
    "id": 108,
    "domain": "skin",
    "chapter": 11,
    "question": "A 78-year-old man is bitten on the hand by a dog. The wound is swollen, painful, and contaminated. What is the best management approach?",
    "options": {
      "A": "Delay treatment until progressive redness clearly outlines the bite margins",
      "B": "Give a steroid injection to reduce local inflammation and pain",
      "C": "Apply topical antibiotic ointment and arrange no further follow-up care",
      "D": "Provide cleansing, careful assessment, and antibiotics covering likely oral flora"
    },
    "answer": "D",
    "explanation": "Animal bites are inoculation injuries with mixed flora, so copious cleansing and systemic antibiotics active against oral and skin flora are often appropriate when the wound is contaminated or high risk. Topical ointment alone is inadequate. Waiting for progression is unsafe because early treatment reduces complications. Steroid injection would worsen infection risk and is not indicated for an acute contaminated bite."
  },
  {
    "id": 109,
    "domain": "skin",
    "chapter": 11,
    "question": "A hospitalized 80-year-old with cellulitis is improving after two days of therapy. What is the best antimicrobial strategy now?",
    "options": {
      "A": "Continue the same broad regimen indefinitely without reassessing the response",
      "B": "Narrow antimicrobial therapy when the clinical course and cultures permit",
      "C": "Stop all antibiotics immediately once the redness begins improving visibly",
      "D": "Broaden antimicrobial therapy to cover every possible causative organism"
    },
    "answer": "B",
    "explanation": "Once the syndrome becomes clearer and the patient improves, therapy should be narrowed to reduce toxicity, C. difficile risk, and unnecessary resistance pressure. Broadening without indication adds harm. Stopping immediately when redness begins to fade is too early, because clinical improvement often precedes complete resolution. Continuing a broad regimen without reassessment ignores stewardship and may expose an older adult to avoidable adverse effects."
  },
  {
    "id": 110,
    "domain": "skin",
    "chapter": 11,
    "question": "A 90-year-old in assisted living has recurrent lower leg cellulitis and chronic edema. Which prevention strategy is most useful?",
    "options": {
      "A": "Use monthly empiric antibiotics indefinitely to prevent future recurrences",
      "B": "Prescribe daily systemic steroids to suppress chronic inflammation long term",
      "C": "Focus on edema control and maintaining careful skin barrier care",
      "D": "Schedule routine MRI screening of both legs for early detection"
    },
    "answer": "C",
    "explanation": "Recurrent cellulitis often follows chronic edema and skin barrier disruption, so prevention should target the portal of entry with edema control, emollients, and foot and skin care. Indefinite empiric antibiotics are not the first preventive strategy and can cause harm. Routine MRI has no role in prevention. Systemic steroids would increase infection risk and worsen skin fragility, especially in frail older adults."
  },
  {
    "id": 111,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "A 78-year-old woman with diabetes has a malodorous plantar ulcer, exposed bone, and weak pedal pulses. Best next step?",
    "options": {
      "A": "Treat empirically using oral cephalexin alone for presumed uncomplicated soft tissue infection",
      "B": "Obtain urgent deep tissue cultures and comprehensive vascular assessment for limb-threatening infection",
      "C": "Reassure her that serious infection is unlikely because fever remains entirely absent",
      "D": "Start topical antibiotic ointment and arrange routine outpatient follow-up within several days"
    },
    "answer": "B",
    "explanation": "This presentation suggests deep diabetic foot infection with possible osteomyelitis and ischemia. Deep tissue culture and vascular assessment address microbiology and perfusion, both of which determine healing and limb salvage. Topical therapy is inadequate for deep infection. Oral cephalexin alone may miss polymicrobial disease and does not address bone or ischemia. Absence of fever does not exclude serious infection in older adults."
  },
  {
    "id": 112,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "A diabetic foot ulcer is being evaluated for osteomyelitis. Which specimen best guides definitive therapy?",
    "options": {
      "A": "Obtain a superficial wound swab after bedside cleansing to identify colonizing organisms",
      "B": "Obtain a deep tissue specimen after debridement to identify invasive pathogens",
      "C": "Obtain blood cultures during a stable outpatient visit to identify bacteremia",
      "D": "Obtain a urine culture at admission to guide antibiotic selection indirectly"
    },
    "answer": "B",
    "explanation": "Deep tissue obtained after debridement is more representative of invasive pathogens than a surface swab. Superficial cultures often reflect colonization. Urine and outpatient blood cultures are unrelated to the wound microbiology. When osteomyelitis is suspected and treatment will be directed, bone culture is ideal, but among these options deep tissue culture is the best practical specimen."
  },
  {
    "id": 113,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "Which finding most strongly supports diabetic foot osteomyelitis in a chronic ulcer?",
    "options": {
      "A": "An ulcer probing directly to bone strongly suggests underlying osteomyelitis involvement",
      "B": "Localized itching around the wound suggests superficial irritation rather than bone infection",
      "C": "A normal white blood cell count makes deep infection much less likely",
      "D": "Mild ankle edema with otherwise intact skin suggests nonspecific local inflammation only"
    },
    "answer": "A",
    "explanation": "A chronic ulcer that probes to bone strongly raises concern for osteomyelitis. Mild edema is nonspecific. Itching does not indicate bone involvement. A normal white blood cell count does not exclude deep infection, especially in older adults, who may have a muted inflammatory response."
  },
  {
    "id": 114,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "An older adult with diabetic foot infection has necrosis, foul odor, and severe arterial insufficiency. Best management principle?",
    "options": {
      "A": "Use narrow oral therapy alone without imaging for this severe limb-threatening infection",
      "B": "Avoid surgery because diabetic foot infections are always limited to superficial tissues",
      "C": "Delay all debridement until antibiotics have clearly improved the necrotic wound infection",
      "D": "Prioritize perfusion assessment and source control together in coordinated limb-saving management"
    },
    "answer": "D",
    "explanation": "Severe ischemia and necrotic tissue require coordinated perfusion assessment and source control. Debridement without adequate blood flow can worsen the wound, while antibiotics alone will not cure devitalized tissue infection. Narrow oral therapy without imaging is inadequate for a limb threatening process. Infection in diabetic feet is often deep, not superficial."
  },
  {
    "id": 115,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "A frail man with CKD and diabetic foot infection needs empiric antibiotics. Which principle best fits initial treatment?",
    "options": {
      "A": "Choose empiric therapy based on severity, likely pathogens, and local resistance",
      "B": "Delay antibiotic treatment until MRI definitively confirms osteomyelitis in the affected foot",
      "C": "Always begin treatment using only anaerobic coverage regardless of clinical presentation",
      "D": "Ignore kidney function when selecting antibiotics until final culture results become available"
    },
    "answer": "A",
    "explanation": "Empiric therapy should reflect infection severity, likely pathogens, prior antibiotic exposure, and local resistance, with renal adjustment in chronic kidney disease. Kidney function cannot be ignored. Anaerobic-only coverage misses common gram positive pathogens. Treatment should not wait for MRI when clinical infection is apparent, because source control and timely therapy matter."
  },
  {
    "id": 116,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "A hospitalized patient with diabetic foot osteomyelitis improves after debridement. What is the best antimicrobial strategy next?",
    "options": {
      "A": "Continue broad intravenous therapy indefinitely despite improvement and available microbiology results",
      "B": "Stop antibiotics as soon as pain improves and drainage begins decreasing",
      "C": "Add a second antibiotic despite known susceptibility and improving clinical condition",
      "D": "Narrow therapy to culture results once the patient is clinically stable"
    },
    "answer": "D",
    "explanation": "Once cultures identify the pathogen and the patient stabilizes, therapy should be narrowed to a targeted regimen, often with oral step-down when appropriate. Indefinite broad therapy increases toxicity and collateral damage. Pain improvement alone does not prove cure. Adding extra agents despite susceptibility is unnecessary unless there is another indication."
  },
  {
    "id": 117,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "Which situation most favors advanced imaging for a diabetic foot infection?",
    "options": {
      "A": "Any neuropathic foot pain without skin changes should prompt immediate advanced imaging",
      "B": "Diagnosis remains uncertain after examination and plain radiographs despite concerning features",
      "C": "Every ulcer smaller than one centimeter requires advanced imaging to exclude osteomyelitis",
      "D": "Routine follow-up imaging after complete healing is recommended for all prior infections"
    },
    "answer": "B",
    "explanation": "Advanced imaging, usually MRI, is most useful when osteomyelitis or deep abscess remains uncertain and the result will change management. Small ulcers do not routinely need advanced imaging. Neuropathic pain without skin changes is not specific for infection. Routine imaging after healing adds little value."
  },
  {
    "id": 118,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "An older adult with a diabetic foot ulcer becomes confused and stops walking, but has no fever. Best interpretation?",
    "options": {
      "A": "Psychiatric illness likely explains both the confusion and the foot ulcer",
      "B": "Severe infection is unlikely because the patient remains afebrile throughout evaluation",
      "C": "Normal mental status should still be expected despite this acute functional decline",
      "D": "Delirium may be the presenting sign of significant infection in older adults"
    },
    "answer": "D",
    "explanation": "Delirium, falls, or functional decline can be the presenting signs of a significant foot infection in older adults. Fever may be absent, and pain can be muted by neuropathy. Psychiatric illness does not explain a deep infected ulcer. Normal mental status should not be assumed when an older adult has acute decline."
  },
  {
    "id": 119,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "Which approach best reduces recurrence after treatment of diabetic foot infection?",
    "options": {
      "A": "Avoid footwear modifications after discharge despite prior pressure-related ulcer formation",
      "B": "Use pain alone as the main marker of wound healing progress",
      "C": "Shorten every antibiotic course to three days regardless of infection severity",
      "D": "Perform daily foot inspection and maintain consistent offloading to reduce pressure"
    },
    "answer": "D",
    "explanation": "Recurrence prevention depends on offloading, foot inspection, pressure reduction, and appropriate footwear. Antibiotic duration is determined by infection type and source control, not a fixed three day course. Continuing the same footwear that caused pressure injury promotes recurrence. Pain is unreliable in neuropathic feet and should not be the main healing marker."
  },
  {
    "id": 120,
    "domain": "diabetic_foot",
    "chapter": 12,
    "question": "A patient with severe diabetic foot infection and limited mobility declines limb salvage surgery. Best next step?",
    "options": {
      "A": "Insist on repeated broad antibiotics indefinitely despite limited benefit without source control",
      "B": "Document goals clearly and plan symptom-focused care with ongoing wound management",
      "C": "Stop discussing prognosis entirely to avoid causing the patient additional distress",
      "D": "Discharge immediately without wound care instructions or plans for symptom management"
    },
    "answer": "B",
    "explanation": "When the patient declines aggressive intervention, care should align with goals, with attention to symptom control, wound management, and clear contingency planning. Repeated indefinite antibiotics without source control are often ineffective and burdensome. Discharge without instructions is unsafe. Prognosis should be discussed honestly so future decisions match the patient’s preferences."
  },
  {
    "id": 121,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "An 84-year-old nursing home resident has watery diarrhea and confusion after recent clindamycin use. Which test strategy is most appropriate?",
    "options": {
      "A": "Test formed stool specimens routinely because colonization commonly occurs in nursing facilities",
      "B": "Order repeated stool assays until one eventually becomes positive despite stable status",
      "C": "Treat positive colonization immediately without considering symptoms or alternative clinical explanations",
      "D": "Test only unformed stool when symptoms are compatible with active infection clinically"
    },
    "answer": "D",
    "explanation": "C. difficile testing should be reserved for symptomatic patients with unformed stool and a compatible clinical syndrome. Repeat testing without a change in clinical status adds little value. Treating colonization alone is inappropriate because a positive test does not prove active disease. Formed stool is not an appropriate specimen for diagnosis in this setting."
  },
  {
    "id": 122,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "A frail 79-year-old with lower abdominal pain, leukocytosis, and constipation has suspected diverticulitis. What is the best next step?",
    "options": {
      "A": "Start loperamide therapy and observe carefully for any symptom response overnight",
      "B": "Obtain abdominal and pelvic CT imaging to assess extent and possible complications",
      "C": "Order serum amylase testing as the definitive study for suspected colonic inflammation",
      "D": "Assume viral gastroenteritis and encourage oral fluids without further diagnostic evaluation"
    },
    "answer": "B",
    "explanation": "Computed tomography helps confirm diverticulitis and identify abscess, perforation, or alternative diagnoses, especially when the presentation is atypical or the patient is frail. Loperamide can worsen an obstructive or inflammatory process. Viral gastroenteritis usually causes a different syndrome. Serum amylase is not the definitive test for colonic inflammation."
  },
  {
    "id": 123,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "Which older adult with diarrhea most strongly needs urgent evaluation for possible severe gastrointestinal infection?",
    "options": {
      "A": "Patient with two loose stools after eating spicy food the previous day",
      "B": "Patient with mild nausea developing shortly after a particularly large meal",
      "C": "Patient with chronic constipation, unchanged habits, and a stable appetite overall",
      "D": "Patient with new delirium, hypotension, and rising creatinine suggesting systemic illness"
    },
    "answer": "D",
    "explanation": "Delirium, hypotension, and acute kidney injury suggest systemic illness, dehydration, or sepsis and warrant urgent evaluation. Mild, self limited symptoms after a dietary trigger are much less concerning. Chronic constipation without an acute change does not suggest infection. Nonspecific postprandial nausea alone is not enough to indicate severe GI infection."
  },
  {
    "id": 124,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "An older adult with suspected C. difficile is stable but has persistent watery diarrhea. Which treatment is appropriate for initial nonfulminant disease?",
    "options": {
      "A": "Prescribe oral ciprofloxacin plus amoxicillin for ten days to cover enteric pathogens",
      "B": "Use intravenous metronidazole alone for seven days as standard initial treatment",
      "C": "Withhold therapy because symptoms usually resolve spontaneously without specific antimicrobial treatment",
      "D": "Give oral vancomycin 125 mg four times daily for initial nonfulminant disease"
    },
    "answer": "D",
    "explanation": "Oral vancomycin 125 mg four times daily is a standard treatment for initial nonfulminant C. difficile disease. Intravenous metronidazole alone is not standard therapy for this presentation. Ciprofloxacin plus amoxicillin would increase antibiotic pressure and is not appropriate. Untreated symptomatic C. difficile can worsen, especially in frail older adults."
  },
  {
    "id": 125,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "An 88-year-old with fever, right upper quadrant pain, and confusion has suspected biliary infection. What management principle is most appropriate?",
    "options": {
      "A": "Delay treatment until blood cultures return and definitively confirm the biliary source",
      "B": "Treat with oral fluids alone because symptoms can remain vague and nonspecific",
      "C": "Avoid diagnostic imaging because older adults frequently present with atypical pain",
      "D": "Start antibiotics promptly and arrange urgent biliary drainage when obstruction is present"
    },
    "answer": "D",
    "explanation": "Biliary infection can progress rapidly and often requires both antimicrobial therapy and source control, such as biliary drainage, when obstruction is present. Oral fluids alone are inadequate for a systemic biliary infection. Imaging is often needed because older adults present atypically. Treatment should not wait for culture confirmation when the clinical syndrome suggests sepsis."
  },
  {
    "id": 126,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "A 76-year-old with chronic loose stools tests positive for C. difficile toxin. She has no recent change in bowel pattern. What is the best interpretation?",
    "options": {
      "A": "Likely colonization unless the symptoms fit an active infectious syndrome clinically",
      "B": "Definite infection because toxin testing is always highly specific in every context",
      "C": "False result because toxin assays cannot detect clinically meaningful C. difficile disease",
      "D": "Immediate treatment is required regardless of symptoms, chronicity, or clinical context"
    },
    "answer": "A",
    "explanation": "A positive test must be interpreted in the context of symptoms. Colonization is common in healthcare exposed older adults, so chronic stable loose stools without a compatible acute syndrome may not represent active infection. Toxin testing is not perfect, but it can support diagnosis when the clinical picture fits. Automatic treatment without context leads to overtreatment."
  },
  {
    "id": 127,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "Which intervention best reduces recurrence risk in an older adult recovering from C. difficile?",
    "options": {
      "A": "Prescribe loperamide routinely to slow stool losses during the recovery period",
      "B": "Stop unnecessary antibiotics and review ongoing acid suppression for possible discontinuation",
      "C": "Extend broad-spectrum antibiotics further to suppress residual gut flora and recurrence",
      "D": "Repeat stool testing routinely after symptoms resolve to confirm microbiologic clearance"
    },
    "answer": "B",
    "explanation": "Avoiding unnecessary antibiotics and reassessing proton pump inhibitor use reduce ongoing microbiome disruption and recurrence risk. Loperamide can be harmful when colitis is active or severe. Broad-spectrum antibiotics worsen dysbiosis and recurrence risk. Repeat stool testing after clinical recovery is not useful because tests can remain positive despite improvement."
  },
  {
    "id": 128,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "A frail long term care resident has diarrhea, poor intake, and prerenal azotemia. What supportive care is most appropriate?",
    "options": {
      "A": "Give high-dose diuretics to force renal clearance and improve azotemia quickly",
      "B": "Institute strict bowel rest until stool output stops completely for safety",
      "C": "Start routine antidiarrheal therapy for all cases of suspected infectious diarrhea",
      "D": "Provide oral or intravenous fluid repletion according to tolerance and severity"
    },
    "answer": "D",
    "explanation": "Volume repletion is central because dehydration and kidney injury are common and dangerous in older adults with GI infection. Bowel rest is unnecessary in most cases and can worsen frailty and malnutrition. Diuretics would aggravate volume loss. Routine antidiarrheals are not appropriate for all infectious diarrhea and may be unsafe in colitis or ileus."
  },
  {
    "id": 129,
    "domain": "gastrointestinal",
    "chapter": 13,
    "question": "An older adult with suspected diverticulitis is clinically stable and imaging shows an uncomplicated process. What is the best next step?",
    "options": {
      "A": "Treat with antifungal medications because disrupted colonic flora indicates fungal infection",
      "B": "Use targeted management and narrow antibiotics when treatment is clinically necessary",
      "C": "Proceed immediately to colectomy for definitive source control despite stable imaging",
      "D": "Ignore the finding because uncomplicated diverticulitis never worsens after diagnosis"
    },
    "answer": "B",
    "explanation": "Uncomplicated diverticulitis in a stable patient may allow selective, targeted management, with antibiotics used according to severity, comorbidity, and local practice. Immediate surgery is not routine without complication. The condition still needs clinical follow up because some patients worsen. Antifungal therapy has no role in standard diverticulitis treatment."
  },
  {
    "id": 130,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "A 79-year-old woman with confusion, jaundice, and poor intake has elevated aminotransferases, bilirubin, and creatinine. Which additional bedside concern is most urgent?",
    "options": {
      "A": "Self-limited gastroenteritis causing transient dehydration and reduced oral intake symptoms",
      "B": "Isolated gallbladder dyskinesia causing postprandial discomfort without systemic liver failure",
      "C": "Hepatic encephalopathy causing acute mental status decline and liver decompensation now",
      "D": "Uncomplicated viral pharyngitis causing sore throat alongside unrelated cholestatic laboratory abnormalities"
    },
    "answer": "C",
    "explanation": "Confusion, jaundice, and kidney injury in an older adult with liver test abnormalities suggest decompensated liver disease and possible hepatic encephalopathy. Gastroenteritis and pharyngitis do not explain the hepatic pattern. Gallbladder dyskinesia is not the urgent bedside issue in this presentation."
  },
  {
    "id": 131,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "Which hepatitis test best confirms current hepatitis C infection in an older adult with a positive antibody result?",
    "options": {
      "A": "Hepatitis C core antigen alone to establish prior exposure without viremia",
      "B": "Hepatitis C surface antibody testing to assess immunity after resolved infection",
      "C": "Hepatitis A immunoglobulin M testing to evaluate unrelated acute hepatitis symptoms",
      "D": "Hepatitis C RNA testing to confirm active viremia and current infection"
    },
    "answer": "D",
    "explanation": "Hepatitis C antibody indicates exposure, not active infection. RNA testing confirms current viremia. Hepatitis C core antigen is not the standard confirmatory test in most clinical pathways. Hepatitis A IgM evaluates acute hepatitis A, not hepatitis C status."
  },
  {
    "id": 132,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "An 84-year-old man with chronic hepatitis B is starting high-dose prednisone for vasculitis. What is the most appropriate next step?",
    "options": {
      "A": "Order hepatitis A vaccination only and defer hepatitis B planning entirely",
      "B": "Assess and start hepatitis B reactivation prophylaxis before significant immunosuppression begins",
      "C": "Repeat hepatitis C antibody in six months to reassess unrelated viral status",
      "D": "Stop all steroids immediately without rheumatology or hepatology guidance despite vasculitis"
    },
    "answer": "B",
    "explanation": "Immunosuppression can reactivate chronic hepatitis B, so prophylaxis or treatment planning is needed before or with immunosuppression. Steroids may still be necessary for vasculitis. Hepatitis A vaccination does not prevent HBV reactivation. Hepatitis C antibody testing is irrelevant here."
  },
  {
    "id": 133,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "A frail 76-year-old with cirrhosis develops fever, abdominal distention, and worsening confusion. What is the best initial strategy?",
    "options": {
      "A": "Increase diuretics substantially before any diagnostic workup for fever or confusion",
      "B": "Observation because encephalopathy is usually benign and improves without urgent assessment",
      "C": "Prompt culture evaluation and empiric treatment for likely infection causing decompensation",
      "D": "Start oral iron therapy to address chronic anemia despite acute deterioration"
    },
    "answer": "C",
    "explanation": "Cirrhosis increases risk for bacterial infection, which can precipitate encephalopathy and acute decompensation. Early cultures and treatment are appropriate. Observation delays care. Increasing diuretics may worsen renal function. Iron does not address the acute infectious trigger."
  },
  {
    "id": 134,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "Which medication review is most relevant before starting a direct acting antiviral for hepatitis C?",
    "options": {
      "A": "Short-term inhaled bronchodilators alone without important systemic antiviral interactions",
      "B": "Concurrent acid suppressants and anticonvulsants that may alter antiviral effectiveness",
      "C": "Fish oil used for hypertriglyceridemia with little expected antiviral interference",
      "D": "Topical emollients and calcium supplements only with minimal interaction potential"
    },
    "answer": "B",
    "explanation": "Direct acting antivirals can interact with acid suppressants, anticonvulsants, rifamycins, antiarrhythmics, and some statins. These interactions may alter antiviral exposure or safety. The other options are generally less likely to create clinically meaningful interaction problems in this setting."
  },
  {
    "id": 135,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "An older adult has hepatitis B surface antigen positive, hepatitis B surface antibody positive, and hepatitis B core antibody positive. What does this pattern most strongly suggest?",
    "options": {
      "A": "Past or current hepatitis B infection from natural exposure rather than vaccination",
      "B": "False positive hepatitis C serology unrelated to hepatitis B infection markers",
      "C": "Successful hepatitis B vaccination only without evidence of natural viral exposure",
      "D": "Acute hepatitis A infection causing cross-reactive antibodies on hepatitis B testing"
    },
    "answer": "A",
    "explanation": "Surface antigen plus core antibody indicates current or prior natural infection. Vaccination alone produces surface antibody without core antibody or surface antigen. Hepatitis A and hepatitis C are separate infections and are not explained by this serologic pattern."
  },
  {
    "id": 136,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "An 82-year-old with cirrhosis is taking tenofovir disoproxil fumarate. Which monitoring concern is most appropriate?",
    "options": {
      "A": "Kidney function and bone health during ongoing antiviral treatment monitoring",
      "B": "Neutropenia from marrow failure as the principal expected medication toxicity",
      "C": "Retinal toxicity and hearing loss during routine antiviral therapy surveillance",
      "D": "Pancreatic enzyme suppression requiring serial laboratory testing during treatment courses"
    },
    "answer": "A",
    "explanation": "Tenofovir disoproxil fumarate can affect renal function and bone mineral density, making those key monitoring issues in older adults. The other adverse effects are not the principal concerns for this drug in routine hepatitis B management."
  },
  {
    "id": 137,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "Which older adult is most appropriate for hepatitis A and hepatitis B vaccination review?",
    "options": {
      "A": "A patient with chronic liver disease and unclear immunization records documentation",
      "B": "A patient with isolated hyperlipidemia and persistently normal liver function tests",
      "C": "A patient with remote appendectomy and no ongoing hepatitis risk factors",
      "D": "A patient with seasonal allergic rhinitis only and no liver risks"
    },
    "answer": "A",
    "explanation": "Adults with chronic liver disease benefit from hepatitis A and B vaccination if susceptible, and unclear documentation warrants review of immunity and prior doses. The other patients do not have the same level of hepatitis prevention priority based on the chapter scope."
  },
  {
    "id": 138,
    "domain": "hepatitis",
    "chapter": 14,
    "question": "An older adult with chronic hepatitis C is cured after antiviral therapy. What follow-up concept remains important if cirrhosis was present before treatment?",
    "options": {
      "A": "No further liver follow-up is needed once antiviral treatment has succeeded",
      "B": "Immediate lifelong steroid therapy to prevent recurrent hepatitis after cure",
      "C": "Ongoing surveillance for liver complications despite virologic cure after treatment",
      "D": "Annual hepatitis A immunoglobulin M testing for routine post-cure monitoring"
    },
    "answer": "C",
    "explanation": "Virologic cure does not erase established cirrhosis risk. Patients with prior cirrhosis still need ongoing surveillance for liver complications. Steroids are not indicated. Hepatitis A IgM testing is unrelated to routine post-cure follow-up."
  },
  {
    "id": 139,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "An 84-year-old man has two sets of blood cultures positive for Staphylococcus aureus. He is afebrile, confused, and has a prosthetic aortic valve. What is the best next step?",
    "options": {
      "A": "Treat presumed contamination and discharge home without additional diagnostic evaluation or follow-up.",
      "B": "Switch promptly to oral antibiotics after one normal temperature and brief observation.",
      "C": "Wait for recurrent fever before performing any evaluation of the prosthetic valve.",
      "D": "Obtain transesophageal echocardiography and repeat blood cultures to document bloodstream clearance."
    },
    "answer": "D",
    "explanation": "Persistent or high-risk Staphylococcus aureus bacteremia requires evaluation for endocarditis, especially with a prosthetic valve and altered mental status. Transesophageal echocardiography is more sensitive than transthoracic imaging in this setting, and repeat cultures document clearance. Treating it as contamination is unsafe. Oral step-down without source evaluation is premature. Waiting for fever misses the common older-adult presentation of endovascular infection."
  },
  {
    "id": 140,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "A frail 79-year-old woman has recurrent Enterococcus faecalis bacteremia after recent dialysis catheter use. Which finding most strongly supports an endovascular source?",
    "options": {
      "A": "Isolated nausea without focal symptoms and with subsequent normal repeat cultures.",
      "B": "One negative transthoracic echocardiogram obtained early during the current evaluation.",
      "C": "A single low-grade fever occurring briefly after strenuous physical therapy session.",
      "D": "Repeated positive blood cultures despite prior catheter removal and appropriate antimicrobial therapy."
    },
    "answer": "D",
    "explanation": "Persistence or recurrence of bacteremia after presumed source removal strongly suggests an endovascular nidus such as endocarditis, infected thrombus, or another intravascular focus. A single fever is nonspecific. Normal repeat cultures reduce, but do not eliminate, suspicion. A single negative transthoracic echocardiogram does not exclude endocarditis when clinical suspicion remains high, especially in older adults or in prosthetic valve disease."
  },
  {
    "id": 141,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "An 88-year-old nursing home resident has Staphylococcus aureus bacteremia and new back pain. Blood cultures remain positive 48 hours after starting therapy. What complication should be actively sought?",
    "options": {
      "A": "Simple viral pharyngitis causing sore throat without relation to bloodstream infection.",
      "B": "Community-acquired sinusitis causing congestion and facial pressure during antibiotic treatment.",
      "C": "Metastatic vertebral osteomyelitis causing persistent bacteremia and focal spinal pain symptoms.",
      "D": "Medication-induced constipation causing reduced appetite and mild abdominal discomfort only."
    },
    "answer": "C",
    "explanation": "Persistent S aureus bacteremia with focal back pain should prompt evaluation for metastatic infection, especially vertebral osteomyelitis or epidural involvement. Bloodstream infection can seed the spine and other deep sites. Constipation, viral pharyngitis, and sinusitis do not explain persistent bacteremia and focal spinal symptoms. Ongoing bacteremia should trigger a search for a hidden source, not reassurance."
  },
  {
    "id": 142,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "A 76-year-old man with a tunneled catheter has fever and two blood culture sets positive for coagulase-negative staphylococci. He is stable and has no other source. What is the most appropriate interpretation?",
    "options": {
      "A": "Definite blood culture contamination requiring no additional assessment or antimicrobial management.",
      "B": "Possible catheter-related bloodstream infection requiring careful clinical correlation and follow-up.",
      "C": "Proof of native valve endocarditis requiring immediate prolonged cardiac-directed therapy.",
      "D": "Likely urinary tract infection caused by skin flora seeded from catheter."
    },
    "answer": "B",
    "explanation": "Coagulase-negative staphylococci can be contaminants, but in a patient with an indwelling catheter and compatible symptoms they may represent true catheter-related bloodstream infection. Clinical context, number of positive sets, and persistence matter. They do not prove native valve endocarditis by themselves, and they do not point to a urinary source. Dismissing them without correlation can miss a device-related infection."
  },
  {
    "id": 143,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "An 81-year-old woman with suspected infective endocarditis has poor transthoracic echo windows and a prosthetic valve. What imaging study is most appropriate next?",
    "options": {
      "A": "Plain chest radiograph alone to assess cardiac silhouette and pulmonary congestion.",
      "B": "Abdominal ultrasound to evaluate splenic size and possible embolic enlargement only.",
      "C": "Transesophageal echocardiography for better visualization of prosthetic valve infection findings.",
      "D": "Repeat transthoracic echocardiography in one month after empiric treatment begins."
    },
    "answer": "C",
    "explanation": "Transesophageal echocardiography is the preferred next study when transthoracic imaging is nondiagnostic and suspicion remains high, especially with prosthetic valves or intracardiac devices. Abdominal ultrasound and chest radiography do not reliably evaluate valve infection. Waiting a month is inappropriate when the result would affect duration, need for surgery, and source control."
  },
  {
    "id": 144,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "A 90-year-old man with frailty and chronic kidney disease has vascular graft infection with recurrent bacteremia. Surgery is judged too risky. What management approach is sometimes used when cure is unlikely?",
    "options": {
      "A": "A short course of oral analgesics only for symptom-focused management.",
      "B": "Chronic suppressive antimicrobial therapy to reduce recurrence when definitive cure is unlikely.",
      "C": "Immediate treatment discontinuation after one negative blood culture confirms temporary improvement.",
      "D": "No antimicrobial treatment because operative management is impossible in this patient."
    },
    "answer": "B",
    "explanation": "When definitive source control is not feasible, chronic suppressive antimicrobial therapy may be considered in selected patients as a compromise strategy. It is not curative, but it may reduce recurrence when surgery is not an option. Doing nothing ignores ongoing infection risk. Analgesics alone do not treat bacteremia. One negative culture does not justify stopping therapy if a deep source remains."
  },
  {
    "id": 145,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "A 78-year-old woman is receiving prolonged therapy for endocarditis. Which monitoring issue is most relevant in older adults?",
    "options": {
      "A": "Routine colonoscopy during therapy to monitor for gastrointestinal treatment complications.",
      "B": "Renal function and surveillance for medication toxicity during prolonged antimicrobial therapy.",
      "C": "Daily screening for color blindness throughout treatment regardless of drug selection.",
      "D": "Serial serum amylase measurement for all antibiotic regimens used in endocarditis."
    },
    "answer": "B",
    "explanation": "Older adults are particularly vulnerable to medication toxicity during prolonged antimicrobial therapy, especially when renal function is reduced or fluctuating. Monitoring kidney function, blood counts, and regimen-specific adverse effects is central. Color vision testing, amylase, and colonoscopy are not routine monitoring for endocarditis therapy unless a specific drug or symptom warrants them."
  },
  {
    "id": 146,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "An 85-year-old man with a dialysis catheter has positive blood cultures and mild erythema at the exit site. What source control step is usually most appropriate?",
    "options": {
      "A": "Delay any intervention until blood cultures clear with antibiotic therapy alone.",
      "B": "Replace the catheter over a guidewire as the routine management approach.",
      "C": "Leave the catheter in place and observe closely without immediate intervention.",
      "D": "Remove the infected catheter when feasible to achieve effective source control."
    },
    "answer": "D",
    "explanation": "An infected catheter often serves as the nidus for bacteremia, and removal is a key source control step when feasible. Observation allows ongoing seeding. Waiting for cultures to clear without source control is unlikely to succeed if the line remains infected. Routine guidewire exchange is not the preferred response to suspected bloodstream infection and may preserve biofilm."
  },
  {
    "id": 147,
    "domain": "bloodstream",
    "chapter": 15,
    "question": "An 83-year-old woman with bacteremia becomes newly delirious and unable to ambulate, but she has no fever and no murmur. What is the best geriatric interpretation?",
    "options": {
      "A": "Possible endovascular infection despite an atypical presentation without fever or murmur.",
      "B": "Likely medication nonadherence only, explaining delirium and impaired ambulation fully.",
      "C": "Functional decline argues against deep infection and suggests a benign process.",
      "D": "No serious infection is present because fever is absent on examination."
    },
    "answer": "A",
    "explanation": "Older adults frequently present with delirium, weakness, and functional decline rather than classic fever or focal findings. These changes can be the main clue to endovascular infection. Medication nonadherence may contribute to some illnesses, but it does not explain bacteremia. Absence of fever does not exclude serious infection, and functional decline is compatible with deep infection, not protective against it."
  },
  {
    "id": 148,
    "domain": "cns",
    "chapter": 16,
    "question": "An 80-year-old man with fever, confusion, and headache has neck stiffness and no focal deficits. Which empiric regimen best fits suspected community-acquired bacterial meningitis with age-related Listeria risk?",
    "options": {
      "A": "Begin vancomycin, ceftriaxone, and ampicillin for broad meningitis and Listeria coverage immediately",
      "B": "Begin vancomycin, cefazolin, and acyclovir for broad meningitis and viral coverage",
      "C": "Begin fluconazole, ampicillin, and dexamethasone for fungal and bacterial central nervous system coverage",
      "D": "Begin piperacillin-tazobactam and azithromycin for severe polymicrobial central nervous system infection"
    },
    "answer": "A",
    "explanation": "This regimen covers pneumococcus, resistant gram positive organisms, and Listeria, which is a key age-related concern in older adults with meningitis. Ceftriaxone provides broad community-acquired meningitis coverage, vancomycin addresses resistant pneumococcus, and ampicillin adds Listeria coverage. Cefazolin has inadequate CNS meningitis coverage. Piperacillin-tazobactam is not standard empiric meningitis therapy. Fluconazole does not treat bacterial meningitis, and dexamethasone is adjunctive, not a substitute for antibacterial coverage."
  },
  {
    "id": 149,
    "domain": "cns",
    "chapter": 16,
    "question": "A frail 77-year-old woman has fever, personality change, and new focal aphasia. Head CT is unrevealing. Which next step is most appropriate while the workup continues?",
    "options": {
      "A": "Start intravenous acyclovir immediately while diagnostic evaluation for suspected encephalitis continues",
      "B": "Begin oral valacyclovir with outpatient follow-up while awaiting further diagnostic clarification",
      "C": "Treat only after lumbar puncture results return and confirm central nervous system infection",
      "D": "Observe without treatment until MRI becomes available and diagnostic uncertainty decreases"
    },
    "answer": "A",
    "explanation": "Her syndrome suggests encephalitis, and herpes simplex encephalitis requires prompt empiric acyclovir because delay can worsen neurologic injury. A normal head CT does not exclude encephalitis. Waiting for MRI or lumbar puncture can be harmful if treatment is delayed. Oral valacyclovir is not the standard initial therapy for suspected encephalitis in a sick older adult. Observation alone is unsafe when focal deficits and encephalopathy are present."
  },
  {
    "id": 150,
    "domain": "cns",
    "chapter": 16,
    "question": "An 84-year-old man has severe back pain, fever, and progressive leg weakness after recent bacteremia. Which diagnostic test is most appropriate?",
    "options": {
      "A": "Obtain plain lumbar spine radiographs to assess for infectious vertebral complications",
      "B": "Obtain arterial Doppler ultrasound to assess lower extremity vascular insufficiency and pain",
      "C": "Obtain contrast-enhanced spine MRI to evaluate for epidural infection and cord compression",
      "D": "Obtain noncontrast head CT to evaluate for intracranial causes of weakness"
    },
    "answer": "C",
    "explanation": "This presentation is classic for spinal epidural abscess, where contrast-enhanced spine MRI is the diagnostic test of choice. Plain radiographs are insensitive for epidural infection. Head CT does not evaluate the spinal canal. Arterial Doppler ultrasound does not address an infectious compressive spinal process. The combination of fever, back pain, and neurologic deficit should trigger urgent MRI and surgical consultation."
  },
  {
    "id": 151,
    "domain": "cns",
    "chapter": 16,
    "question": "An 82-year-old woman on apixaban develops fever, headache, and confusion. Exam shows papilledema and left-sided weakness. What is the best next step before lumbar puncture?",
    "options": {
      "A": "Delay all testing until anticoagulation clears before considering central nervous system infection",
      "B": "Obtain urgent brain imaging first to assess for mass effect safely",
      "C": "Proceed directly to lumbar puncture despite focal deficits and papilledema findings",
      "D": "Give oral antibiotics and discharge with close outpatient reassessment tomorrow"
    },
    "answer": "B",
    "explanation": "Focal deficit, papilledema, and marked altered mental status raise concern for mass effect or elevated intracranial pressure, so brain imaging should precede lumbar puncture. Proceeding directly could be dangerous. Oral antibiotics and discharge are inappropriate for possible CNS infection. Anticoagulation complicates the procedure, but imaging urgency comes first; decisions about holding or reversing anticoagulation depend on the full clinical situation and bleeding risk."
  },
  {
    "id": 152,
    "domain": "cns",
    "chapter": 16,
    "question": "A 79-year-old man with chronic sinusitis has headache, fever, and seizure. MRI shows a ring-enhancing temporal lesion with edema. Which diagnosis is most likely?",
    "options": {
      "A": "Subdural hygroma causing cerebrospinal fluid collection and temporal mass effect",
      "B": "Migraine with aura causing transient neurologic symptoms and feverish headache",
      "C": "Benign meningioma causing a slowly growing extra-axial lesion without fever",
      "D": "Brain abscess causing a ring-enhancing lesion with edema and acute fever"
    },
    "answer": "D",
    "explanation": "A ring-enhancing lesion with surrounding edema in the setting of contiguous sinus disease strongly suggests brain abscess. Seizure and focal findings are common. Meningioma is typically a slowly growing tumor without an acute febrile syndrome. Migraine does not cause fever or a ring-enhancing lesion. A subdural hygroma is a cerebrospinal fluid collection, not a purulent parenchymal infection."
  },
  {
    "id": 153,
    "domain": "cns",
    "chapter": 16,
    "question": "An 86-year-old woman with suspected meningitis has blood cultures drawn. When should antibiotics be started?",
    "options": {
      "A": "Start after fever resolves spontaneously overnight and symptoms are reassessed carefully",
      "B": "Start only after cerebrospinal fluid culture identifies the causative pathogen definitively",
      "C": "Start immediately after cultures, without waiting for lumbar puncture or imaging",
      "D": "Start after repeat head CT excludes all intracranial pathology and complications"
    },
    "answer": "C",
    "explanation": "In suspected bacterial meningitis, treatment should begin promptly after blood cultures are obtained if waiting for lumbar puncture or imaging would delay care. Delayed therapy worsens outcomes. Cerebrospinal fluid culture confirmation comes later and should not postpone treatment. Fever resolution does not exclude meningitis. Repeat head CT is not required to begin antibiotics and may waste critical time."
  },
  {
    "id": 154,
    "domain": "cns",
    "chapter": 16,
    "question": "A 75-year-old man with a brain abscess improves after aspiration and antibiotics. Which follow-up concern is most important during prolonged therapy?",
    "options": {
      "A": "Stop antibiotics once afebrile for one day and clinically improved briefly",
      "B": "Recommend avoiding all physical activity forever after central nervous system infection",
      "C": "Arrange daily colonoscopy screening throughout therapy to detect gastrointestinal complications",
      "D": "Monitor renal function and medication toxicity during prolonged antimicrobial treatment carefully"
    },
    "answer": "D",
    "explanation": "Prolonged CNS infection therapy often requires close monitoring for renal injury, cytopenias, ototoxicity, and neurotoxicity, especially in older adults. Kidney function matters for acyclovir, vancomycin, and many beta lactams. Colonoscopy is unrelated. Activity should be individualized, not permanently eliminated. Afebrile status for one day is not enough to stop treatment for a brain abscess; duration depends on the organism, response, and source control."
  },
  {
    "id": 155,
    "domain": "cns",
    "chapter": 16,
    "question": "An 83-year-old nursing home resident with fever, back pain, and new urinary retention has vertebral tenderness. Which finding most strongly supports spinal epidural abscess over degenerative disease?",
    "options": {
      "A": "Progressive neurologic deficit accompanying fever, back pain, and evolving urinary retention",
      "B": "Normal white blood cell count despite fever and concerning spinal symptoms",
      "C": "Chronic morning stiffness only without fever, weakness, or bladder involvement present",
      "D": "Pain improved by walking rather than worsening with infection-related spinal compression"
    },
    "answer": "A",
    "explanation": "Progressive neurologic deficit, especially with fever and back pain, strongly suggests spinal epidural abscess and demands urgent MRI. Degenerative disease can cause chronic pain, but it does not explain fever and evolving weakness or urinary retention. Improvement with walking is more typical of mechanical pain patterns. A normal white blood cell count does not exclude epidural abscess, particularly in older adults, so it should not reassure the clinician."
  },
  {
    "id": 156,
    "domain": "cns",
    "chapter": 16,
    "question": "A 78-year-old woman has suspected herpes simplex encephalitis and chronic kidney disease. Which management issue is most important?",
    "options": {
      "A": "Use oral antibiotics instead of intravenous therapy for suspected viral encephalitis",
      "B": "Avoid all antivirals because advanced age increases medication toxicity unacceptably",
      "C": "Ensure renal adjustment and hydration with acyclovir during empiric antiviral treatment",
      "D": "Stop all neurologic exams after treatment begins to reduce patient discomfort"
    },
    "answer": "C",
    "explanation": "Acyclovir is the standard empiric antiviral for suspected herpes simplex encephalitis, but it requires renal dose adjustment and adequate hydration to reduce nephrotoxicity. Age alone is not a reason to withhold therapy. Serial neurologic examination remains essential. Oral antibiotics do not treat encephalitis. The key geriatric issue is balancing timely antiviral therapy against kidney injury and medication toxicity."
  },
  {
    "id": 157,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "An 84-year-old nursing facility resident has weight loss, cough, and a new upper-lobe infiltrate. What is the best next step?",
    "options": {
      "A": "Start isoniazid monotherapy while awaiting additional outpatient chest imaging studies",
      "B": "Obtain sputum mycobacterial studies and start airborne isolation for suspected active tuberculosis",
      "C": "Treat empirically for bacterial pneumonia alone without using airborne isolation precautions",
      "D": "Order an interferon gamma release assay and discharge the patient home"
    },
    "answer": "B",
    "explanation": "Suspected active pulmonary tuberculosis requires airborne isolation and microbiologic evaluation with sputum testing. An interferon gamma release assay cannot distinguish latent from active disease. Isoniazid monotherapy is inappropriate before active disease is excluded and risks resistance. Routine bacterial pneumonia treatment alone misses tuberculosis and fails to address transmission risk."
  },
  {
    "id": 158,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "Which presentation is most consistent with tuberculosis in a frail older adult?",
    "options": {
      "A": "Acute gross hematuria shortly after beginning a newly prescribed anticoagulant",
      "B": "Wheezing with eosinophilia and longstanding seasonal rhinitis during spring months",
      "C": "Delirium, anorexia, and functional decline accompanied by little or no fever",
      "D": "Sudden pleuritic chest pain after recent hiking high in mountain terrain"
    },
    "answer": "C",
    "explanation": "Older adults often present atypically with constitutional decline, delirium, and reduced appetite rather than classic fever and night sweats. The other choices point to alternative diagnoses: environmental exposure, allergic airway disease, or anticoagulant-associated bleeding. Tuberculosis should remain on the differential when unexplained geriatric decline accompanies exposure risk or suggestive imaging."
  },
  {
    "id": 159,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "A patient has a positive interferon gamma release assay but no symptoms and a normal chest radiograph. What is the best interpretation?",
    "options": {
      "A": "Active pulmonary tuberculosis is confirmed and the patient needs immediate isolation",
      "B": "The result proves prior Bacille Calmette-Guérin vaccination rather than infection",
      "C": "Latent tuberculosis infection is likely once active disease has been reasonably excluded",
      "D": "No treatment consideration is needed because the chest radiograph appears normal"
    },
    "answer": "C",
    "explanation": "A positive interferon gamma release assay supports tuberculosis infection, and with no symptoms or radiographic evidence of active disease, latent infection is likely after active disease is reasonably excluded. The test does not confirm active disease and does not prove prior Bacille Calmette-Guérin vaccination. A normal chest radiograph alone does not eliminate the need to consider treatment for latent infection."
  },
  {
    "id": 160,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "Which medication interaction is most clinically relevant when rifampin is started?",
    "options": {
      "A": "Reduced hearing acuity developing after routine therapeutic acetaminophen use alone",
      "B": "Improved glycemic control developing after initiation of chronic levothyroxine therapy",
      "C": "Reduced anticoagulant effect and lower INR response during concurrent warfarin therapy",
      "D": "Increased serum calcium levels occurring during ongoing metformin treatment alone"
    },
    "answer": "C",
    "explanation": "Rifampin is a potent enzyme inducer and can lower warfarin effect, increasing thromboembolic risk unless anticoagulation is reassessed. The other options are not established clinically relevant rifampin interactions. In older adults, interaction review must include cardiovascular, neurologic, endocrine, pain, and diabetes medications."
  },
  {
    "id": 161,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "Which adverse effect should prompt urgent reassessment during ethambutol therapy?",
    "options": {
      "A": "Orange discoloration of urine, tears, and other body fluid secretions",
      "B": "Mild constipation accompanied by somewhat decreased appetite over several days",
      "C": "Brief metallic taste occurring intermittently after routine daily meals",
      "D": "New blurred vision or difficulty distinguishing red from green colors"
    },
    "answer": "D",
    "explanation": "Ethambutol can cause optic neuritis, presenting as blurred vision, reduced acuity, or impaired color discrimination. Orange body fluid discoloration is typical of rifampin, not ethambutol. Metallic taste and constipation are not classic ethambutol toxicity signals. Visual complaints in older adults require prompt review because baseline eye disease may obscure early injury."
  },
  {
    "id": 162,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "Which statement best describes latent tuberculosis treatment in a frail older adult?",
    "options": {
      "A": "Treat selectively after weighing likely benefit, medication toxicity, and practical feasibility",
      "B": "Treat every latent infection immediately using full multidrug active-disease therapy",
      "C": "Use pyrazinamide alone as a short-course prophylactic treatment regimen instead",
      "D": "Never treat latent tuberculosis infection in adults older than 65 years"
    },
    "answer": "A",
    "explanation": "Latent infection treatment in older adults should be individualized. Benefit depends on reactivation risk and life expectancy, while toxicity and interaction burden may be substantial. There is no age cutoff that forbids treatment. Multidrug active-disease regimens are not used for latent infection, and pyrazinamide alone is not a prophylactic regimen."
  },
  {
    "id": 163,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "What is the best reason to keep a hospitalized patient with suspected pulmonary tuberculosis in airborne isolation?",
    "options": {
      "A": "To lower the patient's risk of rifampin-related liver toxicity during treatment",
      "B": "To prevent aspiration events while the patient eats meals and drinks",
      "C": "To reduce transmission until contagious pulmonary tuberculosis becomes clinically unlikely",
      "D": "To improve the diagnostic accuracy of subsequent tuberculosis skin testing"
    },
    "answer": "C",
    "explanation": "Airborne isolation is a source control measure that reduces transmission from possible contagious pulmonary or laryngeal tuberculosis. It does not prevent aspiration, alter rifampin toxicity, or improve skin test performance. In older adults, the harms of isolation should be balanced against transmission risk, but suspected contagious disease still requires precautions."
  },
  {
    "id": 164,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "An older adult with confirmed drug-susceptible pulmonary tuberculosis cannot tolerate additional pills well. What principle should guide management?",
    "options": {
      "A": "Tailor therapy using susceptibility data while accounting carefully for medication tolerability",
      "B": "Delay treatment until the patient has regained baseline strength and stamina",
      "C": "Stop treatment completely once respiratory symptoms and appetite begin improving",
      "D": "Use isoniazid alone to minimize pill burden during active infection"
    },
    "answer": "A",
    "explanation": "Tuberculosis therapy should be narrowed and adapted once susceptibility data return, while preserving effective multidrug treatment. Stopping when symptoms improve invites relapse and resistance. Isoniazid monotherapy is inappropriate for active disease. Delaying therapy in confirmed tuberculosis prolongs illness and transmission unless a specific, documented reason exists."
  },
  {
    "id": 165,
    "domain": "tuberculosis",
    "chapter": 17,
    "question": "Which factor most strongly supports evaluating an older adult for tuberculosis?",
    "options": {
      "A": "Recent lateral ankle sprain sustained after a simple mechanical fall",
      "B": "Residence in a long-term care facility accompanied by unexplained weight loss",
      "C": "Isolated chronic constipation despite otherwise normal abdominal imaging and examination",
      "D": "Seasonal allergic symptoms accompanied by sneezing, congestion, and itchy eyes"
    },
    "answer": "B",
    "explanation": "Congregate living plus unexplained weight loss raises concern for tuberculosis, particularly when combined with cough, exposure history, or radiographic changes. The other choices are nonspecific and do not meaningfully increase tuberculosis probability. In older adults, facility residence also heightens concern for transmission to other residents and staff."
  },
  {
    "id": 166,
    "domain": "fungal",
    "chapter": 18,
    "question": "An 84 year old woman on inhaled steroids has painful swallowing and oral plaques. Best initial treatment?",
    "options": {
      "A": "Give intravenous amphotericin B for suspected invasive mold infection causing odynophagia",
      "B": "Start oral fluconazole for likely esophageal candidiasis in this steroid exposed patient",
      "C": "Observe only because oral Candida colonization commonly occurs without requiring treatment",
      "D": "Begin high dose acyclovir for presumed herpetic esophagitis causing painful swallowing"
    },
    "answer": "B",
    "explanation": "Odynophagia plus oral thrush in a steroid exposed older adult strongly suggests esophageal candidiasis, and oral fluconazole is appropriate if she can swallow and has no alarm features suggesting another diagnosis. Amphotericin B is not first line for uncomplicated Candida mucosal disease. Observation risks ongoing symptoms and dehydration. Acyclovir would fit herpetic esophagitis better than candidiasis, and the oral plaques point away from isolated viral disease."
  },
  {
    "id": 167,
    "domain": "fungal",
    "chapter": 18,
    "question": "A 79 year old man with candidemia has a tunneled central line and persistent fever. Next best step?",
    "options": {
      "A": "Continue oral fluconazole alone and leave the tunneled line in place",
      "B": "Add broad antibacterial coverage for presumed occult pneumonia causing persistent fever",
      "C": "Remove the central catheter and begin echinocandin therapy for candidemia now",
      "D": "Delay antifungal treatment until blood cultures become sterile without intervention"
    },
    "answer": "C",
    "explanation": "In candidemia, source control matters. An infected central venous catheter should be removed or exchanged when feasible, and an echinocandin is a standard initial choice in a clinically ill patient. Continuing oral fluconazole without source control may fail. Waiting for spontaneous sterilization is unsafe. Additional antibacterial therapy is not the key intervention unless another bacterial source is suspected."
  },
  {
    "id": 168,
    "domain": "fungal",
    "chapter": 18,
    "question": "An 82 year old woman with chronic lung disease has hemoptysis and a new cavity on chest CT. Aspergillosis is suspected. Best diagnostic approach?",
    "options": {
      "A": "Rely on sputum culture alone to prove invasive pulmonary aspergillosis conclusively",
      "B": "Start antifungal therapy immediately and omit diagnostic testing before treatment begins",
      "C": "Use serum beta D glucan alone to confirm aspergillosis without further testing",
      "D": "Obtain chest CT and pursue respiratory sampling when feasible for diagnosis"
    },
    "answer": "D",
    "explanation": "Chest CT defines the lesion, and respiratory sampling or tissue helps establish invasive aspergillosis when feasible. Sputum culture alone may represent colonization and does not prove invasion. Beta D glucan can support some invasive fungal syndromes but is not specific and does not confirm aspergillosis by itself. Empiric therapy may be reasonable in high risk patients, but diagnostic testing still guides management."
  },
  {
    "id": 169,
    "domain": "fungal",
    "chapter": 18,
    "question": "A confused 77 year old man has headache, gait change, and a positive serum cryptococcal antigen. Next step?",
    "options": {
      "A": "Treat presumed uncomplicated sinusitis with amoxicillin despite positive cryptococcal antigen",
      "B": "Discharge home if his mental status transiently returns near baseline",
      "C": "Repeat the cryptococcal antigen alone in two weeks without further evaluation",
      "D": "Perform lumbar puncture unless there is a clear contraindication to procedure"
    },
    "answer": "D",
    "explanation": "Neurologic symptoms with positive cryptococcal antigen raise concern for central nervous system disease, and lumbar puncture is needed unless there is a contraindication. Amoxicillin does not treat cryptococcosis. Repeating the antigen alone delays diagnosis and intracranial pressure assessment. A transient return toward baseline does not exclude meningitis or meningoencephalitis."
  },
  {
    "id": 170,
    "domain": "fungal",
    "chapter": 18,
    "question": "An 81 year old diabetic man with facial pain and black nasal eschar is suspected of mucormycosis. Best management?",
    "options": {
      "A": "Arrange urgent debridement plus start liposomal amphotericin B without delay",
      "B": "Observe closely while fungal cultures finalize before starting directed therapy",
      "C": "Give a single corticosteroid dose to reduce mucosal edema and pain",
      "D": "Use oral fluconazole alone as the initial treatment for mucormycosis"
    },
    "answer": "A",
    "explanation": "Mucormycosis is a rapidly progressive angioinvasive infection that requires urgent surgical debridement when feasible plus liposomal amphotericin B. Fluconazole has no reliable activity against Mucorales. Watchful waiting is dangerous because tissue necrosis advances quickly. Corticosteroids may worsen the infection and are not a treatment for the necrosis or underlying fungal invasion."
  },
  {
    "id": 171,
    "domain": "fungal",
    "chapter": 18,
    "question": "An 85 year old nursing home resident has oral thrush after antibiotics but no dysphagia or systemic signs. Best treatment?",
    "options": {
      "A": "Withhold treatment because Candida colonization in the mouth always resolves spontaneously",
      "B": "Use topical therapy or oral fluconazole if symptoms are clinically significant",
      "C": "Start liposomal amphotericin B because oral thrush indicates invasive fungal disease",
      "D": "Begin empiric voriconazole for possible mold infection causing oral white plaques"
    },
    "answer": "B",
    "explanation": "Uncomplicated oral candidiasis can often be treated with topical therapy or oral fluconazole depending on severity, swallowing ability, and recurrence risk. Amphotericin B is excessive for isolated thrush. Symptomatic thrush may not resolve promptly without treatment, especially in frail older adults. Voriconazole is not standard for oral Candida and adds unnecessary toxicity and interaction risk."
  },
  {
    "id": 172,
    "domain": "fungal",
    "chapter": 18,
    "question": "An older adult on voriconazole needs medication review. Which concomitant drug is most concerning?",
    "options": {
      "A": "Warfarin used for atrial fibrillation anticoagulation with important interaction potential",
      "B": "Acetaminophen taken intermittently for pain control with limited interaction concern",
      "C": "Polyethylene glycol used regularly for constipation relief with minimal interaction risk",
      "D": "Calcium carbonate taken for dyspepsia management with generally modest interaction concern"
    },
    "answer": "A",
    "explanation": "Voriconazole interacts with many drugs, including warfarin, and can increase bleeding risk through metabolic inhibition. Acetaminophen, polyethylene glycol, and calcium carbonate are less likely to create a major clinically significant interaction in routine use, although the full regimen still deserves review. Azole therapy should prompt careful monitoring for interaction related toxicity, especially in older adults with polypharmacy."
  },
  {
    "id": 173,
    "domain": "fungal",
    "chapter": 18,
    "question": "An 80 year old man with cryptoccoccal meningitis improves on induction therapy. Best next step?",
    "options": {
      "A": "Continue amphotericin indefinitely without routine monitoring despite toxicity concerns",
      "B": "Switch to amoxicillin for ongoing secondary prevention after fungal meningitis",
      "C": "Transition next to fluconazole consolidation therapy after successful induction treatment",
      "D": "Stop all antifungal treatment once symptoms improve after initial therapy"
    },
    "answer": "C",
    "explanation": "Cryptococcal meningitis is typically treated with induction followed by fluconazole based consolidation and maintenance. Clinical improvement does not mean the infection is cured. Amoxicillin has no role. Indefinite amphotericin is too toxic for long term use, especially in older adults with kidney vulnerability, and monitoring remains necessary during the full course of therapy."
  },
  {
    "id": 174,
    "domain": "fungal",
    "chapter": 18,
    "question": "A frail 83 year old with suspected fungal pneumonia refuses bronchoscopy. Best reasoning?",
    "options": {
      "A": "Rely only on sputum culture to avoid any further invasive testing",
      "B": "Delay antifungal therapy until the patient develops fever or worsening instability",
      "C": "Treat empirically if the syndrome and host risk strongly support infection",
      "D": "Assume fungal pneumonia cannot be treated at all without tissue biopsy"
    },
    "answer": "C",
    "explanation": "In high risk patients with a convincing syndrome, empiric antifungal therapy may be appropriate when invasive testing is not feasible or would not change immediate care. Biopsy is helpful but not always possible. Waiting for fever can miss an indolent presentation. Sputum culture alone is often insufficient because colonization or contamination may mislead, especially for molds."
  },
  {
    "id": 175,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "An 81-year-old woman has unilateral burning pain over the forehead for two days, followed by clustered vesicles on the scalp and upper eyelid. What is the best next step?",
    "options": {
      "A": "Treat only if fever develops or lesions become bilateral and widespread",
      "B": "Observe closely for spontaneous resolution before considering treatment or specialist evaluation",
      "C": "Order EBV serology first before beginning any antiviral treatment for shingles",
      "D": "Start oral valacyclovir promptly and arrange urgent ophthalmology evaluation for eye involvement"
    },
    "answer": "D",
    "explanation": "Forehead and eyelid involvement suggests ophthalmic zoster, which can threaten vision and merits prompt antiviral therapy plus eye evaluation. Waiting risks progression. Fever or bilateral rash is not required for treatment. EBV serology does not help confirm acute zoster and would delay appropriate care."
  },
  {
    "id": 176,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A frail 87-year-old man with chronic kidney disease develops confusion after starting valacyclovir for shingles. Which adverse effect is most concerning?",
    "options": {
      "A": "Permanent hearing loss caused by suppression of herpesvirus replication activity",
      "B": "Acyclovir-related neurotoxicity caused by reduced renal clearance and medication accumulation",
      "C": "Immune hemolysis caused by new antibody formation after antiviral exposure",
      "D": "Steroid-induced psychosis caused directly by antiviral therapy without corticosteroids"
    },
    "answer": "B",
    "explanation": "Acyclovir and valacyclovir can cause neurotoxicity, especially when renal function is reduced and dosing is not adjusted. Confusion, hallucinations, and somnolence may mimic worsening illness. Hemolysis and hearing loss are not typical toxicities. Antivirals do not cause steroid psychosis."
  },
  {
    "id": 177,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A 79-year-old woman has painful grouped oral ulcers and difficulty eating after recent chemotherapy. Which test best confirms herpes simplex infection from the lesions?",
    "options": {
      "A": "Blood culture obtained specifically to detect circulating herpesvirus infection",
      "B": "Single Epstein-Barr virus antibody titer obtained from a blood sample",
      "C": "Urine antigen testing ordered to diagnose cytomegalovirus mucosal ulcer disease",
      "D": "Polymerase chain reaction performed on a swab collected from the lesion"
    },
    "answer": "D",
    "explanation": "PCR from a lesion swab is the preferred confirmatory test for herpes simplex when lesions are present. EBV serology does not diagnose oral HSV. Blood cultures do not detect herpesvirus reliably. Urine antigen testing is not the usual diagnostic approach for CMV mucosal disease."
  },
  {
    "id": 178,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "An 84-year-old nursing home resident has fever, fatigue, transaminitis, and painful mouth ulcers after prolonged corticosteroid therapy. Which herpesvirus should be considered strongly?",
    "options": {
      "A": "Parvovirus B19 infection causing oral ulcers and transaminitis after steroids",
      "B": "Enterovirus hand-foot-mouth disease causing severe transaminitis in late adulthood",
      "C": "Cytomegalovirus reactivation causing systemic illness in an immunosuppressed older adult",
      "D": "Adenovirus conjunctivitis causing fever, fatigue, and painful mouth ulceration systemically"
    },
    "answer": "C",
    "explanation": "CMV reactivation can cause systemic illness with cytopenias, transaminitis, and mucosal or gastrointestinal disease in immunosuppressed patients. The presentation is less typical for parvovirus, adenovirus, or enterovirus. In older adults, these nonspecific features require attention to immune status and organ involvement."
  },
  {
    "id": 179,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A 76-year-old man with shingles has severe pain despite acetaminophen. Which approach best addresses postherpetic neuralgia risk while limiting harm?",
    "options": {
      "A": "Use high-dose diazepam primarily for muscle relaxation and pain control",
      "B": "Add diphenhydramine regularly as the main treatment for neuropathic pain",
      "C": "Start gabapentin with renal dose adjustment and monitor for sedation carefully",
      "D": "Avoid all analgesics completely until the shingles rash fully resolves"
    },
    "answer": "C",
    "explanation": "Gabapentin can help neuropathic pain and may reduce suffering from zoster-related pain, but it must be renally adjusted and monitored for sedation or gait instability. Diazepam and diphenhydramine worsen delirium and falls. Withholding analgesia is inappropriate because pain control supports function and sleep."
  },
  {
    "id": 180,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A 90-year-old woman with mild dementia and a dermatomal zoster rash has no new lesions after treatment begins. Which finding best supports de-escalation to outpatient completion?",
    "options": {
      "A": "Stable cognition and reliable ability to take oral medication safely",
      "B": "Persistent crusting involving all lesions across the affected dermatome only",
      "C": "History of childhood chickenpox documented clearly in prior medical records",
      "D": "Positive varicella zoster IgG confirming previous exposure to the virus"
    },
    "answer": "A",
    "explanation": "Clinical stability, preserved oral intake, and manageable cognition support outpatient completion. Crusting is expected but not by itself a discharge criterion. IgG and remote chickenpox history confirm prior exposure, not current clinical stability. The decision depends on function, severity, and ability to complete therapy safely."
  },
  {
    "id": 181,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A 78-year-old immunosuppressed man has fever, diffuse vesicular rash, and headache. Which therapy is most appropriate?",
    "options": {
      "A": "Provide no treatment unless the lesions crust and symptoms improve spontaneously",
      "B": "Start oral amoxicillin-clavulanate to cover possible secondary bacterial skin infection",
      "C": "Begin intravenous acyclovir promptly with close monitoring for complications and progression",
      "D": "Use topical mupirocin alone as definitive treatment for the diffuse rash"
    },
    "answer": "C",
    "explanation": "Disseminated zoster or severe herpesvirus disease in an immunosuppressed host warrants intravenous acyclovir and close monitoring. Antibiotics do not treat the viral process, topical therapy alone is inadequate, and delaying treatment until crusting can permit serious complications."
  },
  {
    "id": 182,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "An 83-year-old woman develops zoster pain without rash. Which statement is most accurate?",
    "options": {
      "A": "Pain without rash effectively excludes active varicella zoster virus infection",
      "B": "Serology confirms acute reactivation more accurately than careful clinical assessment",
      "C": "Prodromal zoster pain may precede rash or rarely occur without rash",
      "D": "Rash must always appear before antiviral therapy should ever be started"
    },
    "answer": "C",
    "explanation": "Zoster can present with prodromal neuralgia before rash, and rare cases occur without rash. Absence of rash does not exclude the diagnosis. Waiting for rash can delay treatment. Serology is usually less useful for acute reactivation than clinical judgment and lesion-based PCR when lesions are available."
  },
  {
    "id": 183,
    "domain": "herpesvirus",
    "chapter": 19,
    "question": "A 75-year-old man asks how to reduce his future risk of shingles and postherpetic neuralgia. Which intervention is best?",
    "options": {
      "A": "Undergo routine Epstein-Barr virus antibody screening every year for prevention",
      "B": "Receive recombinant zoster vaccination when eligible to prevent shingles complications",
      "C": "Avoid all contact with people who have recurrent cold sores",
      "D": "Take daily acyclovir indefinitely regardless of immune status or exposures"
    },
    "answer": "B",
    "explanation": "Recombinant zoster vaccination is the key preventive strategy for eligible older adults. Indefinite antiviral prophylaxis is not routine for all older adults. Cold sore exposure avoidance does not address zoster risk. EBV antibody screening is not a preventive strategy for herpes zoster."
  },
  {
    "id": 184,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "A 72-year-old man has a new rash, gait instability, and blurry vision. What is the best next step?",
    "options": {
      "A": "Treat empirically for eczema and arrange routine outpatient follow-up during next month",
      "B": "Order HIV testing and urgent syphilis evaluation with comprehensive ophthalmologic examination today",
      "C": "Obtain only a urine gonorrhea test without additional diagnostic evaluation or referral",
      "D": "Reassure him sexually transmitted infections are improbable now because advanced age lowers risk"
    },
    "answer": "B",
    "explanation": "This presentation raises concern for secondary syphilis with possible ocular involvement, and HIV testing is appropriate because coinfection is possible and older age does not exclude STI risk. Reassurance based on age misses the diagnosis. Eczema treatment alone ignores neurologic and ocular symptoms. A urine gonorrhea test does not evaluate syphilis and would miss the key diagnosis."
  },
  {
    "id": 185,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "Which test is the preferred initial HIV screening assay for most older adults?",
    "options": {
      "A": "Fourth-generation HIV-1 and HIV-2 combined antigen-antibody immunoassay for initial screening in most settings",
      "B": "HIV viral load measurement alone as the initial population screening study",
      "C": "CD4 lymphocyte count as the primary screening test for undiagnosed HIV infection",
      "D": "HIV antibody testing alone without supplemental differentiation assay or confirmatory follow-up testing"
    },
    "answer": "A",
    "explanation": "Fourth-generation antigen-antibody testing is the preferred initial screen because it detects earlier infection than antibody-only assays. Antibody-only testing has a longer window period. Viral load is not the standard first screening test in most settings. CD4 count measures immune status after infection is identified and does not diagnose HIV."
  },
  {
    "id": 186,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "An older man has dysuria and rectal discomfort after receptive anal sex. Urine gonorrhea and chlamydia tests are negative. What is the best interpretation?",
    "options": {
      "A": "These symptoms are unrelated to sexually transmitted infection after negative urine results",
      "B": "Rectal infection remains possible and should still undergo site-specific nucleic acid testing",
      "C": "Negative urine testing excludes all gonorrhea and chlamydia infections at every site",
      "D": "Only syphilis testing is necessary in this clinical scenario after negative urine"
    },
    "answer": "B",
    "explanation": "Urine testing can miss rectal and pharyngeal gonorrhea or chlamydia. Site-specific nucleic acid amplification testing is needed when exposure occurred at those sites. Negative urine tests do not exclude extragenital infection. The symptoms remain compatible with STI. Syphilis testing may also be appropriate, but it does not replace site-specific bacterial testing."
  },
  {
    "id": 187,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "Which syphilis treatment is standard for uncomplicated early syphilis in a nonpregnant older adult?",
    "options": {
      "A": "Oral acyclovir administered for ten days as routine syphilis treatment",
      "B": "Ceftriaxone given intravenously for fourteen days for uncomplicated early syphilis cases",
      "C": "Doxycycline continued indefinitely until serologic tests completely normalize after treatment",
      "D": "Benzathine penicillin G administered by intramuscular injection as standard early syphilis therapy"
    },
    "answer": "D",
    "explanation": "Benzathine penicillin G is standard therapy for early syphilis. Acyclovir treats herpesviruses, not syphilis. Ceftriaxone intravenous therapy is used for specific situations such as neurosyphilis, not routine early syphilis. Doxycycline can be an alternative in some nonpregnant patients, but not indefinitely, and treatment should follow a defined regimen with serologic follow-up."
  },
  {
    "id": 188,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "A 79-year-old woman with new HIV starts antiretroviral therapy. Which issue should be reviewed most carefully before prescribing?",
    "options": {
      "A": "Whether she requires prolonged empiric antifungal prophylaxis immediately after HIV diagnosis",
      "B": "Her blood type and Rh factor before antiretroviral treatment begins",
      "C": "Potential drug interactions with her statin and anticoagulant medications before regimen selection",
      "D": "Her childhood measles immunization record and any current booster requirements"
    },
    "answer": "C",
    "explanation": "Older adults often take multiple medications that can interact with antiretrovirals, including statins and anticoagulants. Medication reconciliation is central to regimen selection. Routine empiric antifungal prophylaxis is not indicated simply because HIV is diagnosed. Childhood vaccination status is not the key issue in antiretroviral selection. Blood type and Rh factor are irrelevant to HIV treatment planning."
  },
  {
    "id": 189,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "A frail older adult has confirmed gonorrhea and has a body weight of 160 kg. What is the recommended ceftriaxone dose?",
    "options": {
      "A": "Ceftriaxone 2 g taken orally once for uncomplicated gonorrhea at this weight",
      "B": "Ceftriaxone 500 mg intramuscularly administered once for uncomplicated gonorrhea at this weight",
      "C": "Ceftriaxone 1 g intramuscularly administered once for uncomplicated gonorrhea at this weight",
      "D": "Ceftriaxone 250 mg given intravenously daily for uncomplicated gonorrhea at this weight"
    },
    "answer": "C",
    "explanation": "For uncomplicated gonorrhea, ceftriaxone 500 mg intramuscularly once is standard for adults weighing less than 150 kg, and 1 g intramuscularly once is used at 150 kg or more. Oral ceftriaxone is not used. A daily intravenous regimen is not standard for uncomplicated gonorrhea."
  },
  {
    "id": 190,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "An older man with positive syphilis serology has confusion, unsteady gait, and new visual complaints. What is the best next step?",
    "options": {
      "A": "Ignore these neurologic symptoms because they are expected consequences of aging",
      "B": "Treat with oral doxycycline and omit additional neurologic or ophthalmologic assessment",
      "C": "Evaluate urgently for neurosyphilis and ocular syphilis with prompt specialist assessment",
      "D": "Repeat syphilis serology in six months without initiating treatment or further evaluation"
    },
    "answer": "C",
    "explanation": "Neurologic and ocular symptoms in a patient with syphilis serology require urgent evaluation for neurosyphilis and ocular syphilis. Delay risks permanent injury. Repeating serology without treatment is unsafe. Oral doxycycline may be used in selected nonpregnant patients with some forms of syphilis, but it is not the preferred approach here. Age should not be used to dismiss new neurologic findings."
  },
  {
    "id": 191,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "Which statement best describes chlamydia treatment in an older adult without contraindications?",
    "options": {
      "A": "Penicillin G administered intramuscularly once treats all uncomplicated chlamydia cases",
      "B": "Doxycycline 100 mg taken twice daily for 7 days treats uncomplicated chlamydia",
      "C": "Ceftriaxone 500 mg given intramuscularly once only treats uncomplicated chlamydia",
      "D": "Azithromycin 1 g taken weekly for 4 weeks treats uncomplicated chlamydia"
    },
    "answer": "B",
    "explanation": "Doxycycline 100 mg orally twice daily for 7 days is standard treatment for uncomplicated chlamydia. Azithromycin weekly for 4 weeks is not standard. Ceftriaxone alone treats gonorrhea, not chlamydia. Penicillin G is used for syphilis, not chlamydial infection."
  },
  {
    "id": 192,
    "domain": "hiv_sti",
    "chapter": 20,
    "question": "An 81-year-old man with HIV, mild cognitive impairment, and chronic kidney disease struggles with medication adherence. Which intervention is most appropriate?",
    "options": {
      "A": "Avoid all follow-up visits because durable viral suppression is impossible here",
      "B": "Simplify the regimen and add structured adherence support services whenever possible",
      "C": "Stop antiretroviral therapy completely to reduce daily pill burden and confusion",
      "D": "Use only symptom-based monitoring without any routine laboratory testing going forward"
    },
    "answer": "B",
    "explanation": "Older adults with cognitive impairment and frailty often need regimen simplification, pill organizers, caregiver support, home nursing, or other adherence services. Stopping therapy increases morbidity and transmission risk. Viral suppression remains achievable in many older adults. Laboratory monitoring is still needed to assess response and safety."
  },
  {
    "id": 193,
    "domain": "vaccines",
    "chapter": 21,
    "question": "An 84-year-old nursing home resident has no vaccine records. Which step best guides next vaccination decisions?",
    "options": {
      "A": "Order serologic testing for every vaccine before administering any needed doses",
      "B": "Assume childhood vaccines still provide complete protection throughout older adulthood",
      "C": "Restart all recommended adult vaccine series entirely from the beginning immediately",
      "D": "Reconstruct records using registries, pharmacies, prior clinicians, and available family information first"
    },
    "answer": "D",
    "explanation": "Reconstructing documentation from registries and prior sources is the most reliable first step when records are incomplete. Restarting every series is usually unnecessary and increases burden. Assuming childhood vaccination is durable into late life ignores waning immunity and missed boosters. Serologies are not routinely needed for all vaccines and can delay care without improving most decisions."
  },
  {
    "id": 194,
    "domain": "vaccines",
    "chapter": 21,
    "question": "Which older adult is most likely to benefit from vaccine counseling that emphasizes prevention of functional decline after infection?",
    "options": {
      "A": "A healthy 42-year-old marathon runner without chronic medical conditions present",
      "B": "A teenager recovering from an uncomplicated ankle sprain after sports",
      "C": "A 31-year-old with only seasonal allergic rhinitis and no comorbidity",
      "D": "A frail 87-year-old with heart failure and dependence on a walker"
    },
    "answer": "D",
    "explanation": "Frailty, limited reserve, and cardiopulmonary disease make infection more likely to trigger loss of independence, falls, and hospitalization, so functional outcomes matter greatly. The other patients may benefit from vaccination too, but the geriatric framing of preserving function is most clinically salient in the frail older adult."
  },
  {
    "id": 195,
    "domain": "vaccines",
    "chapter": 21,
    "question": "A 79-year-old asks whether prior mild fever and arm pain after a vaccine means she should avoid future doses. Best response?",
    "options": {
      "A": "Local arm pain after vaccination proves a true vaccine allergy",
      "B": "Those are common reactogenic effects and not a contraindication to vaccination",
      "C": "She should never receive any intramuscular vaccines again in the future",
      "D": "Any fever after vaccination means all future vaccines are unsafe permanently"
    },
    "answer": "B",
    "explanation": "Transient fever, fatigue, and local pain are expected reactogenic effects and usually do not preclude future vaccination. True contraindications are narrower, most often severe allergic reaction to a previous dose or component. Local pain does not prove allergy, and prior reactogenicity does not justify avoiding all future intramuscular vaccines."
  },
  {
    "id": 196,
    "domain": "vaccines",
    "chapter": 21,
    "question": "Which vaccine principle is most accurate for adults in late life?",
    "options": {
      "A": "Prior natural infection reliably replaces vaccination later in older adulthood",
      "B": "Older adults often require updated or enhanced vaccine formulations for protection",
      "C": "Live vaccines remain the mainstay for most immunizations in older adults",
      "D": "Immune aging makes all vaccines ineffective after age sixty-five in adults"
    },
    "answer": "B",
    "explanation": "Older adults often respond less robustly, so updated or enhanced formulations may improve protection. Immune aging reduces response but does not make vaccines ineffective. Most routinely used geriatric vaccines are non live. Prior infection does not reliably provide durable protection or replace vaccination, especially for influenza and COVID 19."
  },
  {
    "id": 197,
    "domain": "vaccines",
    "chapter": 21,
    "question": "Which statement best describes influenza vaccination in older adults?",
    "options": {
      "A": "One lifetime influenza vaccine provides sufficient protection for most adults",
      "B": "Annual influenza vaccination remains indicated because circulating strains change regularly",
      "C": "Past influenza infection provides lifelong protection against newly circulating strains",
      "D": "Influenza vaccination should wait until the season has completely ended"
    },
    "answer": "B",
    "explanation": "Influenza viruses undergo antigenic change, so annual vaccination is needed. One lifetime dose is not sufficient. Vaccination should not wait until the season is over, because benefit can still accrue during ongoing circulation. Prior infection does not reliably protect against future drifted strains."
  },
  {
    "id": 198,
    "domain": "vaccines",
    "chapter": 21,
    "question": "A frail 81-year-old with chronic kidney disease and diabetes is due for routine vaccines. Which is most appropriate?",
    "options": {
      "A": "Most nonlive vaccines can be given despite stable chronic medical disease",
      "B": "All vaccines should be deferred until kidney function fully normalizes",
      "C": "Only live vaccines are appropriate for adults with chronic kidney disease",
      "D": "Chronic disease itself is a contraindication to routine adult immunization"
    },
    "answer": "A",
    "explanation": "Stable chronic illness is not a contraindication to routine inactivated, recombinant, or mRNA vaccines. Deferring until kidney function normalizes is unnecessary and often unrealistic. Chronic disease increases, rather than decreases, the value of vaccination. Live vaccines are generally not the default strategy in older adults."
  },
  {
    "id": 199,
    "domain": "vaccines",
    "chapter": 21,
    "question": "Which situation most strongly supports reviewing current immunization guidance rather than relying on memory?",
    "options": {
      "A": "COVID 19 vaccine recommendations and available products can change over time",
      "B": "Tetanus booster recommendations never change after childhood vaccination is completed",
      "C": "Pneumococcal vaccination remains identical for all adults across every future guideline",
      "D": "RSV vaccination is never considered for older adults under any circumstances"
    },
    "answer": "A",
    "explanation": "COVID 19 vaccination recommendations and product formulations can change, so clinicians should use current guidance. Tetanus protection requires ongoing boosters and wound management. Pneumococcal vaccination recommendations evolve with newer conjugate vaccines. RSV vaccination is relevant for many older adults depending on current recommendations and risk factors."
  },
  {
    "id": 200,
    "domain": "vaccines",
    "chapter": 21,
    "question": "An 86-year-old on apixaban needs routine intramuscular vaccination. Best approach?",
    "options": {
      "A": "Give the vaccine using standard precautions and brief pressure afterward",
      "B": "Avoid all intramuscular vaccines because anticoagulation creates unacceptable bleeding risk",
      "C": "Stop apixaban for a full week before each scheduled vaccine dose",
      "D": "Use only oral vaccines for patients taking long-term anticoagulant therapy"
    },
    "answer": "A",
    "explanation": "Anticoagulation usually does not preclude intramuscular vaccination. Standard precautions and pressure after injection are typically sufficient. Stopping apixaban creates avoidable thromboembolic risk. Oral vaccine alternatives generally do not apply to routine adult immunization schedules."
  },
  {
    "id": 201,
    "domain": "vaccines",
    "chapter": 21,
    "question": "Which older adult most clearly warrants careful follow-up for completion of a multistep vaccine series?",
    "options": {
      "A": "A patient declining all vaccination after an informed discussion today",
      "B": "A fully independent patient with reliable transportation to all visits",
      "C": "A patient receiving only a single same-day vaccine dose today",
      "D": "A caregiver-dependent patient who frequently misses scheduled clinic appointments"
    },
    "answer": "D",
    "explanation": "Patients who depend on caregivers and miss appointments are at high risk for incomplete series, so explicit follow-up planning is essential. Independent patients with reliable access are less likely to lose continuity. A single-dose vaccine does not create a series completion problem. Refusal after informed discussion is a counseling issue, not a completion problem."
  },
  {
    "id": 202,
    "domain": "healthcare",
    "chapter": 22,
    "question": "An 82-year-old with delirium, fever, and hypotension has a tunneled central line. What is the best first step?",
    "options": {
      "A": "Start corticosteroids for presumed postoperative inflammation despite fever and hypotension",
      "B": "Treat only after the urine culture result returns clearly positive first",
      "C": "Obtain paired blood cultures and assess the central line as infection source",
      "D": "Ignore the central line because the insertion site appears completely benign"
    },
    "answer": "C",
    "explanation": "Paired blood cultures and source evaluation are the appropriate first step when catheter-related bloodstream infection is possible. A benign-looking site does not exclude line infection. Waiting for a urine culture can delay care and mislead the workup. Steroids do not address suspected infection and may worsen outcomes."
  },
  {
    "id": 203,
    "domain": "healthcare",
    "chapter": 22,
    "question": "Which finding most strongly supports catheter-associated urinary tract infection in a catheterized older adult?",
    "options": {
      "A": "New fever without another clear source in a catheterized older adult",
      "B": "Pyuria in an otherwise unchanged urine sample from chronic catheterization",
      "C": "Malodorous urine in a stable patient with a chronic catheter",
      "D": "Cloudy urine with bacteriuria alone in a chronically catheterized older adult"
    },
    "answer": "A",
    "explanation": "New fever without another clear source can support symptomatic catheter-associated urinary infection when paired with compatible assessment. Cloudy urine, bacteriuria, pyuria, and odor are common with chronic catheter use and do not establish infection by themselves. In catheterized older adults, colonization is expected and should not drive treatment alone."
  },
  {
    "id": 204,
    "domain": "healthcare",
    "chapter": 22,
    "question": "A ventilated older adult develops fever, purulent secretions, and worse oxygenation. What is the most appropriate next action?",
    "options": {
      "A": "Treat only after an extubation attempt has first been performed successfully",
      "B": "Assume airway colonization and withhold all diagnostic testing and treatment",
      "C": "Obtain respiratory cultures and begin empiric antimicrobial therapy for suspected pneumonia",
      "D": "Order a urine culture because pneumonia is considered relatively unlikely"
    },
    "answer": "C",
    "explanation": "This syndrome is compatible with ventilator-associated pneumonia, so respiratory cultures and empiric therapy are appropriate. Delaying until extubation can miss severe infection. Colonization is common, but compatible clinical deterioration justifies evaluation and treatment. A urine culture does not address the respiratory syndrome."
  },
  {
    "id": 205,
    "domain": "healthcare",
    "chapter": 22,
    "question": "Which intervention is most important for suspected catheter-related bloodstream infection with persistent bacteremia?",
    "options": {
      "A": "Treat the fever with antipyretics alone and observe for spontaneous improvement",
      "B": "Remove the catheter promptly to achieve definitive source control of bacteremia",
      "C": "Repeat urine cultures serially until they clear despite bloodstream infection suspicion",
      "D": "Continue using the line and consider adding antifungals at a later"
    },
    "answer": "B",
    "explanation": "Catheter removal is often the key source-control step when bacteremia persists or catheter infection is likely. Leaving the line in place can perpetuate infection. Antipyretics alone are inadequate. Repeat urine cultures do not address a bloodstream source."
  },
  {
    "id": 206,
    "domain": "healthcare",
    "chapter": 22,
    "question": "An older adult has an erythematous surgical wound with fluctuance after operation. What is the most likely needed intervention?",
    "options": {
      "A": "Perform drainage and obtain prompt surgical evaluation for possible wound infection",
      "B": "Prescribe long-term suppressive antibiotics without examining the wound further",
      "C": "Use observation alone because postoperative wounds are always inflamed initially",
      "D": "Order urine culture and perform bladder irrigation for presumed urinary source"
    },
    "answer": "A",
    "explanation": "Fluctuance suggests a collection that often needs drainage and surgical assessment. Superficial inflammation can be observed, but fluctuance raises concern for abscess or deeper infection. Urine-directed care is irrelevant. Suppressive antibiotics without source control are unlikely to cure a surgical-site infection."
  },
  {
    "id": 207,
    "domain": "healthcare",
    "chapter": 22,
    "question": "Which statement best reflects geriatric interpretation of a positive respiratory culture in a ventilated patient?",
    "options": {
      "A": "Any organism growth definitively proves ventilator-associated pneumonia in intubated patients",
      "B": "Respiratory cultures should never be obtained in mechanically ventilated patients",
      "C": "Airway colonization never occurs after endotracheal intubation in older adults",
      "D": "Culture results require a compatible clinical pneumonia syndrome for interpretation"
    },
    "answer": "D",
    "explanation": "Respiratory cultures are most useful when the patient also has fever, secretions, oxygenation decline, and imaging compatible with pneumonia. Growth alone does not prove infection because airway colonization is common after intubation. Colonization clearly can occur. Cultures are appropriate when used to support syndrome-based diagnosis."
  },
  {
    "id": 208,
    "domain": "healthcare",
    "chapter": 22,
    "question": "Which adverse effect is especially relevant when treating healthcare-associated infection in frail older adults?",
    "options": {
      "A": "Improved cognition resulting from essentially all antibiotic treatments in elders",
      "B": "Elimination of drug interactions during complex multidrug infection management",
      "C": "Nephrotoxicity from broad-spectrum antimicrobial therapy in frail older adults",
      "D": "Reduced fall risk caused by sedating medications used during treatment"
    },
    "answer": "C",
    "explanation": "Nephrotoxicity is a major concern in older adults, especially with renal impairment and drugs such as vancomycin or aminoglycosides. Antibiotics can worsen cognition rather than improve it. Sedating drugs raise fall risk, and polypharmacy creates interactions rather than eliminating them."
  },
  {
    "id": 209,
    "domain": "healthcare",
    "chapter": 22,
    "question": "What is the best stewardship approach when cultures and clinical course no longer support ongoing device infection?",
    "options": {
      "A": "Treat asymptomatic colonization aggressively to prevent future recurrent infection",
      "B": "Add a second broad-spectrum agent simply to provide additional reassurance",
      "C": "Stop unnecessary antimicrobials promptly once infection is no longer supported",
      "D": "Continue treatment until every nonspecific symptom has completely disappeared"
    },
    "answer": "C",
    "explanation": "If the syndrome no longer supports active infection, stopping unnecessary antimicrobials reduces toxicity and resistance. Persistent nonspecific symptoms alone do not justify endless treatment. Adding broader therapy increases harm. Colonization should not be treated simply to prevent future infection."
  },
  {
    "id": 210,
    "domain": "healthcare",
    "chapter": 22,
    "question": "Which transition-of-care plan best reduces recurrence after device-associated infection?",
    "options": {
      "A": "Document ongoing device need and a clear removal plan at discharge",
      "B": "Use isolation precautions only after hospital readmission for recurrent infection",
      "C": "Avoid discussing pending cultures or results with family and caregivers",
      "D": "Leave all devices in place unchanged until the outpatient follow-up visit"
    },
    "answer": "A",
    "explanation": "Clear documentation of whether a device is still needed and when it should be removed supports safer transitions. Leaving devices in place without reassessment perpetuates risk. Caregivers and receiving teams need pending culture information. Isolation decisions should be made immediately according to organism and policy, not delayed until readmission."
  },
  {
    "id": 211,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "A nursing home unit reports five residents with new cough and weakness over three days. What is the best next step?",
    "options": {
      "A": "Begin empiric antibiotics immediately for every exposed resident despite limited bacterial evidence",
      "B": "Create a case line list and start focused surveillance for additional cases",
      "C": "Ignore the cluster until fever appears in most affected residents first",
      "D": "Transfer every resident immediately to the emergency department for urgent evaluation"
    },
    "answer": "B",
    "explanation": "A line list with targeted surveillance is the best initial outbreak step because it defines who is affected, where cases are clustered, and what exposures are shared. Empiric antibiotics for all exposed residents are not indicated without evidence of bacterial infection. Transferring all residents is disruptive and usually unnecessary. Waiting for fever misses the typical older adult presentation, which is often nonspecific."
  },
  {
    "id": 212,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "Which finding most strongly suggests an outbreak in long-term care rather than isolated community illness?",
    "options": {
      "A": "One resident has seasonal allergy symptoms with sore throat during springtime",
      "B": "One staff member requests a day off because of fatigue alone",
      "C": "A single resident has chronic cough with stable vital signs throughout",
      "D": "Several residents on one wing develop similar new symptoms over days"
    },
    "answer": "D",
    "explanation": "Multiple residents on the same wing with similar new symptoms suggest shared transmission and warrant outbreak evaluation. A single resident with common respiratory symptoms may have isolated illness. Chronic cough alone is not an outbreak signal. Staff fatigue without a symptom cluster is nonspecific, although sick staff should still avoid resident contact when ill."
  },
  {
    "id": 213,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "An 86-year-old resident with dementia develops delirium, poor intake, and falls during a unit outbreak. What is the most appropriate interpretation?",
    "options": {
      "A": "Delirium requires no infection assessment in nursing home residents",
      "B": "Falls generally exclude infection when fever is absent in older adults",
      "C": "Delirium may be an early outbreak signal in frail older adults",
      "D": "Poor intake usually reflects depression rather than infection during outbreaks"
    },
    "answer": "C",
    "explanation": "Delirium, poor intake, and falls may be the earliest signs of infection in frail residents and should prompt outbreak evaluation. Absence of fever does not exclude infection in older adults. Poor intake has many causes, but during an outbreak it should not be assumed to be depression. Delirium always warrants assessment for infection and other acute triggers."
  },
  {
    "id": 214,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "What is the best reason to avoid indiscriminate antibiotic use during a suspected outbreak?",
    "options": {
      "A": "They prevent all secondary infections among exposed frail residents",
      "B": "Antibiotics always worsen viral respiratory symptoms in frail older adults",
      "C": "They remove the need for testing during outbreaks in facilities",
      "D": "They can promote resistance and increase risk of C. difficile infection"
    },
    "answer": "D",
    "explanation": "Unnecessary antibiotics promote resistant organisms and increase the risk of C. difficile infection, while also obscuring the true diagnosis. Antibiotics do not treat viral illness, but they do not always worsen symptoms directly. They do not replace diagnostic testing. They also do not prevent all secondary infections and may cause harm when used broadly."
  },
  {
    "id": 215,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "During an outbreak, which action best supports source control in a nursing home?",
    "options": {
      "A": "Use antibiotics prophylactically for roommates exposed to infected residents",
      "B": "Cohort infected residents and dedicate staff to them when possible",
      "C": "Stop all medication passes throughout the facility for twenty-four hours",
      "D": "Encourage all residents to dine together in larger communal groups"
    },
    "answer": "B",
    "explanation": "Cohorting infected residents and dedicating staff limits transmission and is a core source control strategy. Increasing group dining promotes spread. Medication passes cannot simply be stopped. Routine antibiotic prophylaxis for exposed roommates is not standard and should not be automatic."
  },
  {
    "id": 216,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "A frail resident with CKD and suspected bacterial infection is improving after empiric therapy. What is the best stewardship action?",
    "options": {
      "A": "Continue broad-spectrum therapy for fourteen days automatically despite clinical improvement",
      "B": "Switch treatment to prophylaxis for other residents on the unit",
      "C": "Stop therapy if cultures and clinical course do not support infection",
      "D": "Add a second antibiotic now to provide broader bacterial coverage"
    },
    "answer": "C",
    "explanation": "If cultures and the clinical course do not support bacterial infection, stopping antibiotics is appropriate stewardship. Broad therapy should not continue by default. Adding another antibiotic increases adverse effects without clear benefit. Prophylaxis for other residents is not routine and should only occur with specific public health guidance or specialist input."
  },
  {
    "id": 217,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "Which issue most increases the difficulty of outbreak control in assisted living?",
    "options": {
      "A": "Residents usually have no meaningful contact with facility staff members",
      "B": "Infection prevention rules never apply within assisted living settings",
      "C": "Staffing and medical oversight may be less continuous than nursing homes",
      "D": "Residents are always isolated in completely private rooms at baseline"
    },
    "answer": "C",
    "explanation": "Assisted living can have thinner staffing and less continuous medical oversight, making surveillance and rapid containment harder. Residents do have contact with staff, often frequent contact. Private rooms are not universal. Infection prevention absolutely applies in assisted living, but implementation must be adapted to the setting."
  },
  {
    "id": 218,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "Why can prolonged isolation be harmful in a nursing home resident with dementia?",
    "options": {
      "A": "It always prevents all transmission completely without any meaningful tradeoffs",
      "B": "It eliminates any need for communication with family during care",
      "C": "It may worsen delirium, immobility, loneliness, and functional decline",
      "D": "It improves oral intake and rehabilitation participation during outbreaks"
    },
    "answer": "C",
    "explanation": "Prolonged isolation can worsen delirium, immobility, loneliness, and functional decline, especially in residents with dementia or frailty. Isolation does not eliminate transmission completely and has tradeoffs. It often reduces oral intake and therapy participation rather than improving them. Family communication remains important during isolation and outbreak management."
  },
  {
    "id": 219,
    "domain": "long_term_care",
    "chapter": 23,
    "question": "Which communication item should accompany a resident transfer during an outbreak?",
    "options": {
      "A": "Only the room number and the resident's current medication list",
      "B": "A guarantee that no additional testing will be needed afterward",
      "C": "The resident's billing details and active insurance plan information",
      "D": "Outbreak status, suspected pathogen, and current infection control precautions"
    },
    "answer": "D",
    "explanation": "The receiving facility needs outbreak status, the suspected or confirmed pathogen, and current precautions to continue appropriate infection control. Room number and medications alone are insufficient. Billing details are irrelevant to transmission control. No one can promise that further testing will not be needed because clinical status may evolve after transfer."
  },
  {
    "id": 220,
    "domain": "resistance",
    "chapter": 24,
    "question": "An 82-year-old nursing home resident has confusion and a urine culture growing ESBL-producing E. coli. She has no dysuria, flank pain, fever, or hemodynamic instability. What is the best next step?",
    "options": {
      "A": "Observe without antibiotics and search carefully for other potential causes of delirium",
      "B": "Remove the urine catheter and repeat cultures only after completing empiric antibiotics",
      "C": "Start linezolid because resistant gram-negative organisms always require broader antimicrobial coverage",
      "D": "Treat as symptomatic urinary infection using carbapenem therapy despite absent localizing features"
    },
    "answer": "A",
    "explanation": "This is asymptomatic bacteriuria or colonization, not a symptomatic urinary tract infection. Confusion alone is not enough to diagnose urinary infection in an older adult. The correct response is to look for other causes of delirium and avoid unnecessary antibiotics. Carbapenem therapy is not indicated without a compatible syndrome. Linezolid does not treat gram-negative urinary infection. Repeating cultures after antibiotics is not the right first step because the initial culture should not have driven treatment."
  },
  {
    "id": 221,
    "domain": "resistance",
    "chapter": 24,
    "question": "An older man with a chronic pressure injury develops fever, hypotension, and surrounding cellulitis. Wound culture grows MRSA. What is the most important management step in addition to active antimicrobial therapy?",
    "options": {
      "A": "Stop all local wound care measures until follow-up cultures eventually become negative",
      "B": "Perform debridement and drainage of infected tissue to achieve adequate source control",
      "C": "Perform immediate rectal screening to assess for possible VRE colonization status",
      "D": "Obtain daily surveillance cultures from the wound site until complete closure occurs"
    },
    "answer": "B",
    "explanation": "Source control is essential in a pressure injury infection, especially when there is cellulitis or systemic illness. Debridement and drainage reduce bacterial burden and improve antibiotic success. Surveillance cultures do not treat infection. Rectal screening may help with infection prevention but does not address the active syndrome. Stopping wound care worsens local control and delays healing."
  },
  {
    "id": 222,
    "domain": "resistance",
    "chapter": 24,
    "question": "A frail 79-year-old woman with chronic kidney disease has bloodstream infection caused by MRSA. Which therapy is most appropriate for a serious invasive infection when renal toxicity is a concern?",
    "options": {
      "A": "Withhold treatment because MRSA often represents harmless colonization in older adults",
      "B": "Use nitrofurantoin to provide definitive control of MRSA bacteremia in blood",
      "C": "Use linezolid for uncomplicated urinary colonization rather than treating bloodstream infection directly",
      "D": "Use vancomycin with close monitoring of kidney function during serious MRSA bacteremia"
    },
    "answer": "D",
    "explanation": "MRSA bacteremia requires active treatment, and vancomycin is a standard option when susceptible. Renal function must be monitored closely in older adults with kidney disease. Linezolid can be used for selected MRSA infections, but this option refers to urinary colonization and is not relevant to bacteremia. Nitrofurantoin does not treat bloodstream infection. No treatment would be inappropriate because this is invasive disease, not colonization."
  },
  {
    "id": 223,
    "domain": "resistance",
    "chapter": 24,
    "question": "An 86-year-old man with dementia has a chronic Foley catheter and a urine culture growing VRE. He has no fever, suprapubic pain, flank pain, or new hemodynamic changes. What is the best interpretation?",
    "options": {
      "A": "Assume simple contamination and disregard the microbiology result as entirely meaningless",
      "B": "Start antifungal therapy because VRE in urine commonly indicates concurrent Candida",
      "C": "Interpret this as likely colonization and avoid treatment without compatible symptoms",
      "D": "Treat immediately because VRE identified in urine always represents invasive infection"
    },
    "answer": "C",
    "explanation": "VRE in urine from a chronically catheterized older adult often represents colonization or asymptomatic bacteriuria. Treatment is not indicated without a compatible urinary or systemic syndrome. It should not be assumed to be invasive in all cases. The result is not meaningless, because it may matter for future empiric choices and infection prevention, but it does not automatically require therapy. Antifungal therapy is not relevant."
  },
  {
    "id": 224,
    "domain": "resistance",
    "chapter": 24,
    "question": "An 81-year-old woman with a bloodstream infection due to carbapenem-resistant Enterobacterales is clinically stable. Susceptibility testing shows activity to a newer beta-lactam and beta-lactamase inhibitor combination. What is the best principle for treatment?",
    "options": {
      "A": "Avoid all beta-lactam agents because resistance remains permanently fixed in patients",
      "B": "Treat only when a concurrent urine culture also confirms the same organism",
      "C": "Continue broad-spectrum therapy for the maximum possible duration despite clinical stability",
      "D": "Use the narrowest active agent selected according to available susceptibility testing results"
    },
    "answer": "D",
    "explanation": "For CRE, susceptibility testing should guide therapy, and the narrowest active agent that reliably treats the site is preferred. Broad therapy should not continue once a narrower effective option is available. A urine culture is not required to validate bloodstream infection. Beta-lactam resistance is not a class-wide permanent property of the patient; it varies by organism and susceptibility profile."
  },
  {
    "id": 225,
    "domain": "resistance",
    "chapter": 24,
    "question": "A 77-year-old long-term care resident has positive nares screening for MRSA but no wounds, fever, pneumonia, or bacteremia. What is the best interpretation?",
    "options": {
      "A": "Diagnose urinary infection requiring cephalosporin therapy based on the nares result",
      "B": "Interpret this as MRSA colonization without any indication for systemic treatment",
      "C": "Diagnose true infection because nasal MRSA carriage is never clinically benign",
      "D": "Assume occult bacteremia requiring prompt intravenous vancomycin despite absent clinical signs"
    },
    "answer": "B",
    "explanation": "Nasal MRSA screening identifies colonization, not infection. Systemic treatment is not indicated without a compatible clinical syndrome. Colonization matters for future empiric decisions and infection prevention, but it does not equal invasive disease. Occult bacteremia is not presumed from a screening swab. There is no reason to treat a urinary infection based on a nares result."
  },
  {
    "id": 226,
    "domain": "resistance",
    "chapter": 24,
    "question": "An 88-year-old woman with C. auris colonization is admitted for hip fracture repair. She is afebrile and has no signs of invasive fungal disease. What is the appropriate management?",
    "options": {
      "A": "Use amphotericin to attempt decolonization before proceeding with the planned surgery",
      "B": "Give echinocandin treatment to every patient found colonized with C. auris",
      "C": "Withhold antifungal treatment unless there is evidence of invasive fungal infection",
      "D": "Delay the surgery until repeat screening cultures become definitively negative"
    },
    "answer": "C",
    "explanation": "C. auris colonization does not warrant antifungal therapy. Treatment is reserved for invasive infection. Decolonization with antifungals is not a standard approach, and surgery should not be delayed solely to clear colonization. Infection prevention measures and contact precautions may be relevant, but they are separate from antifungal treatment."
  },
  {
    "id": 227,
    "domain": "resistance",
    "chapter": 24,
    "question": "An 83-year-old man receiving linezolid for MRSA pneumonia is also taking sertraline. Which adverse effect deserves particular monitoring?",
    "options": {
      "A": "Monitor for peripheral edema and gingival hyperplasia during concomitant linezolid and sertraline",
      "B": "Monitor for serotonin toxicity and cytopenias during concomitant linezolid and sertraline",
      "C": "Monitor for pulmonary fibrosis and hearing loss during concomitant linezolid and sertraline",
      "D": "Monitor for hypercalcemia and nephrolithiasis during concomitant linezolid and sertraline"
    },
    "answer": "B",
    "explanation": "Linezolid can interact with serotonergic drugs and may contribute to serotonin toxicity. It can also cause cytopenias, especially with longer courses or in vulnerable patients. The other effects are not typical concerns for linezolid. In an older adult, monitoring should include mental status, blood counts, and medication interactions."
  },
  {
    "id": 228,
    "domain": "resistance",
    "chapter": 24,
    "question": "A frail woman with a diabetic foot infection improves after debridement and targeted therapy. Blood cultures are negative, and the wound isolate is fully susceptible to a narrow agent. What is the best next step?",
    "options": {
      "A": "Stop all antibiotics immediately regardless of remaining treatment course or response",
      "B": "Add vancomycin now to prevent future colonization and recurrent wound infection",
      "C": "Continue broad empiric therapy for several additional weeks despite clinical improvement",
      "D": "De-escalate to the narrowest effective antimicrobial regimen based on susceptibilities"
    },
    "answer": "D",
    "explanation": "Once cultures and clinical response identify a susceptible pathogen, therapy should be narrowed to the least broad effective regimen. Prolonged broad empiric therapy increases toxicity and resistance pressure. Stopping all antibiotics may be premature if infection remains active. Vancomycin does not prevent future colonization and is not used prophylactically."
  },
  {
    "id": 229,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "An 82-year-old kidney transplant recipient develops confusion and hypotension without fever. What is the best next step?",
    "options": {
      "A": "Increase tacrolimus dosing immediately to reduce rejection risk during this illness",
      "B": "Administer antipyretics and continue home observation closely until tomorrow morning",
      "C": "Wait for documented fever before starting any evaluation or antimicrobial treatment",
      "D": "Obtain cultures promptly and begin broad empiric intravenous antibiotics without delay"
    },
    "answer": "D",
    "explanation": "This patient has possible sepsis with blunted fever response. Cultures and immediate broad empiric antibiotics are appropriate after obtaining specimens, without waiting for fever. Increasing tacrolimus risks worsening immunosuppression and infection. Antipyretics and home observation are unsafe with hypotension and delirium."
  },
  {
    "id": 230,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "A patient with asplenia calls with fever and chills. What is the most appropriate advice?",
    "options": {
      "A": "Seek urgent medical evaluation and receive prompt empiric antibiotic treatment today",
      "B": "Use corticosteroids at home to reduce fever and inflammatory symptoms",
      "C": "Delay medical care until the next scheduled outpatient clinic visit",
      "D": "Monitor symptoms at home unless a new cough develops by tomorrow"
    },
    "answer": "A",
    "explanation": "Asplenia confers risk for rapid, fulminant sepsis from encapsulated bacteria. Fever requires urgent assessment and prompt antibiotics when bacterial infection is plausible. Waiting for respiratory symptoms, using corticosteroids, or delaying care can allow rapid clinical deterioration."
  },
  {
    "id": 231,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "An older adult receiving chemotherapy develops profound neutropenia and fever. Which empiric approach is most appropriate?",
    "options": {
      "A": "Prescribe oral azithromycin and arrange routine outpatient follow-up later this week",
      "B": "Withhold antibiotics unless chest imaging first shows a definite focal abnormality",
      "C": "Use narrow antibiotic therapy only after final culture results are available",
      "D": "Start immediate antipseudomonal broad-spectrum intravenous antibiotic therapy without waiting further"
    },
    "answer": "D",
    "explanation": "Febrile neutropenia requires immediate broad coverage active against Pseudomonas. Outpatient azithromycin is too narrow and too slow. Imaging may be normal early, and waiting for culture results delays life-saving therapy. De-escalation can occur later when the source is known."
  },
  {
    "id": 232,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "A transplant recipient started on clarithromycin becomes tremulous with rising creatinine and high tacrolimus levels. What explains this problem?",
    "options": {
      "A": "A rising creatinine level proves acute transplant rejection is definitely present",
      "B": "Clarithromycin does not interact meaningfully with common transplant immunosuppressant medications",
      "C": "Tacrolimus improved renal perfusion after infection and therefore raised creatinine levels",
      "D": "A macrolide drug interaction increased tacrolimus exposure and caused toxic effects"
    },
    "answer": "D",
    "explanation": "Macrolides can increase tacrolimus concentrations and cause nephrotoxicity and neurotoxicity. The creatinine rise may reflect drug toxicity, infection, dehydration, or rejection, so rejection is not certain. Clarithromycin clearly interacts with transplant immunosuppressants and requires close monitoring or an alternative agent."
  },
  {
    "id": 233,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "Which clinical feature most strongly suggests infection in an older immunosuppressed patient?",
    "options": {
      "A": "Stable chronic insomnia with longstanding fatigue and no other changes",
      "B": "Longstanding arthritic knee pain without new swelling or systemic symptoms",
      "C": "Mild baseline tremor occurring predictably after breakfast on most days",
      "D": "New delirium accompanied by decreased oral intake and recent functional decline"
    },
    "answer": "D",
    "explanation": "In older immunosuppressed adults, infection often appears as delirium, anorexia, weakness, or functional decline rather than fever. Chronic insomnia, isolated longstanding pain, or a stable baseline tremor do not specifically suggest acute infection. New cognitive or functional change should trigger evaluation."
  },
  {
    "id": 234,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "A frail adult on chronic prednisone has suspected bacterial pneumonia. What additional issue should guide management?",
    "options": {
      "A": "Long-term steroid treatment affects bone density but not acute infection assessment",
      "B": "Chronic steroids may mask fever and worsen glucose control during infection",
      "C": "Prednisone use eliminates any need for antibacterial treatment of pneumonia",
      "D": "Steroid therapy prevents nearly all serious pulmonary bacterial infections from developing"
    },
    "answer": "B",
    "explanation": "Corticosteroids can blunt fever and inflammatory findings and can worsen hyperglycemia, both of which affect diagnosis and treatment. They do not replace antibiotics and do not prevent bacterial pneumonia. Their effects are systemic, not limited to bone density."
  },
  {
    "id": 235,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "Which preventive strategy is most appropriate for many immunosuppressed older adults?",
    "options": {
      "A": "Use recommended inactivated vaccines when feasible to reduce preventable infections",
      "B": "Administer live vaccines routinely even during periods of intensive immunosuppressive therapy",
      "C": "Avoid vaccination because immune responses in these patients always fail completely",
      "D": "Delay vaccination until after a severe infection confirms preventive need clearly"
    },
    "answer": "A",
    "explanation": "Inactivated vaccines are often recommended because they can reduce preventable infection, even if response is imperfect. Live vaccines are generally avoided during significant immunosuppression. Vaccination is not futile, and waiting for severe infection misses the preventive opportunity."
  },
  {
    "id": 236,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "An older patient with a central line and fever improves on empiric broad antibiotics. Cultures identify a susceptible organism. What should happen next?",
    "options": {
      "A": "De-escalate therapy to the narrowest targeted agent active against the organism",
      "B": "Add a second broad-spectrum agent now to reduce relapse risk further",
      "C": "Stop all antibiotics immediately after one day despite documented bloodstream infection",
      "D": "Continue broad-spectrum therapy unchanged until hospital discharge to maximize safety"
    },
    "answer": "A",
    "explanation": "Once microbiology is known and the patient is improving, de-escalation to the narrowest active agent reduces toxicity and resistance pressure. Continuing broad coverage unnecessarily increases harm. Immediate discontinuation is too abrupt unless infection is excluded, and adding more agents is not indicated."
  },
  {
    "id": 237,
    "domain": "immunosuppression",
    "chapter": 25,
    "question": "A caregiver asks when to return to the hospital for an asplenic older adult on oral antibiotics. What is the best instruction?",
    "options": {
      "A": "Return after the next routine clinic appointment unless breathing stops suddenly",
      "B": "Return only if a new rash appears on the trunk area",
      "C": "Return urgently for fever, confusion, sudden weakness, or rapid clinical worsening",
      "D": "Return only if symptoms continue unchanged for longer than one month"
    },
    "answer": "C",
    "explanation": "Asplenic patients can deteriorate rapidly, so fever, confusion, or abrupt weakness warrants urgent reassessment. Waiting a month or a routine appointment is unsafe. Rash alone is not the key warning sign for overwhelming bacterial infection in this setting."
  },
  {
    "id": 238,
    "domain": "travel",
    "chapter": 26,
    "question": "An 80 year old woman plans a 10 day visit to family in rural Kenya. She has chronic kidney disease, atrial fibrillation on warfarin, and mild frailty. Which pretravel step is most appropriate?",
    "options": {
      "A": "Provide only routine influenza vaccination and omit additional destination specific counseling entirely.",
      "B": "Suggest aspirin rather than malaria prophylaxis during travel to lower infectious risk.",
      "C": "Postpone all planning until after travel if fever develops during the trip.",
      "D": "Choose itinerary specific malaria prophylaxis and review possible medication interactions carefully beforehand."
    },
    "answer": "D",
    "explanation": "This traveler needs itinerary based malaria prevention plus medication interaction review because kidney disease, warfarin, and frailty change the safest choice. Routine vaccine advice alone is incomplete. Aspirin does not prevent malaria and increases bleeding risk. Waiting until return to address fever misses the opportunity to prevent and plan for a high risk exposure."
  },
  {
    "id": 239,
    "domain": "travel",
    "chapter": 26,
    "question": "A 74 year old man returns from Nigeria with fever, headache, and confusion. Initial rapid malaria test is negative. What is the best next step?",
    "options": {
      "A": "Begin prednisone for a presumed noninfectious inflammatory fever syndrome immediately instead.",
      "B": "Repeat malaria testing promptly and broaden the diagnostic evaluation for severe infection.",
      "C": "Reassure him because a single negative test reliably excludes malaria infection.",
      "D": "Discharge him if he tolerates fluids and can still walk independently."
    },
    "answer": "B",
    "explanation": "Malaria can be missed on an initial test, especially early or with low parasitemia, so repeat testing is needed when suspicion remains high. A single negative test does not exclude malaria. Steroids are not indicated. Discharge is unsafe because fever plus confusion after travel can represent severe imported infection."
  },
  {
    "id": 240,
    "domain": "travel",
    "chapter": 26,
    "question": "A 69 year old woman develops fever, myalgias, and thrombocytopenia after visiting her son in Puerto Rico. She takes apixaban for atrial fibrillation. Which management is most appropriate?",
    "options": {
      "A": "Provide supportive care with acetaminophen and arrange close clinical monitoring.",
      "B": "Reverse anticoagulation empirically in every patient with suspected dengue infection.",
      "C": "Start immediate antimalarial treatment without performing any diagnostic testing first.",
      "D": "Use high dose ibuprofen to reduce inflammatory platelet consumption rapidly."
    },
    "answer": "A",
    "explanation": "This presentation is compatible with dengue, which is managed supportively. Acetaminophen is preferred, and NSAIDs are avoided because of bleeding risk, especially with thrombocytopenia and apixaban. Anticoagulation reversal is not routine without bleeding. Antimalarial therapy does not treat dengue and should not replace diagnostic evaluation."
  },
  {
    "id": 241,
    "domain": "travel",
    "chapter": 26,
    "question": "A 77 year old man with heart failure returns from Thailand with moderate watery diarrhea, weakness, and orthostatic symptoms. He takes a loop diuretic and an ACE inhibitor. What is the best initial approach?",
    "options": {
      "A": "Arrange immediate colonoscopy to evaluate for microscopic colitis as cause.",
      "B": "Recommend strict bowel rest until the diarrhea resolves completely on its own.",
      "C": "Stop all chronic medications permanently until outpatient follow up is arranged.",
      "D": "Begin oral rehydration, review medications, and monitor renal function closely."
    },
    "answer": "D",
    "explanation": "Older adults with diarrhea are vulnerable to dehydration and acute kidney injury, especially when taking diuretics and ACE inhibitors. Oral rehydration and medication review are the initial priorities, with renal monitoring if symptoms are significant. Colonoscopy is not first line for acute travel related diarrhea. Bowel rest is unnecessary, and permanently stopping all medications is inappropriate."
  },
  {
    "id": 242,
    "domain": "travel",
    "chapter": 26,
    "question": "A 72 year old woman reports fever after a river cruise and asks whether she needs antibiotics. She has no cough, no dysuria, and only mild loose stools. What is the best next step?",
    "options": {
      "A": "Prescribe ciprofloxacin immediately before performing any further clinical assessment.",
      "B": "Treat only if the fever continues for another two weeks.",
      "C": "Obtain a detailed travel history and assess for imported infections.",
      "D": "Assume viral gastroenteritis and avoid additional diagnostic evaluation at present."
    },
    "answer": "C",
    "explanation": "Fever after travel warrants a focused exposure history and syndrome based evaluation because malaria, dengue, enteric infection, and respiratory pathogens remain possible. Empiric ciprofloxacin without assessment is not appropriate. Viral gastroenteritis is a diagnosis of exclusion in a returned traveler with fever. Waiting two weeks can be dangerous, especially in older adults with limited reserve."
  },
  {
    "id": 243,
    "domain": "travel",
    "chapter": 26,
    "question": "A 75 year old man with cognitive impairment and insomnia is considering malaria prophylaxis for travel to a region where mefloquine is an option. Which concern is most relevant?",
    "options": {
      "A": "Universal drug resistance independent of region or local malaria patterns.",
      "B": "Risk of neuropsychiatric adverse effects in a cognitively vulnerable traveler.",
      "C": "Severe hypoglycemia as the main expected medication toxicity during prophylaxis.",
      "D": "Permanent hearing loss occurring predictably after the very first dose."
    },
    "answer": "B",
    "explanation": "Mefloquine can cause neuropsychiatric adverse effects and is a poor choice in patients with mood disorder, anxiety, seizure disorder, or cognitive vulnerability. Hypoglycemia is not the main concern. Hearing loss is not a typical limiting toxicity. Resistance patterns vary by destination, so the drug is not universally ineffective, but patient factors may still make it unsuitable."
  },
  {
    "id": 244,
    "domain": "travel",
    "chapter": 26,
    "question": "A 68 year old woman returns from Brazil with fever, retro orbital pain, and thrombocytopenia. She is hemodynamically stable but has heart failure with reduced ejection fraction. What is the best management focus?",
    "options": {
      "A": "Provide careful hydration and monitor closely for developing plasma leakage.",
      "B": "Give routine aspirin to reduce headache and limit capillary leakage.",
      "C": "Start antiviral therapy as standard disease modifying treatment for dengue.",
      "D": "Administer large volume fluids regardless of underlying cardiac function status."
    },
    "answer": "A",
    "explanation": "Dengue management centers on supportive care, fluid balance, and monitoring for warning signs such as plasma leakage, especially around fever defervescence. Aspirin increases bleeding risk and is avoided when possible. Large volume fluids can precipitate pulmonary edema in heart failure. Routine antiviral therapy is not standard treatment for dengue."
  },
  {
    "id": 245,
    "domain": "travel",
    "chapter": 26,
    "question": "A 79 year old man returns from India with profuse diarrhea after taking antibiotics for self treatment. Which additional diagnosis should be considered if symptoms persist or worsen?",
    "options": {
      "A": "Consider Clostridioides difficile infection following recent antibiotic exposure during travel.",
      "B": "Consider pulmonary embolism caused solely by dehydration after diarrheal illness.",
      "C": "Consider temporal arteritis triggered by the long haul return flight.",
      "D": "Consider acute pancreatitis caused primarily by mosquito exposure during travel."
    },
    "answer": "A",
    "explanation": "Older travelers who take antibiotics and then develop persistent diarrhea should be evaluated for C difficile, especially if symptoms are severe or prolonged. The other options do not fit the exposure and symptom pattern. Travel itself can contribute to dehydration, but it does not explain ongoing antibiotic associated diarrhea as well as C difficile does."
  },
  {
    "id": 246,
    "domain": "travel",
    "chapter": 26,
    "question": "A 71 year old man with chronic kidney disease asks how to lower infection risk on a month long trip to Southeast Asia. Which advice is most useful?",
    "options": {
      "A": "Take daily broad spectrum antibiotics continuously throughout the entire trip.",
      "B": "Rely on remembered insect exposures instead of preventive measures beforehand.",
      "C": "Practice mosquito protection, hand hygiene, and realistic food safety precautions.",
      "D": "Avoid all outdoor activities and never eat any cooked foods."
    },
    "answer": "C",
    "explanation": "Practical prevention combines mosquito avoidance, hand hygiene, and realistic food and water precautions. Avoiding all activity or all cooked food is not feasible. Continuous broad spectrum antibiotics are not recommended for routine prevention because of toxicity and resistance. Prevention should be behavior based and tailored to the itinerary and the traveler’s ability to follow the plan."
  },
  {
    "id": 247,
    "domain": "perioperative",
    "chapter": 27,
    "question": "An 84-year-old man with diabetes and stage 3 chronic kidney disease is scheduled for elective colon resection. Which perioperative step most directly reduces surgical site infection risk?",
    "options": {
      "A": "Administer preincision prophylactic antibiotics specifically matched to expected bowel flora before surgery",
      "B": "Rely on antiseptic bathing alone as the primary infection prevention measure",
      "C": "Continue broad-spectrum antibiotics routinely for five full days after the operation",
      "D": "Delay antibiotic administration until postoperative fever or other infection signs clearly develop"
    },
    "answer": "A",
    "explanation": "Preincision prophylaxis timed before incision is the key antibiotic intervention for a clean-contaminated bowel operation. It provides tissue levels during bacterial inoculation. Prolonged postoperative antibiotics are not a substitute for proper prophylaxis. Waiting for fever treats infection after it develops, which defeats prophylaxis. Antiseptic bathing helps but does not replace appropriately timed antibiotics and operative source control."
  },
  {
    "id": 248,
    "domain": "perioperative",
    "chapter": 27,
    "question": "A frail 79-year-old woman has an open, draining abscess near an intended elective hernia repair site. What is the best next step?",
    "options": {
      "A": "Proceed with the operation and prolong prophylactic antibiotics during recovery afterward",
      "B": "Give postoperative antibiotics only without altering the planned surgical approach",
      "C": "Ignore the draining lesion if the patient has no fever or chills",
      "D": "Postpone the elective operation and first treat the nearby active infection"
    },
    "answer": "D",
    "explanation": "An active infection near the operative field changes the surgical plan. Elective surgery should usually be postponed until the infection is treated or the approach is revised. Extending prophylaxis does not control an active abscess. Afebrile status does not exclude clinically significant infection, especially in older adults. Postoperative antibiotics alone do not replace source control or appropriate timing of surgery."
  },
  {
    "id": 249,
    "domain": "perioperative",
    "chapter": 27,
    "question": "A 76-year-old postoperative patient becomes confused, less interactive, and stops eating on day 3. The incision looks benign. What should be the leading clinical concern?",
    "options": {
      "A": "Antibiotic overuse as the single most likely explanation for these symptoms",
      "B": "Normal wound inflammation that requires no additional evaluation or monitoring",
      "C": "Expected age-related change without any immediate need for clinical reassessment",
      "D": "Occult postoperative infection or another serious medical complication causing this decline"
    },
    "answer": "D",
    "explanation": "In older adults, delirium and functional decline may be the first sign of infection or another postoperative complication. A benign-looking incision does not exclude pneumonia, urinary retention, line infection, medication toxicity, hypoxia, or wound infection. Normal aging is not an adequate explanation for an abrupt change. Antibiotic overuse can cause problems, but the first step is clinical reassessment rather than assuming the medication is the cause."
  },
  {
    "id": 250,
    "domain": "perioperative",
    "chapter": 27,
    "question": "A patient has persistent wound drainage and expanding erythema after surgery. When is antibiotic therapy alone least appropriate?",
    "options": {
      "A": "When a drainable abscess or other localized collection is clearly present",
      "B": "When adequate source control has already been obtained through drainage or debridement",
      "C": "When wound cultures are still pending after the incision has been opened",
      "D": "When local inflammatory findings remain mild, limited, and clinically stable"
    },
    "answer": "A",
    "explanation": "A drainable abscess or other collection requires source control. Antibiotics alone often fail when pus or devitalized tissue remains. If source control has been achieved, antibiotics may be appropriate as adjunctive therapy. Mild stable inflammation may represent normal healing and may not require antibiotics at all. Cultures can guide therapy, but they do not replace drainage when drainage is needed."
  },
  {
    "id": 251,
    "domain": "perioperative",
    "chapter": 27,
    "question": "During a long operation with substantial blood loss, which antimicrobial strategy is most appropriate?",
    "options": {
      "A": "Stop prophylactic antibiotics immediately after the initial incision is made",
      "B": "Consider intraoperative redosing of prophylactic antibiotics to maintain adequate tissue levels",
      "C": "Switch to chronic suppressive antibiotic therapy throughout the postoperative recovery period",
      "D": "Wait for postoperative culture results before giving any additional antibiotic doses"
    },
    "answer": "B",
    "explanation": "During prolonged operations or major blood loss, serum and tissue antibiotic levels may fall below protective levels, so redosing may be needed. Stopping after incision leaves the period of contamination uncovered. Chronic suppressive therapy is not standard prophylaxis. Waiting for cultures means no prophylactic coverage during the operative window, which defeats the purpose."
  },
  {
    "id": 252,
    "domain": "perioperative",
    "chapter": 27,
    "question": "An 82-year-old woman with diabetes has glucose values persistently above target after abdominal surgery. Why does this matter for infection prevention?",
    "options": {
      "A": "Hyperglycemia prevents postoperative fever and therefore masks developing infectious complications",
      "B": "Hyperglycemia impairs immune defenses and wound healing during postoperative recovery",
      "C": "Hyperglycemia removes the need for perioperative or postoperative antibiotic therapy",
      "D": "Hyperglycemia affects only long-term vascular risk, not short-term surgical outcomes"
    },
    "answer": "B",
    "explanation": "Hyperglycemia worsens neutrophil function and wound healing, increasing infection risk. It does not prevent fever, replace antibiotics, or only affect long-term risk. In the perioperative period, glucose management is part of infection prevention and recovery support, especially in older adults with variable intake and higher hypoglycemia risk."
  },
  {
    "id": 253,
    "domain": "perioperative",
    "chapter": 27,
    "question": "An older adult receives prophylactic cefazolin before surgery. Which issue should the team check before giving it?",
    "options": {
      "A": "Review a history of seasonal allergic rhinitis without medication reactions",
      "B": "Clarify the nature and severity of any reported beta-lactam allergy",
      "C": "Document baseline visual acuity and hearing before antibiotic administration",
      "D": "Confirm the patient's recent influenza vaccination status before proceeding today"
    },
    "answer": "B",
    "explanation": "The type of antibiotic allergy matters. A vague remote rash may not represent a true immediate beta-lactam allergy, whereas anaphylaxis or severe cutaneous reaction would alter management. Seasonal allergies, vaccination status, vision, and hearing do not determine beta-lactam safety. Clarifying the reaction can prevent unnecessary substitution with less effective or more toxic agents."
  },
  {
    "id": 254,
    "domain": "perioperative",
    "chapter": 27,
    "question": "A postoperative patient has mild erythema, swelling, and serous drainage on day 1 after surgery. He is afebrile and hemodynamically stable. What is the best interpretation?",
    "options": {
      "A": "These findings eliminate any need for continued wound observation or follow-up",
      "B": "These findings require immediate broad-spectrum antibiotics without further assessment",
      "C": "These findings may represent normal early postoperative wound healing changes",
      "D": "These findings prove a deep surgical site infection is already present"
    },
    "answer": "C",
    "explanation": "Early postoperative erythema, swelling, bruising, and serous drainage can be part of normal healing. Infection is more likely with purulence, worsening pain, spreading erythema, wound separation, persistent instability, or a collection. The finding does not prove deep infection and does not automatically justify broad antibiotics. Continued observation and reassessment are appropriate if the patient remains stable."
  },
  {
    "id": 255,
    "domain": "perioperative",
    "chapter": 27,
    "question": "An 80-year-old postoperative patient is ready for discharge on oral antibiotics after incision and drainage of an infected wound. Which discharge plan is most appropriate?",
    "options": {
      "A": "Clearly specify the indication, duration, and required wound follow-up plan",
      "B": "Omit detailed medication instructions to minimize confusion during discharge counseling",
      "C": "Stop arranging follow-up because the drainage procedure already solved everything",
      "D": "Continue antibiotics until every trace of redness has completely disappeared"
    },
    "answer": "A",
    "explanation": "Transitions of care should state why the antibiotic is being used, how long it should continue, and what follow-up is needed. Persistent redness alone does not justify indefinite therapy. Omitting details increases the risk of medication errors and prolonged unnecessary treatment. Drainage helps source control but does not eliminate the need for follow-up in older adults, who may deteriorate subtly."
  },
  {
    "id": 256,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "An 84-year-old woman has mandibular swelling, trismus, and difficulty swallowing. What is the best next step?",
    "options": {
      "A": "Immediate emergency assessment for deep odontogenic infection with possible airway compromise today",
      "B": "Provide oral analgesics and arrange outpatient dental referral for evaluation tomorrow",
      "C": "Prescribe routine oral antibiotics alone without prompt dental source intervention",
      "D": "Start topical chlorhexidine rinses and monitor symptoms closely at home"
    },
    "answer": "A",
    "explanation": "Trismus, dysphagia, and mandibular swelling suggest deep space odontogenic infection with possible airway risk. Urgent emergency evaluation is needed for imaging, airway assessment, and source control. Outpatient delay is unsafe. Chlorhexidine does not treat deep infection. Antibiotics alone rarely cure an odontogenic source without drainage, extraction, or endodontic treatment."
  },
  {
    "id": 257,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "Which finding most strongly argues against simple conjunctivitis in an older adult with red eye?",
    "options": {
      "A": "Watery discharge occurring in both eyes without significant associated pain",
      "B": "Recent close exposure to a family member with pink eye",
      "C": "Mild itching present without eye pain or change in vision",
      "D": "Marked photophobia accompanied by reduced visual acuity in the affected eye"
    },
    "answer": "D",
    "explanation": "Photophobia and reduced visual acuity suggest corneal or intraocular disease such as keratitis, uveitis, glaucoma, or endophthalmitis. These findings require urgent ophthalmic assessment. Watery discharge, itching, and household exposure fit common conjunctivitis patterns and are less concerning when vision and pain are preserved."
  },
  {
    "id": 258,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "An older adult with inhaled corticosteroid use develops removable white oral plaques. What is the most appropriate treatment?",
    "options": {
      "A": "Use topical antifungal therapy and rinse mouth after each inhaler use",
      "B": "Arrange immediate surgical debridement for the visible oral lesions today",
      "C": "Provide no treatment because these plaques reflect normal aging changes",
      "D": "Begin high-dose systemic steroids for presumed oral mucosal inflammation immediately"
    },
    "answer": "A",
    "explanation": "Removable white plaques after inhaled corticosteroid exposure are classic for oral candidiasis. Topical antifungal therapy is appropriate for localized disease, and rinsing after inhaler use reduces recurrence. Systemic steroids would worsen fungal overgrowth. Surgical debridement is not indicated. This is not a normal aging change and can impair intake if untreated."
  },
  {
    "id": 259,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "Which patient with red eye needs the most urgent ophthalmology evaluation?",
    "options": {
      "A": "Older adult with bilateral itching and persistent watery eye discharge",
      "B": "Contact lens wearer with eye pain and visible corneal staining",
      "C": "Person with mild conjunctival injection and no associated eye pain",
      "D": "Patient with seasonal redness that usually improves after resting indoors"
    },
    "answer": "B",
    "explanation": "Contact lens wear plus pain and corneal staining strongly suggests keratitis, which can progress rapidly and threaten vision. This requires urgent ophthalmology evaluation and targeted therapy. Bilateral itching and watery discharge are more consistent with allergic or viral conjunctivitis. Mild injection without pain is lower risk, though follow-up is still reasonable if symptoms persist."
  },
  {
    "id": 260,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "Which statement best describes infective endocarditis prophylaxis for dental procedures?",
    "options": {
      "A": "Used whenever dental pain or swelling suggests an active oral infection",
      "B": "Recommended routinely for all older adults who have any heart disease",
      "C": "Needed for every patient who has atrial fibrillation before dental work",
      "D": "Reserved for patients with selected high-risk cardiac conditions undergoing specific procedures"
    },
    "answer": "D",
    "explanation": "Endocarditis prophylaxis is limited to selected high-risk cardiac conditions and specific procedures. It is not given for all heart disease, atrial fibrillation, or routine dental pain. The key is matching prophylaxis to established high-risk anatomy or prior endocarditis, then coordinating with the dental procedure plan."
  },
  {
    "id": 261,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "An 81-year-old woman has chronic halitosis, bleeding gums, and loose teeth. What is the best interpretation?",
    "options": {
      "A": "Findings suggest periodontal disease that warrants prompt comprehensive dental evaluation",
      "B": "This presentation indicates viral conjunctivitis that has spread into the mouth",
      "C": "These symptoms are explained entirely by a medication side effect",
      "D": "This should be assumed mandibular osteomyelitis unless another cause is proven"
    },
    "answer": "A",
    "explanation": "Bleeding gums, halitosis, and loose teeth are classic for periodontal disease and require dental evaluation for hygiene, scaling, and possible procedural treatment. These findings are not explained by viral conjunctivitis. Medications may worsen dry mouth, but they do not fully account for tooth mobility. Osteomyelitis is possible in advanced cases, but it is not the default interpretation from this presentation alone."
  },
  {
    "id": 262,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "Which treatment approach is most appropriate for localized oral candidiasis in a frail older adult?",
    "options": {
      "A": "Start broad-spectrum intravenous antibiotics immediately for presumed oral infection",
      "B": "Arrange urgent extraction of all remaining teeth to remove infection",
      "C": "Use topical antifungal therapy if the medication can be administered reliably",
      "D": "Apply high-dose topical anesthetic alone for temporary symptom relief"
    },
    "answer": "C",
    "explanation": "Localized oral candidiasis is often treated with topical antifungal therapy when the patient can use it reliably. Frailty does not change the first-line choice, but it increases the need to consider adherence and hydration. Intravenous antibiotics are inappropriate because the infection is fungal. Topical anesthetic may help pain but does not treat the cause. Extraction is not a treatment for thrush."
  },
  {
    "id": 263,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "An 86-year-old man has unilateral eye pain, blurred vision, corneal opacity, and photophobia. What is the most likely diagnosis category?",
    "options": {
      "A": "Allergic conjunctivitis requiring only antihistamine drops and home observation",
      "B": "Routine bacterial conjunctivitis suitable for watchful waiting without specialist involvement",
      "C": "Benign age-related tearing with redness that needs no urgent assessment",
      "D": "Corneal infection requiring urgent ophthalmology evaluation and targeted treatment soon"
    },
    "answer": "D",
    "explanation": "Unilateral pain, blurred vision, photophobia, and corneal opacity suggest keratitis or another corneal infection. This is an urgent ophthalmology problem because vision can be lost quickly. Routine conjunctivitis typically causes irritation and discharge without corneal opacity or significant vision loss. Allergic conjunctivitis is usually itchy and bilateral. Age-related tearing does not cause this level of pain or corneal change."
  },
  {
    "id": 264,
    "domain": "oral_ocular",
    "chapter": 28,
    "question": "Which factor most strongly increases the need to involve caregivers in oral or ocular infection treatment?",
    "options": {
      "A": "Mild cognitive impairment causing poor ability to self-administer prescribed treatments",
      "B": "A single toothache that resolved spontaneously after eating a meal",
      "C": "Transient watery eyes occurring briefly after routine outdoor exposure",
      "D": "Seasonal allergies managed with over-the-counter medication during symptomatic periods"
    },
    "answer": "A",
    "explanation": "Cognitive impairment can prevent reliable medication use, eye drop administration, oral hygiene, and recognition of worsening symptoms. Caregiver involvement improves safety and follow-up. Seasonal allergies and transient watery eyes are not the same risk context. A resolved toothache does not imply treatment adherence or the need for caregiver support."
  },
  {
    "id": 265,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "An 84-year-old with a painful, swollen knee prosthesis is afebrile and confused. What is the best next step?",
    "options": {
      "A": "Obtain plain knee radiographs, then discharge home with routine outpatient follow-up",
      "B": "Treat presumed crystal arthritis using colchicine alone without aspirating the prosthetic joint",
      "C": "Perform urgent synovial aspiration before giving antibiotics for possible prosthetic joint infection",
      "D": "Start oral antibiotics now and observe closely for clinical improvement over days"
    },
    "answer": "C",
    "explanation": "Aspiration is the best next step because prosthetic joint infection cannot be excluded by afebrile status or normal radiographs, especially in older adults. Synovial analysis and culture guide diagnosis and treatment. Starting antibiotics first can reduce culture yield. Plain films may be unrevealing early. Gout can mimic infection, but crystal disease does not exclude infection, so aspiration is still needed."
  },
  {
    "id": 266,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "An older adult has focal back pain, elevated inflammatory markers, and MRI showing disc space and adjacent endplate edema. What diagnosis is most likely?",
    "options": {
      "A": "Vertebral osteomyelitis causing discitis with adjacent infected endplates seen on MRI",
      "B": "Lumbar muscle strain causing spasm without vertebral or disc inflammatory changes",
      "C": "Spinal metastatic disease causing pain but typically sparing the intervertebral disc",
      "D": "Primary osteoporosis causing compression-related pain without disc-centered marrow edema findings"
    },
    "answer": "A",
    "explanation": "Disc space involvement with adjacent endplate marrow edema is characteristic of vertebral osteomyelitis with discitis. Muscle strain and osteoporosis do not explain this imaging pattern. Metastatic disease can cause back pain, but the disc-centered inflammatory appearance strongly supports infection. Blood cultures and further microbiologic evaluation are typically indicated."
  },
  {
    "id": 267,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "Which feature most strongly suggests septic arthritis rather than osteoarthritis flare in an older adult?",
    "options": {
      "A": "Gradual crepitus over months without hot swelling or significant joint effusion",
      "B": "Pain occurring only after extended walking and relieved predictably by rest",
      "C": "Intermittent stiffness developing mainly after prolonged sitting and improving with motion",
      "D": "Severe pain during both passive and active movement of the affected joint"
    },
    "answer": "D",
    "explanation": "Septic arthritis usually causes marked pain with both passive and active range of motion because inflammation is within the joint. Osteoarthritis more often causes mechanical pain, stiffness, and crepitus without an acutely hot effusion. Pain only after use and gradual stiffness are more typical of degenerative disease."
  },
  {
    "id": 268,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "A stable patient with suspected vertebral osteomyelitis has negative blood cultures. What diagnostic step is most appropriate?",
    "options": {
      "A": "Begin broad-spectrum antibiotics immediately without obtaining any further tissue sampling",
      "B": "Repeat plain spinal radiographs in six months to assess interval progression",
      "C": "Arrange image-guided biopsy of the affected vertebra for microbiologic diagnosis",
      "D": "Rely on erythrocyte sedimentation rate alone to confirm the suspected diagnosis"
    },
    "answer": "C",
    "explanation": "When blood cultures do not identify a pathogen and the patient is stable, image-guided biopsy helps establish microbiology and exclude mimics. Starting antibiotics first can lower biopsy yield. Plain radiographs are insensitive early and too delayed for this scenario. Inflammatory markers support suspicion but do not establish the organism or confirm the diagnosis alone."
  },
  {
    "id": 269,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "An older adult with prosthetic joint infection has a stable implant, short symptom duration, and good surgical candidacy. What management strategy best fits?",
    "options": {
      "A": "Observe expectantly until pain resolves without operative or antimicrobial intervention",
      "B": "Use antibiotics alone without surgical source control despite the prosthetic biofilm",
      "C": "Perform surgical debridement with implant retention for this early stable infection",
      "D": "Proceed directly to limb amputation as the initial management approach"
    },
    "answer": "C",
    "explanation": "Debridement with implant retention can be appropriate in selected early prosthetic joint infections when the implant is stable and symptoms are recent. Antibiotics alone are usually insufficient because of biofilm. Amputation is reserved for unusual salvage failures or life-threatening circumstances. Observation allows ongoing biofilm infection and joint destruction."
  },
  {
    "id": 270,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "An 81-year-old with chronic osteomyelitis has necrotic bone and a draining sinus tract. What principle best applies?",
    "options": {
      "A": "Achieving source control through debridement is central to successful cure",
      "B": "Short courses of antibiotics alone usually cure this chronic bone infection",
      "C": "A normal body temperature effectively excludes ongoing osteomyelitis in older adults",
      "D": "MRI becomes unnecessary once a draining sinus tract is clinically present"
    },
    "answer": "A",
    "explanation": "Chronic osteomyelitis persists because devitalized bone and sometimes hardware shield organisms from antibiotics, so debridement or removal of necrotic tissue is central to cure. Short antibiotic courses alone usually fail. Afebrile status does not exclude infection in older adults. Imaging may still be needed to define extent, surgical planning, and adjacent involvement."
  },
  {
    "id": 271,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "An older adult with suspected septic arthritis is stable. Which action best preserves microbiologic diagnosis?",
    "options": {
      "A": "Treat first and obtain cultures only if fever or instability later develops",
      "B": "Defer aspiration until symptoms become more severe despite conservative management",
      "C": "Collect synovial fluid before starting antibiotics to maximize culture diagnostic yield",
      "D": "Give empiric antibiotics immediately, then aspirate the joint fluid at a later time"
    },
    "answer": "C",
    "explanation": "When the patient is stable, aspiration before antibiotics improves culture yield and diagnostic accuracy. Starting therapy first can sterilize fluid and obscure the pathogen. Waiting for fever risks joint damage. Delaying aspiration until symptoms worsen adds no diagnostic advantage and may increase morbidity."
  },
  {
    "id": 272,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "Which statement about older adults with bone or joint infection is most accurate?",
    "options": {
      "A": "Plain radiographs reliably exclude early vertebral or joint infection findings",
      "B": "A normal white blood cell count rules out musculoskeletal infection",
      "C": "Fever is required before diagnosing bone or joint infection in elders",
      "D": "Delirium may be the presenting symptom in older adults with infection"
    },
    "answer": "D",
    "explanation": "Older adults often present atypically, and delirium or functional decline may be the main clue. Fever is often absent, especially early or in frail patients. Plain radiographs can be normal early in vertebral and joint infections. A normal white blood cell count does not exclude infection."
  },
  {
    "id": 273,
    "domain": "bones_joints",
    "chapter": 29,
    "question": "A frail older adult with prosthetic joint infection declines major surgery and wants symptom-focused care. What option is most appropriate to discuss?",
    "options": {
      "A": "Recommend immediate discontinuation of all chronic medications and active management",
      "B": "Discuss long-term suppressive antibiotic therapy for symptom control without cure",
      "C": "Offer intra-articular steroid injections as treatment for the prosthetic infection",
      "D": "Provide no treatment until systemic sepsis develops and hospitalization becomes necessary"
    },
    "answer": "B",
    "explanation": "When curative surgery is not feasible or not aligned with goals of care, long-term suppressive antibiotics may reduce symptoms or slow progression, though they are not curative. Waiting for sepsis is unsafe. Stopping all medications is inappropriate. Steroid injections can worsen infection and are not a treatment for prosthetic infection."
  },
  {
    "id": 274,
    "domain": "fever",
    "chapter": 30,
    "question": "An 80-year-old woman has three weeks of intermittent fever, weight loss, and normal chest radiograph. Exam shows scalp tenderness and jaw fatigue. What diagnosis is most likely?",
    "options": {
      "A": "Giant cell arteritis causing constitutional symptoms with cranial ischemic features and fever",
      "B": "Drug fever from longstanding antihypertensive therapy without a temporal medication relationship",
      "C": "Occult pancreatitis presenting primarily with fever despite absent abdominal pain or enzyme elevation",
      "D": "Chronic urinary infection causing fever without urinary complaints or cranial ischemic symptoms"
    },
    "answer": "A",
    "explanation": "Giant cell arteritis can present in older adults with fever, weight loss, elevated inflammatory markers, headache, scalp tenderness, and jaw claudication. Urinary infection without urinary symptoms is possible but less supported by the cranial ischemic symptoms. Drug fever requires a medication temporal relationship and usually lacks this classic cranial syndrome. Occult pancreatitis is not the best fit without abdominal pain, pancreatic enzyme abnormalities, or compatible imaging findings."
  },
  {
    "id": 275,
    "domain": "fever",
    "chapter": 30,
    "question": "A frail 77-year-old man develops fever five days after starting trimethoprim-sulfamethoxazole. Cultures are negative and no source is found. What is the best next step?",
    "options": {
      "A": "Add vancomycin empirically for possible resistant infection despite negative cultures throughout",
      "B": "Stop the suspected medication and observe closely for prompt defervescence afterward",
      "C": "Start corticosteroids immediately for presumed vasculitis despite limited supporting clinical evidence",
      "D": "Continue the current medication until the prescribed treatment course is completed"
    },
    "answer": "B",
    "explanation": "Drug fever should be considered after a new medication, especially when cultures are negative and no focus is found. Stopping the suspected agent is the diagnostic and therapeutic step. Adding vancomycin broadens toxicity without evidence of bacterial infection. Continuing the drug perpetuates the reaction. Corticosteroids are not indicated unless the history and examination suggest a specific inflammatory syndrome such as vasculitis."
  },
  {
    "id": 276,
    "domain": "fever",
    "chapter": 30,
    "question": "An 83-year-old nursing facility resident has recurrent fever, back pain, and elevated inflammatory markers. Blood cultures remain positive despite antibiotics. Which complication should be pursued urgently?",
    "options": {
      "A": "Functional fever from immobility and dehydration despite repeatedly positive blood cultures",
      "B": "Medication allergy causing fever without an infectious source despite positive blood cultures",
      "C": "Vertebral osteomyelitis or spinal epidural extension causing persistent bacteremia and back pain",
      "D": "Simple viral syndrome resolving spontaneously despite ongoing bacteremia and inflammatory marker elevation"
    },
    "answer": "C",
    "explanation": "Back pain plus persistent bacteremia and inflammatory markers strongly suggests a deep infectious focus such as vertebral osteomyelitis, possibly with epidural extension. Functional fever is not a diagnosis that explains persistent positive blood cultures. A simple viral syndrome would not usually produce persistent bacteremia. Medication allergy can cause fever, but it does not explain ongoing positive cultures."
  },
  {
    "id": 277,
    "domain": "fever",
    "chapter": 30,
    "question": "An 82-year-old man has fever, anemia, night sweats, and new cervical lymphadenopathy. Which diagnosis should rise on the differential?",
    "options": {
      "A": "Benign age-related temperature variation without explanation for constitutional symptoms or adenopathy",
      "B": "Seasonal allergic rhinitis with dehydration causing congestion but not anemia or lymphadenopathy",
      "C": "Hematologic malignancy such as lymphoma causing systemic symptoms and lymph node enlargement",
      "D": "Uncomplicated osteoarthritis flare causing joint discomfort without systemic inflammatory features present"
    },
    "answer": "C",
    "explanation": "Fever with anemia, night sweats, and lymphadenopathy is a classic pattern for lymphoma or another hematologic malignancy. Osteoarthritis does not cause systemic inflammatory symptoms. Allergic rhinitis does not explain anemia or lymphadenopathy. Age-related temperature variation may alter baseline readings, but it does not account for this systemic syndrome."
  },
  {
    "id": 278,
    "domain": "fever",
    "chapter": 30,
    "question": "A stable 79-year-old woman has fever of unknown origin after an unrevealing initial evaluation. She is not hypotensive and has no focal source. What is the most appropriate approach?",
    "options": {
      "A": "Discharge without follow-up simply because initial cultures were negative and unrevealing",
      "B": "Treat immediately with two broad-spectrum antibiotics despite stability and absent focal findings",
      "C": "Repeat focused history and examination before starting broad empiric antimicrobial therapy",
      "D": "Ignore the fever entirely if blood pressure remains normal during evaluation"
    },
    "answer": "C",
    "explanation": "In a stable patient with persistent unexplained fever, repeated targeted history and examination often provide the next clue and avoid unnecessary toxicity. Immediate broad antibiotics are reserved for instability or strong evidence of bacterial infection. Normal blood pressure does not exclude serious disease. Negative cultures do not justify abandoning follow-up when the syndrome persists."
  },
  {
    "id": 279,
    "domain": "fever",
    "chapter": 30,
    "question": "An older adult with dementia develops fever, lethargy, and loss of appetite. No clear localizing symptoms are reported. What geriatric principle best applies?",
    "options": {
      "A": "Normal temperature reliably excludes significant inflammatory disease in late life",
      "B": "Cognition remains unaffected by systemic illness in vulnerable older adults",
      "C": "Fever always produces prominent focal symptoms in older adults with infection",
      "D": "Delirium and functional decline may predominate over focal symptoms in illness"
    },
    "answer": "D",
    "explanation": "Older adults may present with delirium, anorexia, weakness, falls, or functional decline rather than focal symptoms. Fever may be blunted and temperature may not be striking. A normal or modest temperature does not exclude serious disease. Cognition is often affected by systemic illness, dehydration, pain, or infection in late life."
  },
  {
    "id": 280,
    "domain": "fever",
    "chapter": 30,
    "question": "An 85-year-old with fever, headache, and suspected giant cell arteritis has delayed visual symptoms. Which action is most appropriate?",
    "options": {
      "A": "Give acetaminophen alone and reassess symptoms again after one full week",
      "B": "Begin amphotericin therapy for occult fungal infection without supporting evidence",
      "C": "Wait for biopsy results before any treatment is initiated despite visual risk",
      "D": "Start urgent corticosteroids while arranging diagnostic confirmation of suspected arteritis promptly"
    },
    "answer": "D",
    "explanation": "When giant cell arteritis is strongly suspected, urgent corticosteroid therapy is appropriate because visual loss can be irreversible. Diagnostic confirmation should still be pursued, but therapy should not wait if ischemic risk is significant. Acetaminophen alone is inadequate. Amphotericin is not indicated without evidence for invasive fungal disease."
  },
  {
    "id": 281,
    "domain": "fever",
    "chapter": 30,
    "question": "A 78-year-old with CKD and fever is being considered for empiric treatment. Which medication risk is most concerning?",
    "options": {
      "A": "Acetaminophen causing immediate renal infarction after standard fever treatment dosing",
      "B": "Nonsteroidal anti-inflammatory drug worsening kidney injury in chronic kidney disease patients",
      "C": "Topical emollient causing bacteremia during routine supportive skin care application",
      "D": "Oral saline causing severe neutropenia during hydration for febrile illness"
    },
    "answer": "B",
    "explanation": "NSAIDs can worsen kidney injury, gastrointestinal bleeding risk, and heart failure, particularly in older adults with chronic kidney disease. Acetaminophen is generally preferred for fever comfort when used appropriately. Topical emollients do not cause bacteremia. Oral saline is not associated with neutropenia."
  },
  {
    "id": 282,
    "domain": "fever",
    "chapter": 30,
    "question": "A frail 81-year-old has persistent fever, negative cultures, and a history of recent dental work. Exam reveals a new murmur. What evaluation is most appropriate?",
    "options": {
      "A": "No further workup because negative cultures exclude serious cardiac infection",
      "B": "Echocardiography for possible endovascular infection causing persistent fever and new murmur",
      "C": "Start corticosteroids for presumed drug fever despite concerning cardiac findings",
      "D": "Assume viral illness and stop monitoring despite murmur and bacteremia risk"
    },
    "answer": "B",
    "explanation": "A new murmur in the setting of persistent fever and recent bacteremia risk factors raises concern for endocarditis or another endovascular infection, so echocardiography is appropriate. Negative cultures do not rule out endocarditis, especially after prior antibiotics. Assuming a viral illness ignores the murmur and risk profile. Corticosteroids are not the next step unless there is evidence of an inflammatory syndrome rather than infection."
  },
  {
    "id": 283,
    "domain": "transitions",
    "chapter": 31,
    "question": "An 82-year-old man is discharged home after treatment for pyelonephritis. The summary lists ciprofloxacin but gives no stop date. He has stage 4 chronic kidney disease and lives alone with mild cognitive impairment. What is the best next step?",
    "options": {
      "A": "Add another antibiotic now to cover potentially resistant organisms after discharge",
      "B": "Clarify infection indication, renal dosing, and intended total duration with discharging team",
      "C": "Stop the antibiotic immediately because discharge instructions lacked a documented stop date",
      "D": "Continue this antibiotic prescription unchanged until routine outpatient follow-up in three months"
    },
    "answer": "B",
    "explanation": "The key problem is an unsafe transition, not an automatic need to stop or broaden therapy. The receiving clinician should clarify the infection being treated, renal adjustment, and intended total duration. Continuing for months is inappropriate, stopping immediately may be unsafe without context, and adding another antibiotic increases harm without evidence of treatment failure."
  },
  {
    "id": 284,
    "domain": "transitions",
    "chapter": 31,
    "question": "A nursing home resident returns from the hospital on oral antibiotics for cellulitis. The facility receives a medication list but no culture results or reassessment plan. Two days later, the leg looks improved. What communication best supports safe care?",
    "options": {
      "A": "Continue the antibiotics indefinitely until another hospitalization provides a natural reassessment",
      "B": "Switch immediately to intravenous therapy because the hospital used oral treatment",
      "C": "Order blood cultures every day until the entire antibiotic course finishes",
      "D": "Document the intended stop date and identify who will review clinical response"
    },
    "answer": "D",
    "explanation": "Transitions are safest when the plan includes duration and responsibility for reassessment. Improvement may allow completion of the planned short course, but that depends on the original indication and response plan. Automatic escalation to intravenous therapy is unnecessary, indefinite continuation is unsafe, and routine daily blood cultures are not indicated for improving cellulitis."
  },
  {
    "id": 285,
    "domain": "transitions",
    "chapter": 31,
    "question": "An 86-year-old woman with dementia is discharged after treated urosepsis. The daughter reports increasing confusion and poor oral intake at home. The antibiotic is being taken as prescribed. What should the clinician consider first?",
    "options": {
      "A": "Immediately extend the antibiotic course by two additional weeks after discharge",
      "B": "Start chronic suppressive antibiotic therapy for ongoing confusion after hospitalization",
      "C": "Assume persistent infection is proven by the discharge medication list alone",
      "D": "Evaluate for dehydration, delirium, or an adverse medication effect first"
    },
    "answer": "D",
    "explanation": "Postdischarge decline in an older adult is often multifactorial. Poor intake, dehydration, delirium, and medication toxicity can mimic infection persistence. Extending therapy without reassessing the cause risks harm. The medication list alone does not prove ongoing infection, and chronic suppressive therapy is not a default response to confusion after discharge."
  },
  {
    "id": 286,
    "domain": "transitions",
    "chapter": 31,
    "question": "A patient discharged to home with oral linezolid has chronic sertraline therapy. The discharge summary does not mention interaction monitoring. What is the most appropriate action?",
    "options": {
      "A": "Double the linezolid dose now to shorten the planned treatment course",
      "B": "Ignore the interaction because oral antibiotic therapy is always inherently safer",
      "C": "Review the interaction risk and arrange monitoring or an alternative regimen",
      "D": "Stop sertraline permanently without discussing psychiatric risks or treatment indication"
    },
    "answer": "C",
    "explanation": "The transition plan must address clinically meaningful drug interactions. Linezolid can interact with serotonergic drugs, so the receiving clinician should review the risk, monitoring plan, and whether an alternative regimen is preferred. Oral therapy is not automatically safer, dose escalation is inappropriate, and stopping sertraline permanently is not justified without a deliberate psychiatric and medication review."
  },
  {
    "id": 287,
    "domain": "transitions",
    "chapter": 31,
    "question": "An 88-year-old woman recovering from pneumonia is transferred to a skilled nursing facility. The discharge packet states only, continue antibiotics for several days. What is the most useful corrective element?",
    "options": {
      "A": "Request repeat chest imaging every 24 hours during antibiotic treatment",
      "B": "State that the facility should determine the diagnosis later if needed",
      "C": "Specify exact drug, dose, route, and stop date or reassessment point",
      "D": "Provide a complete list of every antibiotic used since early childhood"
    },
    "answer": "C",
    "explanation": "Safe antimicrobial transitions require operational details. The receiving site needs the exact regimen and when to stop or reassess it. A vague several days instruction invites prolongation or early discontinuation. Childhood antibiotic history is irrelevant, delaying the diagnosis is unsafe, and routine daily imaging is not the solution to poor discharge communication."
  },
  {
    "id": 288,
    "domain": "transitions",
    "chapter": 31,
    "question": "A frail 90-year-old man with chronic kidney disease is sent home after treated pneumonia. The antibiotic was renal adjusted in the hospital, but the discharge list shows the usual adult dose. What is the main risk?",
    "options": {
      "A": "Excess drug exposure causing toxicity from an unadjusted discharge dose",
      "B": "Immediate treatment failure simply because the regimen uses oral therapy",
      "C": "Reduced treatment efficacy because all older adults require higher antibiotic doses",
      "D": "A universal need for probiotic prophylaxis with every antibiotic prescription"
    },
    "answer": "A",
    "explanation": "A standard adult dose can be excessive after discharge in an older adult with reduced kidney function, leading to toxicity. Older adults do not universally need higher doses, probiotics are not a universal fix, and oral therapy is not inherently inferior when appropriately selected and absorbed."
  },
  {
    "id": 289,
    "domain": "transitions",
    "chapter": 31,
    "question": "A hospital discharge summary for a urinary infection says the patient improved but omits the culture result and planned follow-up. The receiving clinician is unsure whether therapy should continue. What information most directly supports de-escalation?",
    "options": {
      "A": "The final organism identification and complete susceptibility testing report",
      "B": "The calendar year when the hospital originally opened for service",
      "C": "The total number of relatives participating in home care planning",
      "D": "The patient’s preferred medication name before this acute hospitalization"
    },
    "answer": "A",
    "explanation": "De-escalation depends on knowing the organism and its susceptibility pattern. That information can justify narrowing, changing route, or stopping when the planned course is complete. Baseline preferences, family size, and hospital history do not guide antimicrobial narrowing."
  },
  {
    "id": 290,
    "domain": "transitions",
    "chapter": 31,
    "question": "A 79-year-old woman with a hip fracture and postoperative pneumonia is being discharged to a rehabilitation facility. She can swallow pills but has fluctuating attention and poor appetite. Which transition instruction is most important?",
    "options": {
      "A": "State that all medications should routinely be taken only at bedtime",
      "B": "Specify who will administer antibiotics and how adherence will be monitored",
      "C": "Record the exact name of the hospital cafeteria used during admission",
      "D": "Promise that delirium will completely resolve before the rehabilitation transfer"
    },
    "answer": "B",
    "explanation": "Cognitive fluctuation and poor intake make adherence an operational issue. The handoff should state who administers medications, how adherence is checked, and what to do if doses are missed. Meal location and bedtime scheduling are not key transition issues, and delirium often persists after discharge, so a promise of resolution is not a plan."
  },
  {
    "id": 291,
    "domain": "transitions",
    "chapter": 31,
    "question": "An 83-year-old man completes antibiotics for diverticulitis at home. Two days later, he reports new watery diarrhea and weakness. What should the clinician do first?",
    "options": {
      "A": "Add a second antibiotic now to reduce the chance of readmission",
      "B": "Assess for dehydration and possible antibiotic-associated adverse effects before retreating",
      "C": "Assume the original infection returned without any additional clinical evaluation",
      "D": "Restart the completed antibiotic immediately because symptoms have apparently recurred"
    },
    "answer": "B",
    "explanation": "New diarrhea after antibiotics in an older adult should prompt assessment for volume depletion and drug adverse effects, with infection recurrence considered only after clinical review. Automatically restarting or adding antibiotics can worsen harm and does not address the likely transition-related complication."
  },
  {
    "id": 292,
    "domain": "prevention",
    "chapter": 32,
    "question": "A rehabilitation unit wants a better infection prevention metric for daily practice. Which measure is most actionable at the unit level?",
    "options": {
      "A": "Hospital revenue losses attributed to increased isolation room use this year",
      "B": "Observed hand hygiene opportunities during routine bedside care across typical weekday shifts",
      "C": "Annual statewide infection rate adjusted only for age across diverse hospitals",
      "D": "Number of educational posters newly placed throughout patient care hallways"
    },
    "answer": "B",
    "explanation": "Observed hand hygiene opportunities directly reflect bedside behavior that the unit can change through supply placement, feedback, and workflow redesign. A statewide rate is too distal for day to day improvement. Revenue loss is not a prevention metric. Posters may support culture, but they do not measure performance."
  },
  {
    "id": 293,
    "domain": "prevention",
    "chapter": 32,
    "question": "An older adult with dementia repeatedly misses hand sanitizer before meals because she cannot remember instructions. What is the best prevention response?",
    "options": {
      "A": "Place sanitizer consistently at the point of care before each meal",
      "B": "Limit family visits to reduce distractions during mealtime hygiene routines",
      "C": "Rely on frequent verbal reminders from nurses before meals every day",
      "D": "Ignore the problem unless an infection actually develops during admission"
    },
    "answer": "A",
    "explanation": "The best response is to redesign the environment so the safe action is easy and reliable. Repeated reminders depend on memory and attention that are impaired. Waiting for an infection treats failure only after harm occurs. Restricting family visits does not correct the core process and may worsen cognition and well-being."
  },
  {
    "id": 294,
    "domain": "prevention",
    "chapter": 32,
    "question": "A unit reports fewer infections this quarter, but screening was reduced because staff were busy. What is the most likely interpretation?",
    "options": {
      "A": "The lower reported rate may simply reflect under detection of cases",
      "B": "Reducing screening intensity generally improves overall infection reporting accuracy substantially",
      "C": "This result proves environmental cleaning practices were fully adequate throughout",
      "D": "The prevention program is definitely more effective across the unit this quarter"
    },
    "answer": "A",
    "explanation": "A lower observed rate can reflect fewer identified events when screening decreases. Improvement cannot be assumed without knowing whether surveillance intensity was stable. Reduced screening does not improve accuracy. Environmental cleaning might still be inadequate, because the result does not isolate the cause."
  },
  {
    "id": 295,
    "domain": "prevention",
    "chapter": 32,
    "question": "Which practice best reflects source control in a geriatric prevention program?",
    "options": {
      "A": "Using antibiotics routinely after every patient transfer between care settings",
      "B": "Keeping a nonessential urinary catheter in place despite no clear indication",
      "C": "Promptly removing a nonessential urinary catheter to reduce ongoing exposure",
      "D": "Scheduling additional family meetings to discuss general prevention goals together"
    },
    "answer": "C",
    "explanation": "Source control includes removing avoidable reservoirs and devices that increase exposure risk. A nonessential catheter should be removed promptly. Keeping it in place increases risk. Routine antibiotics after transfer are not a prevention strategy and can cause harm. Family meetings support communication but do not control sources."
  },
  {
    "id": 296,
    "domain": "prevention",
    "chapter": 32,
    "question": "A nursing home resident with frailty and hearing loss is given complex written instructions about isolation precautions. What is the main problem?",
    "options": {
      "A": "The plan relies too heavily on patient self advocacy and initiative",
      "B": "Isolation precautions are never appropriate for frail older adults in facilities",
      "C": "Hearing loss generally improves adherence to written isolation precaution instructions",
      "D": "Written instructions consistently work better than verbal counseling for older adults"
    },
    "answer": "A",
    "explanation": "This patient may not be able to use written instructions effectively because of sensory loss and frailty. Prevention plans should not depend on self advocacy alone. Written instructions are not always superior. Isolation can be appropriate when indicated. Hearing loss makes communication harder, not easier."
  },
  {
    "id": 297,
    "domain": "prevention",
    "chapter": 32,
    "question": "A unit is deciding how to verify environmental cleaning after patient discharge. Which approach is strongest?",
    "options": {
      "A": "Assume cleaning was completed if the room appears generally tidy afterward",
      "B": "Use a shared checklist with direct verification of completed cleaning steps",
      "C": "Rely on one annual staff lecture about discharge cleaning expectations",
      "D": "Ask patients to document whether environmental surfaces seem clean enough"
    },
    "answer": "B",
    "explanation": "A shared checklist plus verification creates a reproducible process and clarifies ownership. Visual tidiness does not confirm cleaning of high touch surfaces. Patients are not reliable auditors for this task. A lecture may improve knowledge but does not confirm completion or quality."
  },
  {
    "id": 298,
    "domain": "prevention",
    "chapter": 32,
    "question": "An older adult has mild symptoms after a facility exposure, but the team is unsure whether to continue enhanced precautions. What is the best principle?",
    "options": {
      "A": "Avoid reassessment because changing plans may confuse staff and patients",
      "B": "Stop precautions promptly once they are no longer clinically indicated",
      "C": "Escalate isolation after every exposure regardless of symptoms or context",
      "D": "Continue all enhanced precautions indefinitely regardless of changing clinical information"
    },
    "answer": "B",
    "explanation": "Prevention measures should be de escalated when the triggering concern is clarified and no longer supports them. Indefinite precautions increase isolation burden and functional harm. Escalating every exposure ignores clinical context. Reassessment is necessary because older adults are vulnerable to the harms of unnecessary restrictions."
  },
  {
    "id": 299,
    "domain": "prevention",
    "chapter": 32,
    "question": "Which transition detail should be included in a discharge handoff for infection prevention?",
    "options": {
      "A": "What items were offered on the hospital cafeteria menu that week",
      "B": "Whether any infection precautions must continue after transfer to another setting",
      "C": "How many staff members cleaned the room during the previous day",
      "D": "Which television programs the patient most enjoyed watching during admission stays"
    },
    "answer": "B",
    "explanation": "The receiving site needs to know whether precautions, follow up, or communication tasks remain active. Entertainment preferences and cafeteria details are not relevant to infection prevention. The exact number of staff cleaning the room is usually not the key transfer issue unless tied to a specific process problem."
  },
  {
    "id": 300,
    "domain": "prevention",
    "chapter": 32,
    "question": "A long term care resident becomes more confused after prolonged room restriction for screening. What is the most appropriate quality response?",
    "options": {
      "A": "Start antibiotics immediately in hopes of reducing the patient's confusion",
      "B": "Extend room restriction because confusion is an expected temporary consequence",
      "C": "Stop all screening activities throughout the facility to prevent similar problems",
      "D": "Review carefully whether the precaution remains necessary for this resident"
    },
    "answer": "D",
    "explanation": "Prolonged restriction can worsen delirium, mobility, and function, so the team should reassess the need for the precaution. Extending restriction without reassessment ignores harm. Stopping all screening is not a solution. Antibiotics are not indicated for confusion alone and can cause adverse effects."
  }
];
