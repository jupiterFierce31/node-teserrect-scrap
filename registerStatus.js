var request = require("request");
var j = request.jar();
var options = {
    method: 'POST',
    url: 'https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges',
    qs: { timestamp: '1530788699974' },
    headers:
    {

        pragma: 'no-cache',
        'Cache-Control': 'no-cache',
        'x-nyupe9cs-a': '4ftPSbRSUspVX76xzjz2XX24Gp99hja3r=6bHu=fdI1kudGf1Iz6Z-6--IzF6_wGDf2unWhKSW-IULE1qHOkq9LfqgDVSWhBSB4BjkzVjI6xl34yUFpASPACa4J2X4z8wW-Gg1JkuWhxS914XuNbwfXLA3Do2Yi4UgQbP4J5Sb-vX7z8H1AcXO2OSTaVngh4S11412hNwWaOnD8eUeqVDItW-BA9MepVGcJLAoUeqbXkn=JMHAoV78=TnwGVt4G4rDwKhftohpGBXuH1Gk64POhedWaoZgs4w1GzlPa6Gf7ml2PsZV=_1uBInrtyn5zvSW-SQ=hMfWP3SuNbqeBcXR8V4WvS=pe6VxvCSI8S-4JGwBx1S16LSTLaqx9oHxCnOBaDNk2ClP-bzosS7jNxqeBk7GUShWAkqfEeX4WQ7G2K1VAbzThetOtKnPJ67fbSHuQ9=26b1NXkqf-b4Cqvw8nbq78V1LQ6U3NOz8sLLLFV7fRBw1We1uWvng6-OeG6A1=k=eaLwsablOhjh1l1PQ89lr1HngQOndzjqVQQzjOzZgnO2R9VSW1kX7nx=2XVjPgvPVnyw16CS6HOS76yhI8VwgeK4ppUnP=eq=zLn3aVldWj1uv9Uv=1GIDrn=B4GOBt83VC1giCXuM6zzt9IPseZqQV=xGz=w41LuibZHhpXNa_SupewW18nI8b7IheAfiLXutnAe=jI=WSLrSeH348HN7eSC9jdgnGRolFwG69i_4kGg6xqu_dZd1VZdDjSBibAuV9n2FSXcJNcrz3ndj7w=aVhp9blPayDW1j-DixG1-Ww8AbGWFVH366-1zyXV_tXLSV1L8j1snsDfALqI6xq3X1S6h8SGhLlgAxn=8ehOqeHOWe5g4Mwg=KDsJND7DVJFiyXcabw6H8S1hOqC18dvhKwga9=sD5w6abS4hcHXl_q3QNhfbG7mUbnJj4=k1eUMzF7pACwjSz2XBIXutGQ-h4hfcSngEoUbRnHV_IXL21RLbyhf-vw1hB1V66hfES5fALr-Ina7ByPuhzSuBcqVAxI6pvldWhSfKOJg2kwI1kzp9hz=nO-fJvGNJgqhb3G8Aaq4zOU3-9ZpAv=dpvE4G6SGQUHu6FzTAb7jEb-R9414QxZB4nwdzbD-HBDW8CJjRVhftoAk8TdIDPUguCMeaFP7Av2onkSfnYD78e1sa9luoAZgEenc1u1u6x1sG1n2_Mp3aPSfDy=DHtSgJQFRpanw9-hpK9GZ=bHu21qoaidgQvn2QxHfiCCFvvABBtwIpSSgSNnffwS=nO2_V4w1AMs4ixrA-WGfljX6Jj1utK7p93HpAblOx1hgDOH9SzJ7zFlcheacsmGfAjHjCYS3DOSm1eJFGo=g=jw4UvdgiVn-guDuWbn2Dbwp9YzAsehppRH3G1HLOVwAeXSvbKAL1t4WAOAODi=bzLqcUeS-Benf2Bmx963rzb=PveIgceZ2Fe4kpTnFG84WaGw8TVDHwNA76L4Wr-SjSzJgoISuNrw1WC4BAIhp9AUvz9Hf2v42RVHkaoSWvWh6aVX7DOww9PHkzyQ=yjZgRVDLNSw2svqL1jwWJbSfiOhpe8Lxv9POceUfaYD4G4q7z47IpS_26NUgbv4BDbSBAO=gBeQd2BSbDpSWJF2RpSlbRV14F9wNwmItzy4CSVSj1BU9NbSkWVnRG=MW=z1bRVnF1LngbOvdASSr8zHkD64HzWlchEPuAW=OWQSP2eXuX4Me14zp9bZ-lBJNJkXVqV76iB-Iz-q3qeUdzxZ1ANwf_t71JL18f11uO8G18eD1AMtkDUPRvCHk2LH328-pvb1HtruvWQAj8SlPzISIzxwI8eqcJ3SF9VqRvTAxGvr3wbJcJF41zxq88bHs3C=3-SQc2e-72LhjN6N_DOqeMuN7jnQg9bHvJuZgDLXcaF1enFcxp9n2DY7IDbAfJ_wjN8hf2kH369j2WCZehRquvsMsDknrRV9I841IGuHRveX1zbPXe8SWGz1k1BlPbO17zVZfEehfNoSuESSeALUepjSIaxdH9FqBix4P-ClbeeU3BG1kaQPvMLjr1L8ka_Zk1eSBx9qfD418zOnJRehfbNZ4Dm1crond8v-CbbZ18e76H1qcJ2=DX6hpvhSW-eSB6-2_Ajnr81dp9bPOQ3a=JoXcAsMvD94=B1QdzQHx1ftuPvngE98N9SA3bGZDHq1e6LGdzjwpZ5l=JkHxG6Gf6-lxiN86rZSe6OndhUqgDL-P1jqrH8Jd2KnWzJMkhdidzjq_-SxsA_MxvSncUCQPJywgPvqk8zSf_1j3bFXLX4=m28S-IyjbzOHxbNXfH1W=69QFseqjzVwfB51LSIQRvv-pGed11oUKe8fpAbdFpePuJKG7hjJ=-z=3wKX7AO1uQlPut9zBPvLVzj1saFq6JC-WJjP7pVU7yGdg9y1f2LhI1flJ1OWuPmq3qe4k1O4Izj4sJuwBA_X41eXXwxZW1t8BDO1uD2Q3tcT=zySBz6S6Xe1d2DWxehGxe1zI1t=ehVnPv61d1eT2P1LbICkcheW=UCGfBzw26vSLzbM_wkzshf=COBH3Wfd1GBQw-edXSeMvzkwfQVl-jvXchMSC8e7TaKUgJFMdAOr7AOnC8bn=6FUl1eHOa91-We1ZUCJui2w8p9Xca3PV8v4I24SpeeldaFlJMTH3HeGgDOJOwL1V=ZqxvCwuQGULzy5gXBU=VeQH1jJgZCUuD9ZfR9DQ41D4697WUeM32g13PvUH8SqLEjXuQOSGU111-VS7zcXR9bPuQkSVbbzfPUrVfCZ8I1n1AbWrOuEJqtbfJFtNXzUd18GeJWXL98qg_cqkzvDI1tST9_qI8V=ehB71-eqVU8ADzO1gAVUkAO2RGe7Wabh16OGd2K1=GnU32kl7GBlCS4hWzOqNFbnWh4SRGBQGzkz3WenfRL1IDKdfqh2VWCzT6LSI1P1_wbP781hRetjfijX181jsnbMxAOSpGK24=KJE6kSIPjqIz_=C1erueeXRpbd=aVng6bSIaNGWnMTH111uWSSjzbSuQUn==eWseAHk8QJ=AN146vUxA15xekMfSeHkhy1DXSPNPjUemCJjszVuPCHkpghP2en1wC71zxT2USwjKxwpA4S8zUXON9SpGNxHzb7UQ4SIpbqW=eWgWSUJD4nga4Svhdw1AV1sJ6S4WeJ3=eHIjCejzMXXsI5_tVA9tvSOSxZHQbBfPelPhGg7h2AfbylgPvzFGe-j1endWVwjqfSWh8SPnxHv8eG6Fad8z619toSvD9DWTvefXeSj1113DQ2Rv2n3Gh7Bh8q3uCDLS1TfD4ddavSkA95_hz4w-eZ1KWng2OHWh1H4JFqc6O1kPeZgsbTW8SHeJ9SL5CK=yz2OGLSfXt1peuJdPjldWeQFbLXc=eHCz9hf2WhIzb=3A9hfQKqozVq3-va-zbT8z6-WPvIpBeSp9bzfB5h8zAP5x_q7zaqND_XcJ9BF9ONbXbwIzQ17PSSX9vI6wYH_tFSWD9n7zbl711XiAb4WJFn=penfPSGpG4nCz_H7aPlN-bXcaB1cJx7fQbG48eVrekGgs1lr1PS4M41e6Fw=-MHIALPV6kPVGzJB6kgfJx=uBj7pGz=e-eSHa2u8h15BbOSe-gHoz4GW=eXXB6Seb9qu5el_X4LVJ27rbonP-e1cAblL8Vl4BB-8GlS8vSGgReOL_chftk78heT2zxXRpeS3bOw6iOBjz9Xul2zI6D7Iz9n3_kQbDVS1=uM-z_76=kSe-vTf6SXLzN==qVSPDDS6XeG6iQ1ma1wI2Nt2RbHo9OH3DV7WAywjtzP4=Kn2Uv=xvzn2a9IF9WnLSjr7zUZ-xV-oljhfJzX714G=2T8ReelgpvnWJFVosVSCzb=3Jb=-tkS114PXzGzBtOOeaF=3Pb1pe81BhHGpzzwf=kGDH841G4jGUVU4GeUPzhw-BedfPSEI81nrc4nrS1wAzLIWnAddzVn==8AJHK71Jr=36vP46vHL14q3X_ltzvlgbb7f6LnvDxlu2N4x9MS71BHjzLngNLGV5C7fwrq26x171FSWPelPICSL8jlgDbUfDOHsJY2ezWVd69-VAyng9vSxbN-fQFJuX7G3XuQd6p7j8=hfGsQ-RzAY9NSWzezjQC7z_OwgDklCSzq4UCAP2yzID4Xc287Axb4W=MqCNV1fS8qrSkSBH8wfhkn8AWHbHfO3WzHbRjz6pnnPeVGI16HVjC=JveqCbVOPn6Qr8VhIcVpLEVwjz8-k_Vw4h8w81Vcs-hXcDSMC11qLQ_I4B4XLXeSgt9w=Aoq3VvJ7B4zIz2D=8vlRGsSf7CiKzoq4abS3boPcvvQgUjn2jIy=2ywWaWU=pl62o1ZDRV-fpS1cJ9JLesngQbqKeIXubx2saPlgBIq1GB7W_eHoazh6ik=Pa3vBw_yPa1POQbjWAxTF9OSf2c7Wak-1-V=fCESjz9G1WVHOoeH_J9qX86lKyVq_tFPugRjfHM1c-CquJGXOUYS3tDnkGjQn_4PuNLJu6vJ2D=QHzOXLQLnIDBSVwxAcwhP5avPNijhjD3H4TXHoFblc-=4eUVXiWvRPaLHWbQw=61q3DbHucSh8pVDu2L11NBJOajXul1lgDuSvJLHe=yG62tSI1ezeW9luchHG1uw3wxhAaLSpek12-V21aN=kzbffpeGHnxH1ajq-edSd8JHxYS1dl8S-AuPXGBwWGBS_QVngPSwpGSS_FB2uaxH7z9t8AVqRwkJr9rXW=KH71lgWzyzb=8wfReJFA9Xc-SlgGBnFCZSI21SApznHbGG71nXNpfPuObgWJLwcaOzsaFdGaKwZyFGf-_LswzSfAxmRG8ZW=zOs9oqcPeGRGhZ1Y1=ODCU_hfngJolRAuMsU1IpGdyOQbnuNFL6pbhWDFD1S8wPe=SpvwPN9zwWzb-Kb9nshe53n6hT64POh4QfsjnVbPwj91zWbOzWz9q7Vel_aocP21qLbqhjNr7jzb=IFeX71eVG1o-uhkn-9l7fQLP4AF7f6oA3ibUd2eHL8en=zxN3b6wj1',
        'x-nyupe9cs-b': '-iiy1ay',
        'x-nyupe9cs-c': 'AIBLGWpkAQAAgwiiBCMmnO1CBy3Pj50-59yzPNr0MvBS0Ta_Nni4KagQfRr8',
        'x-nyupe9cs-d': 0,
        'x-nyupe9cs-uniquestatekey': 'ABbOGWpkAQAAHAxBHG9qn3Z85vJlphb5m5jnx2DqnBbtjDlUKYlpFlRfORkV',
        'cookie':'PathContent=/content/wucom/base/es/en; BIGipServerwudispatcher.westernunion.com=838938378.36895.0000; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; AKCountry=US; AKZip=90001-90068+90070-90084+90086-90089+90091+90093-90096+90099+90189; AKRegioncode=CA; AKCity=LOSANGELES; AKAreacode=323+213+310; AKCounty=LOSANGELES; WUCountryCookie_=ES; WULanguageCookie_=EN; AK_TLS_Version=tls1.2; SERVER_COOKIE=R4; _abck=cfqibavy5uhi101jz1dc_1854; s_dfa=westernunionnewglobal; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; SessionId=web-dde51c3b-ec20-491a-8edf-d2ef0d5dbb30; SessionDomain=www.westernunion.com; user_txn_state=0:1530788442901; mbox=session#0241a09152454e5186e1df2dc450c647#1530790304|PC#0241a09152454e5186e1df2dc450c647.17_93#1594033244; cachestatus=enabled; JSESSIONID=1xtkpdffgkdxyjx8zpjr36j9; channel_stack=password-recovery; s_cc=true; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17718%7CMCMID%7C85672051574384929561735318759829719690%7CMCAAMLH-1531393242%7C9%7CMCAAMB-1531393242%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530795642s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17725%7CvVersion%7C2.1.0; kampyle_userid=1b60-01d6-0429-a333-4aa2-5c2a-057e-cc03; kampyleUserSession=1530788452260; kampyleUserSessionsCount=1; kampyleSessionPageCounter=1; kampyleUserPercentile=56.66962611770359; cd_user_id=1646a1a1961557-0965c2e97e84-47e1039-1fa400-1646a1a196268c; QuantumMetricUserID=b1ca89a2a4772ef43e70206b213902c1; QuantumMetricSessionID=5dae13a5d933e0565a0cde506702ae0f; CookieOptIn=CKTXNL+CKPERF+CKMKTG; s_NewRepeateVar=1530788698394-New; s_NewRepeatprop=1530788698394-New; SessionInfo=1530788699972',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        referer: 'https://www.westernunion.com/ES/EN/password-recovery.html',
        origin: 'https://www.westernunion.com',
        // cookie: 'AKCountry=TW; AKZip=; AKRegioncode=; AKCity=TAIPEI; AKAreacode=; AKCounty=; WUCountryCookie_=ES; AK_TLS_Version=tls1.2; resolution_height=800; resolution_width=1280; is_tablet=false; is_mobile=false; BIGipServerwudispatcher.westernunion.com=570502410.36895.0000; SERVER_COOKIE=R4; AMCVS_AACD3BC75245B4940A490D4D%40AdobeOrg=1; _abck=j7z8ri4f0kgkerkhpqge_1932; cachestatus=enabled; s_cc=true; user_txn_state=0:1530512033550; kampyle_userid=36ef-d12a-aad5-37a9-6ce6-0dba-fcd1-9b5b; cd_user_id=16459a0520032e-08275ab80f343b-47e1039-1fa400-16459a05201102f; QuantumMetricUserID=21eb5d6693cb92e3d58c7d611cfffd8d; QuantumMetricSessionID=f930c8f10eb29292ec9bdf652e3146a5; PathContent=/content/wucom/base/es/en; s_sq=%5B%5BB%5D%5D; s_error=C5000%2CC1172; s_t=1530531942099; WULanguageCookie_=EN; CookieOptIn=CKTXNL+CKPERF+CKMKTG; AMCV_AACD3BC75245B4940A490D4D%40AdobeOrg=1099438348%7CMCIDTS%7C17715%7CMCMID%7C00302567015786158761033064356710531361%7CMCAAMLH-1531116829%7C11%7CMCAAMB-1531140891%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1530543291s%7CNONE%7CMCAID%7CNONE%7CMCSYNCSOP%7C411-17722%7CvVersion%7C2.1.0; channel_stack=password-recovery|login|password-recovery|login|password-recovery|login|password-recovery|login|password-recovery; JSESSIONID=7vzkdxn6gbej17vdv8nxktgsa; s_dfa=westernunionnewglobal; mbox=PC#e840942bc7134461bc6549949f9343a8.28_13#1593783919|session#72249bcb5e314b3d882dedd5f07ad242#1530540982; kampyleUserSession=1530539122828; kampyleUserSessionsCount=18; kampyleSessionPageCounter=1; kampyleUserPercentile=87.48893931071615; SessionId=web-c17c58b0-4d2f-4642-b721-b7cec2eedbf8; SessionDomain=www.westernunion.com; s_NewRepeateVar=1530540723114-Repeat; s_NewRepeatprop=1530540723115-Repeat; SessionInfo=1530540724502',
        'content-length': '224',
        'accept-language': 'en-US,en;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body:
    {
        bashPath: '/ES/EN/',
        external_reference_no: '1',
        gateway_customer: { email: 'knapp.existens@live.se', date_of_birth: '1990-03-04' },
        security:
        {
            session: { id: 'web-b4749f66-18f1-447e-8543-a1e73012a162' },
            client_ip: '104151006052'
        }
    },
    json: true,
    jar: j
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    cookies = j.getCookies('https://www.westernunion.com/wuconnect/rest/api/v1.0/GetUserChallenges');

    console.log("cookies", cookies);
    console.log(body);
});