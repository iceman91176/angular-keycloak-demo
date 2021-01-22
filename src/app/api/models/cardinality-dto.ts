/* tslint:disable */

/**
 * Defines a cardinality DTO given by a lower and an upper limit<br> <br> <p><br> <br/><br> <b>Relation to UML cardinality:</b><br/><br> <br/><br> <table border="1" horz-align="left"><br> <tr><br> <th>UML</th><br> <th>Cardinality</th><br> <th><i>Upper limit unbounded</i></th><br> </tr><br> <tr><br> <td>*</td><br> <td>Cardinality(0,0,true)</td><br> <td>true</td><br> </tr><br> <td>0..*</td><br> <td>Cardinality(0,0,true)</td><br> <td>true</td><br> </tr><br> <tr><br> <td>0..4</td><br> <td>Cardinality(0,4,false)</td><br> <td>false</td><br> </tr><br> <tr><br> <tr><br> <td>1</td><br> <td>Cardinality(1,1,false)</td><br> <td>false</td><br> </tr><br> </table><br> </p>
 */
export interface CardinalityDto {
  _type: string;
  lowerLimit: number;
  upperLimit: number;
  upperLimitUnbound: boolean;
}
