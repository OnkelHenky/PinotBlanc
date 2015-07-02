/**
 *  index.js is part of PinotGris
 *  Copyright (c) by Alexander Henka, 05.11.14.
 *  Project URL: https://github.com/OnkelHenky/Merlot
 *
 * +--------------------------------------------------------------------------+
 * | LICENSE INFORMATION                                                      |
 * | ===================                                                      |
 * |                                                                          |
 * | Licensed under the Apache License, Version 2.0 (the "License");          |
 * | you may not use this file except in compliance with the License.         |
 * | You may obtain a copy of the License at                                  |
 * |                                                                          |
 * | http://www.apache.org/licenses/LICENSE-2.0                               |
 * |                                                                          |
 * | Unless required by applicable law or agreed to in writing, software      |
 * | distributed under the License is distributed on an "AS IS" BASIS,        |
 * | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 * | See the License for the specific language governing permissions and      |
 * | limitations under the License.                                           |
 * |                                                                          |
 * | For more information see:                                               |
 * | https://github.com/OnkelHenky/PinotGris/blob/master/README.md           |
 * |                                                                          |
 * +--------------------------------------------------------------------------+
 */

/*
 * +---------------------------------------------------------------------------+
 * |                              Pinot Gris                                   |
 * |                           ================                                |
 * |   Converter for Selenium Builder's JSOn Format into Merlot blueprints     |
 * +---------------------------------------------------------------------------+
 *
 * +---------------------------------------------------------------------------+
 * | From Wikipedia                                                            |
 * | ==============                                                            |
 * |                                                                           |
 * | Pinot gris is a white wine grape variety of the species Vitis vinifera.   |
 * | Thought to be a mutant clone of the Pinot noir variety, it normally has   |
 * | a grayish-blue fruit, accounting for its name                             |
 * | (gris meaning "gray" in French) but the grapes can have a brownish pink   |
 * | to black and even white appearance. The word pinot, which comes from the  |
 * | word meaning "pine cone" in French, could have been given to it because   |
 * | the grapes grow in small pine cone-shaped clusters. The wines produced    |
 * | from this grape also vary in color from a deep golden yellow to copper    |
 * | and even a light shade of pink                                            |
 * | The clone of Pinot gris grown in Italy is known as Pinot grigio.          |
 * |                                                                           |
 * | Source: http://en.wikipedia.org/wiki/Pinot_gris                           |
 * +---------------------------------------------------------------------------+
 */


var args = require('cli-args')(process.argv.slice(2));
var jf   = require('jsonfile');
var util = require('util');
var path =  path = require('path');


console.dir(args);
console.dir(args._);


switch(true){
    case (args._ && typeof args._[0] === "string"):
        convertFile(args._[0]);
        break;
    default :
        console.log('Please use parameter, e.g., "node pinotgris.js ../path/to/file.json" ');
        process.exit(1);
        break;


}

function convertFile(pathToFile){



    var path_to_json_file = path.join(__dirname, pathToFile);

    console.dir("Location of JSON file = "+ path_to_json_file);

    jsonData = jf.readFileSync(path_to_json_file);


    console.log(util.inspect(jsonData));

    console.log(util.inspect(jsonData.steps[1]));

    console.log('typeof jsonData.steps = '+ typeof  jsonData.steps);


}


