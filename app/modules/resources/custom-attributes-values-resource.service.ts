/*
 * Copyright (C) 2014-2017 Andrey Antukh <niwi@niwi.nz>
 * Copyright (C) 2014-2017 Jesús Espino Garcia <jespinog@gmail.com>
 * Copyright (C) 2014-2017 David Barragán Merino <bameda@dbarragan.com>
 * Copyright (C) 2014-2017 Alejandro Alonso <alejandro.alonso@kaleidos.net>
 * Copyright (C) 2014-2017 Juan Francisco Alcántara <juanfran.alcantara@kaleidos.net>
 * Copyright (C) 2014-2017 Xavi Julian <xavier.julian@kaleidos.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: modules/resources/custom-field-values.coffee
 */

import {Injectable} from "@angular/core";
import {HttpService} from "../base/http";
import {UrlsService} from "../base/urls";

@Injectable()
export class CustomAttributesValuesResource {
    constructor(private http: HttpService,
                private urls: UrlsService) {}

    _get(objectId: number, resource: string) {
        let url = `${this.urls.resolve(resource)}/${objectId}`
        return this.http.get(url);
    }

    get_epic(objectId) {
        return this._get(objectId, "custom-attributes-values/epic");
    }

    get_userstory(objectId) {
        return this._get(objectId, "custom-attributes-values/userstory");
    }

    get_task(objectId) {
        return this._get(objectId, "custom-attributes-values/task");
    }

    get_issue(objectId) {
        return this._get(objectId, "custom-attributes-values/issue");
    }
}
