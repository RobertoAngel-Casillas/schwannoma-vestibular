// =====================================================================
// DATOS DE LAS TABLAS
// Edita aquí y recarga la página: las tablas se generan solas.
// =====================================================================

// Revisiones incluidas (Tabla 1 del póster). El orden define R1, R2, ...
const REVISIONES = [
  {
    "id": "R1",
    "revision": "Garcia-Torrico 2025",
    "tema": "RS vs TL vs FM",
    "estudios": "32 / 6,889",
    "hallazgo": "Sin diferencia en audición (RS vs FM) ni en función facial tardía (RS vs TL)",
    "referencia": "Garcia-Torrico F, Mendieta CD, De Nigris Vasconcellos F, Salolin Vargas VP, Scalise M, Mamani-Julian K, et al. Evaluating the effectiveness and complications of the Retrosigmoid, Translabyrinthine and Middle Fossa approaches in vestibular Schwannoma surgical management: a comprehensive systematic review and meta-analysis of 6,889 patients. Neurosurg Rev. 2025;48(1):229.",
    "doi": "10.1007/s10143-025-03237-2",
    "pmid": "39930308"
  },
  {
    "id": "R2",
    "revision": "Gibbon 2025",
    "tema": "TL vs RS",
    "estudios": "21 / 4,572",
    "hallazgo": "Fístula y meningitis similares; TL con menor estancia y mejor función facial",
    "referencia": "Gibbon FL, Lindner RJ, Vial ADM, da Silva GG, Palavani LB, Semione G, et al. Translabyrinthine versus Retrosigmoid Approach for Vestibular Schwannoma: A Systematic Review and An Updated Meta-Analysis. Otolaryngol Head Neck Surg. 2025;172(3):774-86.",
    "doi": "10.1002/ohn.1031",
    "pmid": "39435621"
  },
  {
    "id": "R3",
    "revision": "Jun 2020",
    "tema": "TL vs RS",
    "estudios": "9 / 2,429",
    "hallazgo": "TL con más resección total y menos déficit de pares; fístula similar",
    "referencia": "Jun W, Gao YL, Yu HG, Huang QL, Long XQ, Liu GH, et al. Comparison of translabyrinthine and retrosigmoid approach for treating vestibular schwannoma: A meta-analysis. Clin Neurol Neurosurg. 2020;196:105994.",
    "doi": "10.1016/j.clineuro.2020.105994",
    "pmid": "32540713"
  },
  {
    "id": "R4",
    "revision": "Palavani 2024",
    "tema": "RS vs FM según tamaño",
    "estudios": "n.r. / 7,228",
    "hallazgo": "FM mejor en intracanaliculares; RS mejor fuera del conducto (< 3 cm)",
    "referencia": "Palavani LB, Batista S, Andreão FF, Brenner LBO, Silva GM, Koester S, et al. Retrosigmoid versus middle fossa approach for hearing and facial nerve preservation in vestibular schwannoma surgery: A systematic review and comparative meta-analysis. J Clin Neurosci. 2024;124:1-14.",
    "doi": "10.1016/j.jocn.2024.04.007",
    "pmid": "38615371"
  },
  {
    "id": "R5",
    "revision": "Preet 2020",
    "tema": "Audición con RS",
    "estudios": "26 / 2,034",
    "hallazgo": "Audición útil en 35%: 57% intracanaliculares, 12% en > 2 cm",
    "referencia": "Preet K, Ong V, Sheppard JP, Udawatta M, Duong C, Romiyo P, et al. Postoperative Hearing Preservation in Patients Undergoing Retrosigmoid Craniotomy for Resection of Vestibular Schwannomas: A Systematic Review of 2034 Patients. Neurosurgery. 2020;86(3):332-42.",
    "doi": "10.1093/neuros/nyz147",
    "pmid": "31149722"
  },
  {
    "id": "R6",
    "revision": "Hunt 2020",
    "tema": "Audición con RS y FM",
    "estudios": "14 / 2,977",
    "hallazgo": "57% conserva audición útil a 52.5 meses; la FM la favorece",
    "referencia": "Hunt AA, Cass ND, Coughlin A, Gubbels SP. Time-based Assessment of Hearing Preservation Rates After Microsurgical Resection of Vestibular Schwannomas: A Systematic Review. Otol Neurotol. 2020;41(5):679-85.",
    "doi": "10.1097/MAO.0000000000002598",
    "pmid": "32150025"
  },
  {
    "id": "R7",
    "revision": "Ahsan 2017",
    "tema": "Audición a largo plazo",
    "estudios": "10 / n.r.",
    "hallazgo": "Si se conserva al inicio, la audición se mantiene 5 años o más",
    "referencia": "Ahsan SF, Huq F, Seidman M, Taylor A. Long-term Hearing Preservation After Resection of Vestibular Schwannoma: A Systematic Review and Meta-analysis. Otol Neurotol. 2017;38(10):1505-11.",
    "doi": "10.1097/MAO.0000000000001560",
    "pmid": "29140965"
  },
  {
    "id": "R8",
    "revision": "Pontillo 2024",
    "tema": "Cirugía vs radiocirugía",
    "estudios": "10 / 869",
    "hallazgo": "Audición con cirugía 23.4% (FM 51.4%, RS 20.7%)",
    "referencia": "Pontillo V, Foscolo V, Salonna F, Barbara F, Bozzi MT, Messina R, et al. Hearing preservation surgery for vestibular schwannoma: a systematic review and meta-analysis. Acta Otorhinolaryngol Ital. 2024;44(Suppl. 1):S86-93.",
    "doi": "10.14639/0392-100X-suppl.1-44-2024-N2900",
    "pmid": "38745520"
  },
  {
    "id": "R9",
    "revision": "Zhang 2025",
    "tema": "Parálisis facial tardía",
    "estudios": "27 / 8,656",
    "hallazgo": "Incidencia 12.3%; se asocia a edad y tamaño del tumor",
    "referencia": "Zhang X, Wen H, Chen G. Incidence and Risk Factors of Delayed Facial Paralysis After Vestibular Schwannoma Resection: A Systematic Review and Meta-Analysis. World Neurosurg. 2025;197:123938.",
    "doi": "10.1016/j.wneu.2025.123938",
    "pmid": "40127861"
  },
  {
    "id": "R10",
    "revision": "Huppert Steed 2026",
    "tema": "Parálisis facial tardía",
    "estudios": "10 / 2,122",
    "hallazgo": "Incidencia 13%; 85% recupera HB I–II en 12 meses",
    "referencia": "Huppert Steed A, Riordan K, Papuc M, Jukic A, Johnson KA, Pico A, et al. Incidence and Prognosis of Delayed Facial Nerve Palsy After Vestibular Schwannoma Resection: Systematic Review and Meta-analysis. J Neurol Surg B Skull Base. 2026;87(2):123-30.",
    "doi": "10.1055/a-2587-6401",
    "pmid": "41808969"
  },
  {
    "id": "R11",
    "revision": "Starup-Hansen 2024a",
    "tema": "Reparación de base de cráneo (RS)",
    "estudios": "42 / n.r.",
    "hallazgo": "Fístula de LCR: mediana 6.3%",
    "referencia": "Starup-Hansen J, Williams SC, Valetopoulou A, Khan DZ, Horsfall HL, Moudgil-Joshi J, et al. Skull Base Repair following Resection of Vestibular Schwannoma: A Systematic Review (Part 1: The Retrosigmoid Approach). J Neurol Surg B Skull Base. 2024;85(Suppl 2):e117-30.",
    "doi": "10.1055/a-2222-0184",
    "pmid": "39444767"
  },
  {
    "id": "R12",
    "revision": "Starup-Hansen 2024b",
    "tema": "Reparación de base de cráneo (TL)",
    "estudios": "43 / n.r.",
    "hallazgo": "Fístula de LCR: mediana 6%",
    "referencia": "Starup-Hansen J, Williams SC, Valetopoulou A, Khan DZ, Horsfall HL, Moudgil-Joshi J, et al. Skull Base Repair following Resection of Vestibular Schwannoma: A Systematic Review (Part 2: The Translabyrinthine Approach). J Neurol Surg B Skull Base. 2024;85(Suppl 2):e131-44.",
    "doi": "10.1055/a-2222-0016",
    "pmid": "39444760"
  },
  {
    "id": "R13",
    "revision": "Kocharyan 2024",
    "tema": "Total vs casi total vs subtotal",
    "estudios": "48 / n.r.",
    "hallazgo": "Recurrencia RR 2.94 (casi total) y 11.5 (subtotal); sin más daño facial",
    "referencia": "Kocharyan A, Daher GS, Curry SD, Klimara MJ, Farrokhian N, Coleman S, et al. Outcomes of Near-Total and Subtotal Resection of Sporadic Vestibular Schwannoma: A Systematic Review and Meta-Analysis. Otolaryngol Head Neck Surg. 2024;171(3):642-57.",
    "doi": "10.1002/ohn.823",
    "pmid": "38822753"
  },
  {
    "id": "R14",
    "revision": "Egiz 2022",
    "tema": "Remanente tumoral",
    "estudios": "14 / 849",
    "hallazgo": "Crece en 26.6% (1.57 mm/año); solo lo predice su tamaño",
    "referencia": "Egiz A, Nautiyal H, Alalade AF, Gurusinghe N, Roberts G. Evaluating growth trends of residual sporadic vestibular schwannomas: a systematic review and meta-analysis. J Neurooncol. 2022;159(1):135-50.",
    "doi": "10.1007/s11060-022-04051-2",
    "pmid": "35761159"
  },
  {
    "id": "R15",
    "revision": "Starnoni 2020 (EANS)",
    "tema": "SV grandes: resección total",
    "estudios": "n.r.",
    "hallazgo": "Resección total 77%; HB I–II 60.1%; control 99.8%",
    "referencia": "Starnoni D, Giammattei L, Cossu G, Link MJ, Roche PH, Chacko AG, et al. Surgical management for large vestibular schwannomas: a systematic review, meta-analysis, and consensus statement on behalf of the EANS skull base section. Acta Neurochir (Wien). 2020;162(11):2595-617.",
    "doi": "10.1007/s00701-020-04491-7",
    "pmid": "32728903"
  },
  {
    "id": "R16",
    "revision": "Starnoni 2018",
    "tema": "Subtotal + radiocirugía",
    "estudios": "9 / 248",
    "hallazgo": "Control 93.9%; HB I–II 96.1%; audición 59.9%",
    "referencia": "Starnoni D, Daniel RT, Tuleasca C, George M, Levivier M, Messerer M. Systematic review and meta-analysis of the technique of subtotal resection and stereotactic radiosurgery for large vestibular schwannomas: a \"nerve-centered\" approach. Neurosurg Focus. 2018;44(3):E4.",
    "doi": "10.3171/2017.12.FOCUS17669",
    "pmid": "29490553"
  },
  {
    "id": "R17",
    "revision": "Tuleasca 2025",
    "tema": "Subtotal + radiocirugía",
    "estudios": "12 / 677",
    "hallazgo": "Control 89.9%; HB I–II 94.4%; audición 57.4%",
    "referencia": "Tuleasca C, Kotecha R, Sahgal A, de Salles A, Fariselli L, Paddick I, et al. Large vestibular schwannoma treated using a cranial nerve sparing approach with planned subtotal microsurgical resection and stereotactic radiosurgery: meta-analysis and International Stereotactic Radiosurgery Society (ISRS) practice guidelines. J Neurooncol. 2025;173(2):245-62.",
    "doi": "10.1007/s11060-025-04990-6",
    "pmid": "40172792"
  },
  {
    "id": "R18",
    "revision": "Naghizadeh 2025",
    "tema": "Subtotal o casi total + radiocirugía",
    "estudios": "14 / 934",
    "hallazgo": "Control 80%; HB I–II 85%; audición 43%",
    "referencia": "Naghizadeh S, Zohrabi-Fard M, Keramati AA, Jafari F, Oraii Yazdani K, Zali A, et al. Combined subtotal resection and stereotactic radiosurgery for large vestibular schwannomas: A systematic review and meta-analysis. Neurooncol Adv. 2025;7(1):vdaf199.",
    "doi": "10.1093/noajnl/vdaf199",
    "pmid": "41473748"
  }
];

// Referencias (Vancouver). 1–5 son las del póster; 6 en adelante se citan solo en esta página.
const REFERENCIAS = [
  {
    "referencia": "Goldbrunner R, Weller M, Regis J, Lund-Johansen M, Stavrinou P, Reuss D, et al. EANO guideline on the diagnosis and treatment of vestibular schwannoma. Neuro Oncol. 2020;22(1):31-45.",
    "doi": "10.1093/neuonc/noz153",
    "pmid": "31504802"
  },
  {
    "referencia": "Marinelli JP, Beeler CJ, Carlson ML, Caye-Thomasen P, Spear SA, Erbele ID. Global Incidence of Sporadic Vestibular Schwannoma: A Systematic Review. Otolaryngol Head Neck Surg. 2022;167(2):209-14.",
    "doi": "10.1177/01945998211042006",
    "pmid": "34464224"
  },
  {
    "referencia": "Dilwali S, Landegger LD, Soares VY, Deschler DG, Stankovic KM. Secreted Factors from Human Vestibular Schwannomas Can Cause Cochlear Damage. Sci Rep. 2015;5:18599.",
    "doi": "10.1038/srep18599",
    "pmid": "26690506"
  },
  {
    "referencia": "Page MJ, McKenzie JE, Bossuyt PM, Boutron I, Hoffmann TC, Mulrow CD, et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ. 2021;372:n71.",
    "doi": "10.1136/bmj.n71",
    "pmid": "33782057"
  },
  {
    "referencia": "Shea BJ, Reeves BC, Wells G, Thuku M, Hamel C, Moran J, et al. AMSTAR 2: a critical appraisal tool for systematic reviews that include randomised or non-randomised studies of healthcare interventions, or both. BMJ. 2017;358:j4008.",
    "doi": "10.1136/bmj.j4008",
    "pmid": "28935701"
  },
  {
    "referencia": "Koos WT, Day JD, Matula C, Levy DI. Neurotopographic considerations in the microsurgical treatment of small acoustic neurinomas. J Neurosurg. 1998;88(3):506-12.",
    "doi": "10.3171/jns.1998.88.3.0506",
    "pmid": "9488305"
  },
  {
    "referencia": "House JW, Brackmann DE. Facial nerve grading system. Otolaryngol Head Neck Surg. 1985;93(2):146-7.",
    "doi": "10.1177/019459988509300202",
    "pmid": "3921901"
  },
  {
    "referencia": "Committee on Hearing and Equilibrium guidelines for the evaluation of hearing preservation in acoustic neuroma (vestibular schwannoma). American Academy of Otolaryngology-Head and Neck Surgery Foundation, INC. Otolaryngol Head Neck Surg. 1995;113(3):179-80.",
    "doi": "10.1016/S0194-5998(95)70101-X",
    "pmid": "7675475"
  },
  {
    "referencia": "Ouzzani M, Hammady H, Fedorowicz Z, Elmagarmid A. Rayyan-a web and mobile app for systematic reviews. Syst Rev. 2016;5(1):210.",
    "doi": "10.1186/s13643-016-0384-4",
    "pmid": "27919275"
  },
  {
    "referencia": "Aromataris E, Fernandez R, Godfrey C, Holly C, Khalil H, Tungpunkom P. Umbrella reviews. En: Aromataris E, Lockwood C, Porritt K, Pilla B, Jordan Z, editores. JBI Manual for Evidence Synthesis [Internet]. Adelaida: JBI; 2024 [citado 18 nov 2026].",
    "doi": "",
    "pmid": "",
    "url": "https://synthesismanual.jbi.global"
  },
  {
    "referencia": "Higgins JPT, Thomas J, Chandler J, Cumpston M, Li T, Page MJ, et al., editores. Cochrane Handbook for Systematic Reviews of Interventions [Internet]. Versión 6.5. Londres: Cochrane; 2024 [citado 18 nov 2026].",
    "doi": "",
    "pmid": "",
    "url": "https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current"
  }
];

// Registro de cribado: un objeto por registro de la búsqueda en PubMed.
// decision: "Incluida" | "Excluida (texto completo)" | "Excluida (título/resumen)" | "Eliminada"
const REGISTRO = [
  {
    "pmid": "41808969",
    "anio": "2026",
    "titulo": "Incidence and Prognosis of Delayed Facial Nerve Palsy After Vestibular Schwannoma Resection: Systematic Review and Meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "41473748",
    "anio": "2025",
    "titulo": "Combined subtotal resection and stereotactic radiosurgery for large vestibular schwannomas: A systematic review and meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "40172792",
    "anio": "2025",
    "titulo": "Large vestibular schwannoma treated using a cranial nerve sparing approach with planned subtotal microsurgical resection and stereotactic radiosurgery: meta-analysis and International Stereotactic Radiosurgery Society (ISRS) practice guidelines.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "40127861",
    "anio": "2025",
    "titulo": "Incidence and Risk Factors of Delayed Facial Paralysis After Vestibular Schwannoma Resection: A Systematic Review and Meta-Analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "39435621",
    "anio": "2025",
    "titulo": "Translabyrinthine versus Retrosigmoid Approach for Vestibular Schwannoma: A Systematic Review and An Updated Meta-Analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "39930308",
    "anio": "2025",
    "titulo": "Evaluating the effectiveness and complications of the Retrosigmoid, Translabyrinthine and Middle Fossa approaches in vestibular Schwannoma surgical management: a comprehensive systematic review and meta-analysis of 6,889 patients.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "39444767",
    "anio": "2024",
    "titulo": "Skull Base Repair following Resection of Vestibular Schwannoma: A Systematic Review (Part 1: The Retrosigmoid Approach).",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "39444760",
    "anio": "2024",
    "titulo": "Skull Base Repair following Resection of Vestibular Schwannoma: A Systematic Review (Part 2: The Translabyrinthine Approach).",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "38822753",
    "anio": "2024",
    "titulo": "Outcomes of Near-Total and Subtotal Resection of Sporadic Vestibular Schwannoma: A Systematic Review and Meta-Analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "38615371",
    "anio": "2024",
    "titulo": "Retrosigmoid versus middle fossa approach for hearing and facial nerve preservation in vestibular schwannoma surgery: A systematic review and comparative meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "38745520",
    "anio": "2024",
    "titulo": "Hearing preservation surgery for vestibular schwannoma: a systematic review and meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "35761159",
    "anio": "2022",
    "titulo": "Evaluating growth trends of residual sporadic vestibular schwannomas: a systematic review and meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "32728903",
    "anio": "2020",
    "titulo": "Surgical management for large vestibular schwannomas: a systematic review, meta-analysis, and consensus statement on behalf of the EANS skull base section.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "32540713",
    "anio": "2020",
    "titulo": "Comparison of translabyrinthine and retrosigmoid approach for treating vestibular schwannoma: A meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "32150025",
    "anio": "2020",
    "titulo": "Time-based Assessment of Hearing Preservation Rates After Microsurgical Resection of Vestibular Schwannomas: A Systematic Review.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "31149722",
    "anio": "2020",
    "titulo": "Postoperative Hearing Preservation in Patients Undergoing Retrosigmoid Craniotomy for Resection of Vestibular Schwannomas: A Systematic Review of 2034 Patients.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "29490553",
    "anio": "2018",
    "titulo": "Systematic review and meta-analysis of the technique of subtotal resection and stereotactic radiosurgery for large vestibular schwannomas: a \"nerve-centered\" approach.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "29140965",
    "anio": "2017",
    "titulo": "Long-term Hearing Preservation After Resection of Vestibular Schwannoma: A Systematic Review and Meta-analysis.",
    "decision": "Incluida",
    "motivo": "—"
  },
  {
    "pmid": "33009643",
    "anio": "2021",
    "titulo": "Comparison of surgical outcomes in cystic and solid vestibular schwannomas: a systematic review and meta-analysis.",
    "decision": "Excluida (texto completo)",
    "motivo": "Compara tumores quísticos vs sólidos; no compara abordajes ni extensión de resección"
  },
  {
    "pmid": "41162807",
    "anio": "2025",
    "titulo": "The relationship between extent of resection, tumor recurrence, and facial nerve outcomes in vestibular schwannoma surgery: a single-institution experience and systematic review.",
    "decision": "Excluida (texto completo)",
    "motivo": "Diseño mixto: cohorte institucional con revisión complementaria"
  },
  {
    "pmid": "36294756",
    "anio": "2022",
    "titulo": "Factors Influencing Personalized Management of Vestibular Schwannoma: A Systematic Review.",
    "decision": "Excluida (texto completo)",
    "motivo": "Síntesis cualitativa sobre elección entre modalidades; no reporta desenlaces por abordaje"
  },
  {
    "pmid": "41441907",
    "anio": "2025",
    "titulo": "Systematic review of disease-specific quality of life in patients with sporadic vestibular schwannoma.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "39969785",
    "anio": "2025",
    "titulo": "Tinnitus after treatment of vestibular schwannoma: a systematic review and comparative analysis of microsurgery and stereotactic radiosurgery.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "39759154",
    "anio": "2024",
    "titulo": "Determinants of quality of life following resection of skull base tumors: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "39483167",
    "anio": "2024",
    "titulo": "Cost of Vestibular Schwannoma Treatment: A Systematic Review and Meta-Analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "39230764",
    "anio": "2024",
    "titulo": "Postoperative dysgeusia following microsurgical resection for acoustic neuroma: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "38838938",
    "anio": "2024",
    "titulo": "Dural Venous Sinus Thrombosis After Vestibular Schwannoma Surgery: Should We Anticoagulate?",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "38443628",
    "anio": "2024",
    "titulo": "Prevalence and patterns of cerebral venous sinus thrombosis following vestibular schwannoma surgery: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "38892775",
    "anio": "2024",
    "titulo": "Vestibular Schwannoma and Tinnitus: A Systematic Review of Microsurgery Compared to Gamma Knife Radiosurgery.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "38658423",
    "anio": "2024",
    "titulo": "Temporal lobe injury with middle fossa approach to intracanalicular vestibular schwannomas: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "36895813",
    "anio": "2023",
    "titulo": "Predictive Value of K-67 Index in Evaluating Sporadic Vestibular Schwannoma Recurrence: Systematic Review and Meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "33523284",
    "anio": "2021",
    "titulo": "Postoperative headache after surgical treatment of cerebellopontine angle tumors: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "32266553",
    "anio": "2021",
    "titulo": "Characteristics and management of hydrocephalus associated with vestibular schwannomas: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "29315189",
    "anio": "2018",
    "titulo": "Self-Evaluated Quality of Life and Functional Outcomes After Microsurgery, Stereotactic Radiation or Observation-Only for Vestibular Schwannoma of the Adult Patient: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Desenlace fuera de alcance"
  },
  {
    "pmid": "40470965",
    "anio": "2026",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guideline on Surgical Resection for the Treatment of Patients With Vestibular Schwannomas: Update.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "40470951",
    "anio": "2026",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines Update for the Role of Intraoperative Cranial Nerve Monitoring in the Management of Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "40470934",
    "anio": "2026",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guideline on Hearing Preservation Outcomes in Patients With Sporadic Vestibular Schwannoma: Update.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "40470931",
    "anio": "2026",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines Update for the Role of Imaging in the Management of Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "38134966",
    "anio": "2024",
    "titulo": "Management of sporadic intracanalicular vestibular schwannomas: A critical review and International Stereotactic Radiosurgery Society (ISRS) practice guidelines.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "38346489",
    "anio": "2024",
    "titulo": "Clinical practice guideline on the management of vestibular schwannoma.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "29309686",
    "anio": "2018",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines on the Role of Imaging in the Diagnosis and Management of Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "29309683",
    "anio": "2018",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines on Hearing Preservation Outcomes in Patients With Sporadic Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "29309638",
    "anio": "2018",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines on Emerging Therapies for the Treatment of Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "29309632",
    "anio": "2018",
    "titulo": "Congress of Neurological Surgeons Systematic Review and Evidence-Based Guidelines on Surgical Resection for the Treatment of Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Guía o consenso"
  },
  {
    "pmid": "40517893",
    "anio": "2025",
    "titulo": "Letter to the Editor Regarding: Incidence and Risk Factors of Delayed Facial Paralysis After Vestibular Schwannoma Resection: A Systematic Review and Meta-Analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "40436339",
    "anio": "2025",
    "titulo": "Letter to the Editor Regarding \"Incidence and Risk Factors of Delayed Facial Paralysis After Vestibular Schwannoma Resection: A Systematic Review and Meta-Analysis\".",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "39377955",
    "anio": "2024",
    "titulo": "Comment on \"Postoperative dysgeusia following microsurgical resection for acoustic neuroma: a systematic review and meta-analysis\".",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "38789032",
    "anio": "2024",
    "titulo": "Radiation-Associated Vestibular Schwannomas: Case Series and Literature Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "32889192",
    "anio": "2020",
    "titulo": "High-Grade Sarcoma Arising within a Previously Irradiated Vestibular Schwannoma: A Case Report and Literature Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "32848608",
    "anio": "2020",
    "titulo": "MMP-14 (MT1-MMP) Is a Biomarker of Surgical Outcome and a Potential Mediator of Hearing Loss in Patients With Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "31538197",
    "anio": "2019",
    "titulo": "In Reply: Postoperative Hearing Preservation in Patients Undergoing Retrosigmoid Craniotomy for Resection of Vestibular Schwannomas: A Systematic Review of 2034 Patients.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "31511889",
    "anio": "2019",
    "titulo": "Letter: Postoperative Hearing Preservation in Patients Undergoing Retrosigmoid Craniotomy for Resection of Vestibular Schwannomas: A Systematic Review of 2034 Patients.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "28167016",
    "anio": "2017",
    "titulo": "Lateral skull base surgery in a pediatric population: A 25-year experience in a referral skull base center.",
    "decision": "Excluida (título/resumen)",
    "motivo": "No es revisión sistemática"
  },
  {
    "pmid": "41492624",
    "anio": "2025",
    "titulo": "Microsurgery Versus Radiosurgery for Vestibular Schwannoma: Which Approach Yields Better Long-Term Results?",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "40319265",
    "anio": "2025",
    "titulo": "Stereotactic radiosurgery for tumor-related trigeminal neuralgia: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "39627752",
    "anio": "2024",
    "titulo": "Treatment options for unilateral vestibular schwannoma: a network meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "39504737",
    "anio": "2024",
    "titulo": "Repeat stereotactic radiosurgery in vestibular schwannoma patients: A systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "39045727",
    "anio": "2024",
    "titulo": "Long-Term Hearing Outcome For Vestibular Schwannomas After Microsurgery And Radiotherapy: A Systematic Review and Meta-Analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "39249115",
    "anio": "2024",
    "titulo": "Hearing preservation and quality of life in small to medium sized vestibular schwannomas after a wait and scan approach or stereotactic radiosurgery: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "38393397",
    "anio": "2024",
    "titulo": "Stereotactic radiosurgery for Koos grade IV vestibular schwannoma: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "37843727",
    "anio": "2023",
    "titulo": "Single-fraction radiosurgery outcomes for large vestibular schwannomas in the upfront or post-surgical setting: a systematic review and International Stereotactic Radiosurgery Society (ISRS) Practice Guidelines.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "36647227",
    "anio": "2023",
    "titulo": "Hearing Preservation, Facial Nerve Dysfunction, and Tumor Control in Small Vestibular Schwannoma: A Systematic Review of Gamma Knife Radiosurgery Versus Microsurgery.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "35907189",
    "anio": "2023",
    "titulo": "Salvage radiosurgery following subtotal resection of vestibular schwannomas: does timing influence tumor control?",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "36503553",
    "anio": "2022",
    "titulo": "Single-fraction stereotactic radiosurgery versus microsurgical resection for the treatment of vestibular schwannoma: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "35962847",
    "anio": "2022",
    "titulo": "Audiovestibular symptoms and facial nerve function comparing microsurgery versus SRS for vestibular schwannomas: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "35261385",
    "anio": "2022",
    "titulo": "Hearing Preservation in Observed Sporadic Vestibular Schwannoma: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "34838768",
    "anio": "2022",
    "titulo": "Primary Treatment of Small to Medium (<3 cm) Sporadic Vestibular Schwannomas: A Systematic Review and Meta-Analysis on Hearing Preservation and Tumor Control Rates for Microsurgery versus Radiosurgery.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "34277019",
    "anio": "2021",
    "titulo": "Outcomes of stereotactic radiosurgery for large vestibular schwannomas: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "34277018",
    "anio": "2021",
    "titulo": "Efficacy and comorbidities of hypofractionated and single-dose radiosurgery for vestibular schwannomas: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "30693520",
    "anio": "2020",
    "titulo": "Comparison of balance outcomes according to treatment modality of vestibular schwannoma.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "31641546",
    "anio": "2019",
    "titulo": "Observation or stereotactic radiosurgery for newly diagnosed vestibular schwannomas: A systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "29414150",
    "anio": "2018",
    "titulo": "Hypo-fractionated stereotactic radiotherapy of five fractions with linear accelerator for vestibular schwannomas: A systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "28409393",
    "anio": "2017",
    "titulo": "Stereotactic radiosurgery vs. fractionated radiotherapy for tumor control in vestibular schwannoma patients: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "27198728",
    "anio": "2016",
    "titulo": "Optimal outcomes for hearing preservation in the management of small vestibular schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "25790873",
    "anio": "2015",
    "titulo": "How to Address Small- and Medium-Sized Acoustic Neuromas with Hearing: A Systematic Review and Decision Analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra modalidad (radiocirugía u observación)"
  },
  {
    "pmid": "41251909",
    "anio": "2025",
    "titulo": "Fully endoscopic approach to cerebellopontine angle tumors: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "40307606",
    "anio": "2025",
    "titulo": "A systematic review on the role of the endoscope in the surgical management of cerebellopontine angle tumors: is it time to draw the conclusion?",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "37078512",
    "anio": "2023",
    "titulo": "Transcanal Transpromontorial Approaches to the Internal Auditory Canal: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "36816965",
    "anio": "2023",
    "titulo": "How to position the patient? A meta-analysis of positioning in vestibular schwannoma surgerythe retrosigmoid approach.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "34510120",
    "anio": "2022",
    "titulo": "The Role of Endoscopy in the Resection of Sporadic Vestibular Schwannomas: A Systematic Review of Surgical Outcomes.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "28761510",
    "anio": "2017",
    "titulo": "A systematic review about the position-related complications of acoustic neuroma surgery via suboccipital retrosigmoid approach: Sitting versus lateral.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "25844300",
    "anio": "2015",
    "titulo": "Facial Nerve Outcome after Vestibular Schwannoma Resection: A Comparative Meta-Analysis of Endoscopic versus Open Retrosigmoid Approach.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Otra técnica o abordaje"
  },
  {
    "pmid": "41237393",
    "anio": "2026",
    "titulo": "Malignant peripheral nerve sheath tumors in schwannomatosis: systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "41486836",
    "anio": "2025",
    "titulo": "Comparing Cochlear Implantation With Versus Without Resection in Intralabyrinthine Schwannoma: A Systematic Review and Meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "40779001",
    "anio": "2025",
    "titulo": "Microsurgical Resection vs Stereotactic Radiosurgery for Secondary Trigeminal Neuralgia Caused by Cerebellopontine Angle Tumors: A Systematic Review and Meta-Analysis with Meta-Regression.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "40409174",
    "anio": "2025",
    "titulo": "\"Salvage surgery for vestibular schwannomas after failed stereotactic radiosurgery or radiation: A systematic review and meta-analysis\".",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "40234793",
    "anio": "2025",
    "titulo": "Stereotactic radiosurgery for vestibular schwannomas in neurofibromatosis type 2: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "39435265",
    "anio": "2025",
    "titulo": "Gamma-knife radiosurgery for jugular foramen schwannomas. A systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "38060739",
    "anio": "2023",
    "titulo": "Iatrogenic Facial Nerve Injury in Head and Neck Surgery in the Presence of Intraoperative Facial Nerve Monitoring With Electromyography: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "37001475",
    "anio": "2023",
    "titulo": "Open surgery vs. stereotactic radiosurgery for tumour-related trigeminal neuralgia: A systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "36396843",
    "anio": "2023",
    "titulo": "Hybrid tumors with perineurioma components: a systematic review of the literature and illustrative case.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "37604124",
    "anio": "2023",
    "titulo": "Impact of Obesity on Postoperative Complications after Lateral Skull Base Surgery: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "35079891",
    "anio": "2022",
    "titulo": "Management of non-vestibular schwannomas in adult patients: a systematic review and consensus statement on behalf of the EANS skull base section Part II: Trigeminal and facial nerve schwannomas (CN V, VII).",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "34331121",
    "anio": "2021",
    "titulo": "Resection of vestibular schwannomas after stereotactic radiosurgery: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "33567134",
    "anio": "2021",
    "titulo": "Cerebellopontine Angle and Internal Auditory Canal Lipomas: Case Series and Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "34306914",
    "anio": "2021",
    "titulo": "The Clinical Implications of Spontaneous Hemorrhage in Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "32470932",
    "anio": "2020",
    "titulo": "Pediatric vestibular schwannomas: case series and a systematic review with meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "32584395",
    "anio": "2020",
    "titulo": "Hearing Preservation in Patients Who Undergo Labyrinthectomy and Translabyrinthine Procedures: A Case Report and Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "32146233",
    "anio": "2020",
    "titulo": "Exclusive surgical treatment for vestibular schwannoma regrowth or recurrence: A meta-analysis of the literature.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "31129783",
    "anio": "2019",
    "titulo": "Radiosurgery treatment is associated with improved facial nerve preservation versus repeat resection in recurrent vestibular schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "30472335",
    "anio": "2019",
    "titulo": "Hypoglossal schwannomas: A systematic review of the literature.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "28900754",
    "anio": "2019",
    "titulo": "Surgery versus stereotactic radiosurgery for the treatment of multiple meningiomas in neurofibromatosis type 2: illustrative case and systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "29961377",
    "anio": "2018",
    "titulo": "Safety profile of superior petrosal vein (the vein of Dandy) sacrifice in neurosurgical procedures: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "28882713",
    "anio": "2018",
    "titulo": "A Systematic Review of Radiosurgery Versus Surgery for Neurofibromatosis Type 2 Vestibular Schwannomas.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "28595258",
    "anio": "2017",
    "titulo": "Microsurgery for Recurrent Vestibular Schwannoma After Previous Gross Total Resection.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "27320780",
    "anio": "2017",
    "titulo": "Teflon granulomas mimicking cerebellopontine angle tumors following microvascular decompression.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "27836701",
    "anio": "2017",
    "titulo": "Synchronous Tumors of the Cerebellopontine Angle.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "26745487",
    "anio": "2016",
    "titulo": "Malignant peripheral nerve sheath tumors of the eighth cranial nerve arising without prior irradiation.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "25673023",
    "anio": "2016",
    "titulo": "Meta-analysis on the clinical outcomes in patients with intralabyrinthine schwannomas: conservative management vs. microsurgery.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "26227469",
    "anio": "2015",
    "titulo": "Systematic Review of Nontumor Pediatric Auditory Brainstem Implant Outcomes.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Población distinta"
  },
  {
    "pmid": "41782594",
    "anio": "2026",
    "titulo": "Utility of Artificial Intelligence in Stereotactic Radiosurgery for Vestibular Schwannomas: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "41062842",
    "anio": "2025",
    "titulo": "The role of artificial intelligence in predicting the clinical outcomes associated with different therapeutic approaches for vestibular schwannoma: A systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "40753669",
    "anio": "2025",
    "titulo": "Current state of intraoperative neuromonitoring of the facial nerve during skull base surgery: A systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "39853510",
    "anio": "2025",
    "titulo": "Prediction of facial nerve outcomes after surgery for vestibular schwannoma using machine learning-based models: a systematic review and meta-analysis.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "38707182",
    "anio": "2024",
    "titulo": "Effectiveness of Hypoglossal-Facial Anastomosis in the Rehabilitation of Facial Paralysis Following Vestibular Schwannoma Surgery: A Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "37750993",
    "anio": "2024",
    "titulo": "The effect of intratympanic gentamicin as a prehabilitation strategy for objective and subjective vestibular function in patients undergoing microsurgery for a unilateral vestibular schwannoma.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "37185086",
    "anio": "2023",
    "titulo": "Pre-habilitation with intratympanic gentamicin in vestibular schwannomas: a systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "34239858",
    "anio": "2021",
    "titulo": "Clinical Studies and Pre-clinical Animal Models on Facial Nerve Preservation, Reconstruction, and Regeneration Following Cerebellopontine Angle Tumor Surgery-A Systematic Review and Future Perspectives.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "31912333",
    "anio": "2021",
    "titulo": "Comparison between VII-to-VII and XII-to-VII coaptation techniques for early facial nerve reanimation after surgical intra-cranial injuries: a systematic review and pooled analysis of the functional outcomes.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "32925835",
    "anio": "2020",
    "titulo": "Cochlear Implant Outcomes Following Vestibular Schwannoma Resection: Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "31802225",
    "anio": "2020",
    "titulo": "Sporadic and NF2-associated vestibular schwannoma surgery and simultaneous cochlear implantation: a comparative systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "31496442",
    "anio": "2020",
    "titulo": "Hearing rehabilitation outcomes in cochlear implant recipients with vestibular schwannoma in observation or radiotherapy groups: A systematic review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "30931227",
    "anio": "2019",
    "titulo": "Translabyrinthine Excision of Vestibular Schwannoma with Concurrent Cochlear Implantation: Systematic Review.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "29490547",
    "anio": "2018",
    "titulo": "Preoperative diffusion tensor imaging-fiber tracking for facial nerve identification in vestibular schwannoma: a systematic review on its evolution and current status with a pooled data analysis of surgical concordance rates.",
    "decision": "Excluida (título/resumen)",
    "motivo": "Rehabilitación, IA, imagen o monitoreo"
  },
  {
    "pmid": "35133764",
    "anio": "",
    "titulo": "Registro no disponible",
    "decision": "Eliminada",
    "motivo": "Registro sin datos recuperables en PubMed"
  }
];
