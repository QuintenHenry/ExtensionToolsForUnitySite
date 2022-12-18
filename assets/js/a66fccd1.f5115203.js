"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[904],{3905:function(A,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var a=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},r=Object.keys(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var u=a.createContext({}),i=function(A){var e=a.useContext(u),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},l=function(A){var e=i(A.components);return a.createElement(u.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,r=A.originalType,u=A.parentName,l=o(A,["components","mdxType","originalType","parentName"]),d=i(t),p=n,b=d["".concat(u,".").concat(p)]||d[p]||c[p]||r;return t?a.createElement(b,s(s({ref:e},l),{},{components:t})):a.createElement(b,s({ref:e},l))}));function p(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=A,o.mdxType="string"==typeof A?A:n,s[1]=o;for(var i=2;i<r;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8165:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var a=t(7462),n=t(3366),r=(t(7294),t(3905)),s=["components"],o={sidebar_position:2},u="Data Tables",i={unversionedId:"Saving and Data/DataTables",id:"Saving and Data/DataTables",isDocsHomePage:!1,title:"Data Tables",description:"Data Tables are an easy way to represent data in a structured table. It can be used for all kinds of data types such as localization, items, players,...",source:"@site/docs/Saving and Data/DataTables.md",sourceDirName:"Saving and Data",slug:"/Saving and Data/DataTables",permalink:"/ExtensionToolsForUnitySite/docs/Saving and Data/DataTables",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Game Data",permalink:"/ExtensionToolsForUnitySite/docs/Saving and Data/GameData"},next:{title:"Mono Singletons",permalink:"/ExtensionToolsForUnitySite/docs/Utilities/Singleton"}},l=[{value:"Creating a Data Table",id:"creating-a-data-table",children:[],level:2},{value:"Accessing rows",id:"accessing-rows",children:[],level:2}],c={toc:l};function d(A){var e=A.components,o=(0,n.Z)(A,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-tables"},"Data Tables"),(0,r.kt)("p",null,"Data Tables are an easy way to represent data in a structured table. It can be used for all kinds of data types such as localization, items, players,...\nYou can think of it as spreadsheet built into Unity."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DataTable",src:t(3235).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DataTable",src:t(160).Z})),(0,r.kt)("h2",{id:"creating-a-data-table"},"Creating a Data Table"),(0,r.kt)("p",null,"Before we create a Data Table, we first have to create the type that will be stored in the Data Table. To do that, we right click in our ",(0,r.kt)("strong",{parentName:"p"},"project->Create->ExtensionsTools->DataTable->Data Table Type")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DataTableType",src:t(3772).Z})),(0,r.kt)("p",null,"Now a new script will be created, Let's rename it to ItemDataType. When we open the script we will see something like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using ExtensionTools.Data;\npublic class DataTableType1: DataTable.DataStruct\n{\n    public string ExampleName;\n    public int ExampleValue;\n}\n")),(0,r.kt)("p",null,"This is just an example, we will rename the class and adjust the class like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using ExtensionTools.Data;\npublic class ItemDataType: DataTable.DataStruct\n{\n    public string ItemName;\n    public int StackSize;\n    public Texture ItemIcon;\n}\n")),(0,r.kt)("p",null,"We are now ready to actually create our Data Table. To do that, we right click once again in our ",(0,r.kt)("strong",{parentName:"p"},"project->Create->ExtensionsTools->DataTable->DataTable"),".\nAnd we select the type we just created.\n",(0,r.kt)("img",{alt:"DataTableTypeSelect",src:t(6839).Z})),(0,r.kt)("p",null,"We have now succesfully created our DataTable and we can start adding data to it, using the + button and clicking on the row we want to edit.\n",(0,r.kt)("img",{alt:"DataTableFinished",src:t(8369).Z})),(0,r.kt)("h2",{id:"accessing-rows"},"Accessing rows"),(0,r.kt)("p",null,"There are different ways to access the rows in the DataTable. Let's start with using the keys we can assign in the DataTable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using ExtensionTools.Data;\n\n...\n\n[SerializeField]\nDataTable m_ItemDataTable;\n\nvoid Start(){\n        ItemDataType itemData;\n        if (m_ItemDataTable.TryGetRow<ItemDataType>("key0", out itemData))\n        {\n            //Found row\n        }\n        else\n            //No row found with key keyName\n}\n')),(0,r.kt)("p",null,"In our example using keys doesn't really make sense. We rather access these values using the index. This can be done like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"ItemDataType itemData= m_ItemDataTable.GetRowFromIndex<ItemDataType>(0);\n")))}d.isMDXComponent=!0},8369:function(A,e,t){e.Z=t.p+"assets/images/DataTableFinished-efa3dfbe96c47672321eeb1a926b43e0.png"},3235:function(A,e,t){e.Z=t.p+"assets/images/DataTableItems-fa7ba40cd3a8c06beab98a34e8c34e4c.png"},160:function(A,e,t){e.Z=t.p+"assets/images/DataTableLanguage-aaf9cebd3d69eb466543acedbcaed869.png"},6839:function(A,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5wAAAC/CAYAAACSYtPUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACL9SURBVHhe7d0JeBXV/f/x75UdFUQWBaVa2dwVFGVTqCi4UBVUFBVFZKnlr9i64oZa97pi0ccFquIuglVaxZ+otYIoKi6ggiyxAREEKciWhHj/+Zw7J5mE5ObeJBND8n71md5Zzp3MvfJk8pnvmTOxOXPmxA0AAAAAgGLE43E3hed/+eUXt7x161Y3n5ub66acnBzLzs62pUuXWvfu3W0H1woAAAAAgApG4AQAAAAARCLlLrXrsmI2b1Vi/sAWZo3rVX5P3JUrV9oDDzxgt956q8ViMXv99ddtw4YNblu9evVszz33tEMPPdR22CH6HJ2RkWF5312wVNjuu+9uRx11VLBUPB17586drVmzZsGawl566SU7+eST3edKRuXsq666yv785z+7nwsAAACgZlq2bJl99NFH9sMPP7hl5YMjjjjC5aSyePnll93rgAEDUu5Sm5WVZVOmTHF5beTIkaVXOH/cZHbXTLPTXjS74Z24mzSvddpWmZ544gk7+uij3cHL888/b19++aX9+OOP9s0339j48eNt6NCh9t1337ntpXnttdds8uTJwVJ6tmzZ4n6uJv1H1Zfql9etWxe0KpmO3f9DKM6jjz5qGzduDJZKpu/i2GOPdd8NAAAAgJrpgw8+sOeee85loT322MN+85vfWGZmpssds2fPDlqlZ/HixW5Kx6ZNm2zVqlX2888/u+USK5ybcsye+SJmUxaYZW+NW93aMesWBONZywrWDehgds7BcWtYJ7EtKjrgQYMG2TPPPGONGzd2684//3y76KKLrEuXLm5ZyXrChAk2a9Yse+yxx6x27dpuvVK3qqONGjWynXfe2a3TF/Hkk0+64Kj9NGnSJD/IFtc+mWnTptk777xj99xzT7CmQEn70s+84oorbJ999rE1a9ZYy5Yt849XjjvuOHvhhRds1113dcv6bAqoO+20k9tXmALuOeec4/6BpXK8AAAAAKoPVTaVBVR5VDVSecFXJJV51AP0rLPOKrHSqey0du3aYCnhyiuvtLvuuitYMttll11s2LBhpVY4NWjQkiVLXCHupJNO2rbCmZv3vslf54XIKTF7fn7c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3K45Kma77xSzxWviduX/mV35ltmStQXP3wQAAAAAIFUucHrqWvvUqXG7qLNZo3ox++R7sxHTzG6fGbMfNwWN8vj58Ci0G556yr0Wx28rOootAAAAAKD6KhQ4pVbemtP3M3tmQNzOOiBmdWqZvbU4bue9UlDpDM/7UWhz1693r8Xx2xixFgAAAABqjm0Cp9ewjtnwwxIVz75tzHJygw15wvMAAAAAABSnxMDpNW9odmV3s5cHmt38u5ibNF+c4kahZWRaAAAAAKiZSg2cXuN6ceveOjFpPqxW8+butegotOFRbH0bAAAAAEDNkHLgTGaXyy9PGii1TW0AAAAAADVHbM6cOYXLlQAAAAAABOLxuJvC87/88otb3rp1q5vPzc11U05OjmVnZ9vSpUute/fuFVPhBAAAAACgKAInAAAAACASBE4AAAAAQCQInAAAAACASBA4AQAAAACRIHACAAAAACJB4AQAAAAARILACQAAAACIBIETAAAAABAJAicAAAAAIBIETgAAAABAJAicAAAAAIBIEDgBAAAAAJEgcAIAAAAAIkHgBAAAAABEIjZ27Nh4MA8AAAAAwDbi8URsDL/66ZdffsmfcnNzbevWrZaTk2NDhgyx2OzZswmcAAAAAIBi+WAZnveTwqUPm5rXlJ2dbRkZGdajRw+61AIAAAAAokHgBAAAAABEgi61AIBS/fzzz7Zly5b87jQAAKDm8Od/341W1IVW87pn07/6SV1qf/jhB+vbty+BEwCQnMJmw4YNbY899rDatWsHawEAQE3hg6afxAdO3bPpg6a/hzMrK8vmz59vhxxyCF1qAQDJqbJJ2AQAAGVB4AQAJKWrl4RNAABQFgROAEDaLrroIlu7dm2wFK0NGzbYqFGj3PySJUvsqKOOss2bN7vlslq3bl3+Pipqn/pOzj//fDeNHj3ann76aVcdTlX4mAAAqC7SuofzuuuucyfDWCxmO++8s+uTe8IJJ1i9evWCFsnpPqC6deum3F5mzpxpU6ZMCZYK0/E0adIkWAIARGHVqlXWqVOnYClBy//6179s9913D9ZER8G2T58+NmfOHHdfiF67du0abC2byy67zLp3724DBgyosH3qO7n33nutadOm9v3339vUqVNt5cqV9txzz1n9+vWDViULHxMAAFVJ+P5NTZLqPZy1hg0bdqN7Rwp0Iv3jH//oTojNmze39957z15++WX3h0Aq3a3uvvtu98Pbtm0brCldo0aNbN9997XDDjvMPvnkEzvooIPs1FNPdcv6Q2eHHSjSAkCUNm7caC1btgyWEh555BE755xzbKeddgrWFNCJ5sUXX3STqocdOnRwFxvD2yZPnmyZmZm23377Wa1atdw2VfgmTZpk//jHP9zIdvvvv7/7Ha8qodaPGDHCnUNeffVV69Kli/3vf/+z+++/395///386b///a87TyTb3z//+U+bNm2aW6cLoTo+v08p6fh1wfXRRx91Fzofeughmzt3rrVv394aNGjg3qfvRJXNNm3auPNcv3797N1333U/5/DDD3dtUj2mgw8+uMS2AABUBUWDpybNa1L4/PHHHxN5zbVKwz777ONOvkcffbTdeuut1qxZM/eHg7d+/Xp7/vnn7b777nMncP1Aeeedd+zbb791r6+88opbV1LbsF122cX9PE36w0YH7ZcVcj/++GMXfMOeeuop++mnn9wfJjpZL1u2zB588EF7/PHH3Unb0x8VOsHrDxZVUTV8LwCgfC699FIX/nr16uUqfQqmOTk5bpsCmbbpwuWiRYts6NChbr3C3Mknn+xCZO/evV2be+65x20LU/hUV1XROUDnJD/p/LJ8+XK3Ldn+9t57b1eF1KsuaIb3KSUdv9o99thj9uSTT7pqqM4nCsHJDB482GbMmOHm0zmmVL8PAAAq24cfzrbLLrvErrjiUjddffXlds01V9h1111ln3zycdCqQLkvlfbv399mzZrl5hXwdPJVkOzWrZsLgzo5y5577unCo171h0GytulQCNVVZU9XoxUi9bP0x4EC7fjx490Vb3UDVoV29erVru1f/vIX+/TTT+2II46w7777zsaMGePWAwDK5uuvv7YvvvjC9Yg55phj7Prrr3ePVHnzzTftq6++ctMDDzxgxx13nN10002uCqhwpSqhfl9fccUV1rNnTxs+fPg2FxOL0u//gQMHukm3ajRu3Nj+9Kc/uW3J9nfAAQe4i5d69ZVHL9nxi84r1157rR177LHuouuCBQtcRbIkGt1XXZIlnWMqy/cBAEBlOPLILta585HBUoGOHQ+3ww4rfF6VcgdOnSDXrFnj5nXCHzdunAuSRx55pJ111ln20UcfuW3t2rVz3XD1qq5CydqmQ1eC69SpY998841bfvvtt10XX9/taNOmTXbxxRe7K9VnnnmmGxhC1VRVWxUydR+oAq/+SNHAFPPmzXPvAwCkb+HChe4Cn+9CK7qop9+5mvT733ehFf3u911SFUZVAf39739vV111VX5VtDQKfQqIOqeEb+8oy/6SHb/owqU/Xn0OhV51OS6Jzo+6NcRL55jK+n0AABC1gQMHWfv2+wZLynodrH//04KlwsodODWYw4477hgsmesipavWw4YNszvuuCPpCTKdtsnoSrmCpqhLVd++fd286NhatWoVLCWuIitoZmRkuGPXqIIjR45004oVKwp1uQUApEe/c9VzJUzdQrVek+aL8/nnn9uNN95o5557rr300ksuPKZC1UVdVLzlllvcBVCvrPtLdvxlMX369PwqajrHVNbjBwCgMqi4N3jwkLyctae1bNnKzj57cInjDJQ7cP7nP/9xV6xFXZF0P6QG9VE3Vp0sS5JO29IocGpgBlUn1aWqdevWwZZE9yfdq+lpEAZ1j9IVat0Hqnti/PTss8+6SigAoGzUY0UVRwUm0YW8119/3X73u9+5QXn0u99v0/31J554ort/Xu1++9vfWufOnd2Irro1ojQanODKK6+0k046yfVeCSttf6pg+q6uYcmOPx0610ycONH1qPH3eaZzTGX5PgAAqEw6Pw0dOswuuODCpE8hKXPg1FVlXXV96623bNCgQW6dTpQKexr+Vj/UVx09dX313W9La5uOFi1auH1pYKDjjz8+WJugEZL8IEW6b1QnbQ32oJ+rCqtO6uoSpQGLNIpusq5RAIACeiyWHgXip8WLF7sup7qAp66gusf/jDPOsMsvv9yN2qrftdqmiqQGxNFtDpdccokLWrrYp3OEeqjotoiSKqFhuvdf56C///3v+cdwyimnuG2l7U9deTWonB+0yEt2/KnQd9KxY0d3j6dGVtcjUfwIv+kcU1m+DwAAKlvjxrtYo0aNg6XipfUcTg3u4OnelUMPPdQNZKCBgESB7oYbbnDdUnXlWds/++wzN2qs6Mq2BmDQoEEasCdZ2+KMHTvWhcWioVI0oIMCox7Toj8YRFeYzzvvPHey1olf3aQ0uq7+wBE9d01/WKirlAYS0h8qRf/4AICaThcIFebS4YdD18irCk5hftuuu+5a6F5J0a0OumLq75Msr2T707lHvWCK25bs+MsrnWOq6O8DAICy0PkpPIkKdppXb1KdNzVp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"},3772:function(A,e,t){e.Z=t.p+"assets/images/DataTableTypeCreation-4e82f3905c88bc99ff513761be2f2e8c.png"}}]);