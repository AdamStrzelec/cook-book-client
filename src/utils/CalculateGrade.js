export default function getPercentageGrade( grade ){
    grade*=2;
    return grade.toPrecision(2).toString().replace('.', '');
}