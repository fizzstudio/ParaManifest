

# Manifest

<p>Metadata, settings, and optionally inline data needed to present a ParaCharts element, as an enveloped form JIM document. @public</p>

<table>
<tbody>
<tr><th>$id</th><td>https://fizz.studio/schema/manifest.schema.json</td></tr>
<tr><th>$schema</th><td>https://json-schema.org/draft/2020-12/schema</td></tr>
</tbody>
</table>

## Properties

<table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#jim">jim</a></td><td>Object</td></tr><tr><td colspan="2"><a href="#extensions">extensions</a></td><td>Object</td></tr></tbody></table>



<hr />


## jim


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">JIM Manifest</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Metadata, and optionally inline data, needed to present a ParaCharts element, as a root form JIM document. @public</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#jimdatasets">datasets</a></td><td>Array</td></tr></tbody></table>


### jim.datasets


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Metadata, and optionally inline data, needed to present a chart in ParaCharts.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">Yes</td>
    </tr>
    <tr>
      <th>Unique Items</th>
      <td colspan="2">true</td>
    </tr>
  </tbody>
</table>



### jim.datasets.representation


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">In what form the data is presented in the ParaChart element.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### jim.datasets.representation.type


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The type of the visualization, which is always &#x27;chart&#x27;.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">chart</td>
    </tr>
  </tbody>
</table>




### jim.datasets.representation.subtype


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The type of the chart, such as &#x27;line&#x27; or &#x27;column&#x27;.</td>
    </tr>
    
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>line</li><li>stepline</li><li>bar</li><li>column</li><li>lollipop</li><li>histogram</li><li>waterfall</li><li>scatter</li><li>heatmap</li><li>pie</li><li>donut</li><li>graph</li><li>venn</li></ul></td>
    </tr>
  </tbody>
</table>




### jim.datasets.representation.structure


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Describes how the chart groups, nests, or otherwise organizes one or more facets.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Unique Items</th>
      <td colspan="2">true</td>
    </tr>
  </tbody>
</table>



### jim.datasets.representation.structure.role


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A lowercase ASCII token naming the intended organizational role of the step.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.representation.structure.facetKeys


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">An array of facet keys which are organized according to the role.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Min Items</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>






### jim.datasets.title


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.subtitle


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.description


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The overall topic of the chart. Defaults to the topic of the single series ONLY in single series charts.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### jim.datasets.topic.baseQuantity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The base quantity or quantities measured by the series or chart, such as &#x27;item price&#x27; or &#x27;inflation rate&#x27;.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.topic.baseQuantity.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.baseQuantity.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.topic.baseKind


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">What kind of base quantity this is: either a number of things (number), a quantity measured by a unit (dimensioned), a rate of change (rate), or a proportion of a whole (proportion).</td>
    </tr>
    
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>number</li><li>dimensioned</li><li>rate</li><li>proportion</li></ul></td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.locale


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The particular location or locations that the quantity measured by this series or chart is limited to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.topic.locale.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.locale.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.topic.entity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The particular entity or entities the quantity measured by this series or chart belongs to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.topic.entity.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.entity.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.topic.items


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A general term or terms for the multiple, indefinite items the quantity measured by this series or chart belongs to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.topic.items.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.items.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.topic.aggregate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The statistical aggregate or aggregates measured by this series or chart, such as &#x27;total&#x27; or &#x27;estimated&#x27;, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.topic.aggregate.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.topic.aggregate.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>






### jim.datasets.facets


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Metadata describing each facet of the chart which represents some dimension of the data.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Min Properties</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Metadata, and possibly inline data, describing the series of the chart.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    <tr>
      <th>Unique Items</th>
      <td colspan="2">true</td>
    </tr>
  </tbody>
</table>



### jim.datasets.series.key


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A unique identifier for the series, which may have spaces, punctuation, or other non-alphanumeric characters that aren&#x27;t allowed in DOM ids, but which still may not be suitable for the text label.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.label


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The text label for the series, which may be abbreviated or expanded from the series key. Defaults to key.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">What quantity the series measures.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.baseQuantity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The base quantity or quantities measured by the series or chart, such as &#x27;item price&#x27; or &#x27;inflation rate&#x27;.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.baseQuantity.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.baseQuantity.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.series.topic.baseKind


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">What kind of base quantity this is: either a number of things (number), a quantity measured by a unit (dimensioned), a rate of change (rate), or a proportion of a whole (proportion).</td>
    </tr>
    
    <tr>
      <th>Enum</th>
      <td colspan="2"><ul><li>number</li><li>dimensioned</li><li>rate</li><li>proportion</li></ul></td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.locale


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The particular location or locations that the quantity measured by this series or chart is limited to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.locale.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.locale.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.series.topic.entity


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The particular entity or entities the quantity measured by this series or chart belongs to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.entity.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.entity.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.series.topic.items


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A general term or terms for the multiple, indefinite items the quantity measured by this series or chart belongs to, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.items.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.items.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.series.topic.aggregate


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The statistical aggregate or aggregates measured by this series or chart, such as &#x27;total&#x27; or &#x27;estimated&#x27;, if any.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>String</td></tr><tr><td>Array</td></tr></tr>
    
  </tbody>
</table>



### jim.datasets.series.topic.aggregate.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The name of something, as a non-empty string.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    <tr>
      <th>Min Length</th>
      <td colspan="2">1</td>
    </tr>
  </tbody>
</table>




### jim.datasets.series.topic.aggregate.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The names of multiple things, as an array of names.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>






### jim.datasets.series.records


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The datapoints of this series represented inline.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Array</td></tr>
    
  </tbody>
</table>





### jim.datasets.href


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">An external data source for this dataset.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    
  </tbody>
</table>



### jim.datasets.href.path


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The location of the external data file.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>




### jim.datasets.href.format


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The format of the data file.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">String</td></tr>
    
  </tbody>
</table>







## extensions


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Title</th>
      <td colspan="2">Extensions Manifest</td>
    </tr>
    <tr>
      <th>Description</th>
      <td colspan="2">Metadata and settings needed to present a ParaCharts element which are extensions to JIM. @public</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>

### Properties
  <table class="jssd-properties-table"><thead><tr><th colspan="2">Name</th><th>Type</th></tr></thead><tbody><tr><td colspan="2"><a href="#extensionsparacharts">paracharts</a></td><td>Object</td></tr></tbody></table>


### extensions.paracharts


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">ParaCharts-specific extensional metadata and settings.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The settings needed to present a chart in ParaCharts.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.sonification


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Sonification Settings</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.sonification.isSoniEnabled


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Whether sonification is enabled for this chart. Defaults to true.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Boolean</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>





### extensions.paracharts.settings.aspectRatio


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The ratio of the height to the width of the chart on the screen (i.e. x-axis size / y-axis size). Defaults to 1 (i.e. a square chart).</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>




### extensions.paracharts.settings.axis


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Settings for each Axis</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.x


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">X Axis Settings</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.x.minValue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The minimum value of the axis.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Number</td></tr><tr><td></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.x.minValue.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A number.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### extensions.paracharts.settings.axis.x.minValue.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The constant &#x27;unset&#x27;.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">unset</td>
    </tr>
  </tbody>
</table>





### extensions.paracharts.settings.axis.x.maxValue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The maximum value of the axis.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Number</td></tr><tr><td></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.x.maxValue.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A number.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### extensions.paracharts.settings.axis.x.maxValue.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The constant &#x27;unset&#x27;.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">unset</td>
    </tr>
  </tbody>
</table>






### extensions.paracharts.settings.axis.y


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">Y Axis Settings</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Object</td></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.y.minValue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The minimum value of the axis.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Number</td></tr><tr><td></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.y.minValue.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A number.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### extensions.paracharts.settings.axis.y.minValue.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The constant &#x27;unset&#x27;.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">unset</td>
    </tr>
  </tbody>
</table>





### extensions.paracharts.settings.axis.y.maxValue


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The maximum value of the axis.</td>
    </tr>
    <tr><tr><td rowspan="2">Type</td><td rowspan="2">One of:</td><td>Number</td></tr><tr><td></td></tr></tr>
    <tr>
      <th>Required</th>
      <td colspan="2">No</td>
    </tr>
    
  </tbody>
</table>



### extensions.paracharts.settings.axis.y.maxValue.0


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">A number.</td>
    </tr>
    <tr><th>Type</th><td colspan="2">Number</td></tr>
    
  </tbody>
</table>




### extensions.paracharts.settings.axis.y.maxValue.1


<table class="jssd-property-table">
  <tbody>
    <tr>
      <th>Description</th>
      <td colspan="2">The constant &#x27;unset&#x27;.</td>
    </tr>
    
    <tr>
      <th>Const</th>
      <td colspan="2">unset</td>
    </tr>
  </tbody>
</table>















<hr />

## Schema
```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://fizz.studio/schema/manifest.schema.json",
    "title": "Manifest",
    "description": "Metadata, settings, and optionally inline data needed to present a ParaCharts element, as an enveloped form JIM document. @public",
    "type": "object",
    "properties": {
        "jim": {
            "title": "JIM Manifest",
            "description": "Metadata, and optionally inline data, needed to present a ParaCharts element, as a root form JIM document. @public",
            "type": "object",
            "properties": {
                "datasets": {
                    "description": "Metadata, and optionally inline data, needed to present a chart in ParaCharts.",
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/dataset"
                    },
                    "uniqueItems": true
                }
            },
            "required": [
                "datasets"
            ],
            "additionalProperties": false
        },
        "extensions": {
            "title": "Extensions Manifest",
            "description": "Metadata and settings needed to present a ParaCharts element which are extensions to JIM. @public",
            "type": "object",
            "properties": {
                "paracharts": {
                    "description": "ParaCharts-specific extensional metadata and settings.",
                    "type": "object",
                    "properties": {
                        "settings": {
                            "description": "The settings needed to present a chart in ParaCharts.",
                            "$ref": "#/$defs/settings"
                        }
                    }
                }
            }
        }
    },
    "required": [
        "jim"
    ],
    "additionalProperties": false,
    "$defs": {
        "dataset": {
            "description": "A set of data and parameters needed to present a chart in ParaCharts.",
            "type": "object",
            "properties": {
                "representation": {
                    "description": "In what form the data is presented in the ParaChart element.",
                    "type": "object",
                    "properties": {
                        "type": {
                            "description": "The type of the visualization, which is always 'chart'.",
                            "const": "chart"
                        },
                        "subtype": {
                            "description": "The type of the chart, such as 'line' or 'column'.",
                            "enum": [
                                "line",
                                "stepline",
                                "bar",
                                "column",
                                "lollipop",
                                "histogram",
                                "waterfall",
                                "scatter",
                                "heatmap",
                                "pie",
                                "donut",
                                "graph",
                                "venn"
                            ]
                        },
                        "structure": {
                            "description": "Describes how the chart groups, nests, or otherwise organizes one or more facets.",
                            "type": "array",
                            "items": {
                                "$ref": "#/$defs/representationStructure"
                            },
                            "uniqueItems": true
                        }
                    },
                    "required": [
                        "type",
                        "subtype"
                    ],
                    "additionalProperties": false
                },
                "title": {
                    "description": "The title of the chart.",
                    "$ref": "#/$defs/name"
                },
                "subtitle": {
                    "description": "The subtitle of the chart.",
                    "$ref": "#/$defs/name"
                },
                "description": {
                    "description": "A manually created description of the whole chart.",
                    "$ref": "#/$defs/name"
                },
                "topic": {
                    "description": "The overall topic of the chart. Defaults to the topic of the single series ONLY in single series charts.",
                    "$ref": "#/$defs/topic"
                },
                "facets": {
                    "description": "Metadata describing each facet of the chart which represents some dimension of the data.",
                    "type": "object",
                    "additionalProperties": {
                        "$ref": "#/$defs/facet"
                    },
                    "minProperties": 1
                },
                "series": {
                    "description": "Metadata, and possibly inline data, describing the series of the chart.",
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/seriesManifest"
                    },
                    "uniqueItems": true
                },
                "href": {
                    "description": "An external data source for this dataset.",
                    "type": "object",
                    "properties": {
                        "path": {
                            "description": "The location of the external data file.",
                            "type": "string",
                            "$comment": "Additional validation?: check path is a URL or a relative path."
                        },
                        "format": {
                            "description": "The format of the data file.",
                            "type": "string",
                            "$comment": "Additional validation?: check format is a MIME type."
                        }
                    },
                    "required": [
                        "path",
                        "format"
                    ],
                    "additionalProperties": false
                }
            },
            "required": [
                "representation",
                "title",
                "facets",
                "series"
            ],
            "additionalProperties": false
        },
        "facet": {
            "description": "Metadata describing a facet of the chart which represents some dimension of the data.",
            "type": "object",
            "properties": {
                "label": {
                    "description": "A text label for the quantity measured by this facet.",
                    "$ref": "#/$defs/name"
                },
                "description": {
                    "description": "An extended text description for the quantity measured by this facet.",
                    "type": "string"
                },
                "variableType": {
                    "description": "Whether the variable this facet measures depends on the variable measured by another facet or facets.",
                    "enum": [
                        "dependent",
                        "independent"
                    ]
                },
                "measure": {
                    "description": "The NOIR data scale of the quantity this facet measures.",
                    "enum": [
                        "nominal",
                        "ordinal",
                        "interval",
                        "ratio"
                    ]
                },
                "datatype": {
                    "description": "The primitive type of the data measured by this facet.",
                    "enum": [
                        "number",
                        "date",
                        "string"
                    ]
                },
                "displayType": {
                    "description": "How this facet should be displayed on the chart",
                    "$ref": "#/$defs/displayType"
                },
                "units": {
                    "description": "The units for the data of this facet, in singular form, if any. This value should be absent if the facet measures a dimensionless quantity. If the units for this facet of the chart are fractional, then this is only the numerator of that fraction.",
                    "$ref": "#/$defs/name"
                },
                "multiplier": {
                    "description": "The number each datum of this facet must be multiplied by to get the true value. Defaults to 1.",
                    "type": "number"
                },
                "topic": {
                    "description": "Topic information for the facet.",
                    "$ref": "#/$defs/facetTopic"
                }
            },
            "required": [
                "label",
                "variableType",
                "measure",
                "datatype",
                "displayType"
            ],
            "additionalProperties": false
        },
        "seriesManifest": {
            "description": "Metadata, and possibly inline data, describing a series on the chart.",
            "type": "object",
            "properties": {
                "key": {
                    "description": "A unique identifier for the series, which may have spaces, punctuation, or other non-alphanumeric characters that aren't allowed in DOM ids, but which still may not be suitable for the text label.",
                    "$ref": "#/$defs/seriesName"
                },
                "label": {
                    "description": "The text label for the series, which may be abbreviated or expanded from the series key. Defaults to key.",
                    "$ref": "#/$defs/seriesName"
                },
                "topic": {
                    "description": "What quantity the series measures.",
                    "$ref": "#/$defs/topic"
                },
                "records": {
                    "description": "The datapoints of this series represented inline.",
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/datapointManifest"
                    }
                }
            },
            "required": [
                "key"
            ],
            "additionalProperties": false
        },
        "topic": {
            "description": "The topic of a series or chart.",
            "type": "object",
            "properties": {
                "baseQuantity": {
                    "description": "The base quantity or quantities measured by the series or chart, such as 'item price' or 'inflation rate'.",
                    "$ref": "#/$defs/nameOrNames"
                },
                "baseKind": {
                    "description": "What kind of base quantity this is: either a number of things (number), a quantity measured by a unit (dimensioned), a rate of change (rate), or a proportion of a whole (proportion).",
                    "enum": [
                        "number",
                        "dimensioned",
                        "rate",
                        "proportion"
                    ]
                },
                "locale": {
                    "description": "The particular location or locations that the quantity measured by this series or chart is limited to, if any.",
                    "$ref": "#/$defs/nameOrNames"
                },
                "entity": {
                    "description": "The particular entity or entities the quantity measured by this series or chart belongs to, if any.",
                    "$ref": "#/$defs/nameOrNames"
                },
                "items": {
                    "description": "A general term or terms for the multiple, indefinite items the quantity measured by this series or chart belongs to, if any.",
                    "$ref": "#/$defs/nameOrNames"
                },
                "aggregate": {
                    "description": "The statistical aggregate or aggregates measured by this series or chart, such as 'total' or 'estimated', if any.",
                    "$ref": "#/$defs/nameOrNames"
                }
            },
            "required": [
                "baseQuantity"
            ],
            "additionalProperties": false
        },
        "facetTopic": {
            "description": "Topic information for the facet.",
            "type": "object",
            "properties": {
                "denominator": {
                    "description": "If the units for this facet of the chart are fractional, then this is the denominator of that fraction. For example: '(per) capita', '(per) million inhabitants'. If this property is present, then every series on the chart must measure a fractional quantity, of which this will also be the denominator.",
                    "$ref": "#/$defs/name"
                }
            },
            "additionalProperties": false
        },
        "datapointManifest": {
            "description": "A datapoint on the graph.",
            "type": "object",
            "additionalProperties": {
                "description": "The value of the point relative to the facet labelled by this property key.",
                "type": "string"
            },
            "minProperties": 1,
            "$comment": "Additional validation: These properties must match those in `facets`."
        },
        "name": {
            "description": "The name of something, as a non-empty string.",
            "type": "string",
            "minLength": 1
        },
        "nameOrNames": {
            "description": "Either the name of a single thing, as a non-empty string, or multiple things, as an array of names.",
            "oneOf": [
                {
                    "$ref": "#/$defs/name"
                },
                {
                    "$ref": "#/$defs/multipleNames"
                }
            ],
            "$comment": "`multipleNames` is necessary here because each member of oneOf must have the same type to avoid TypeScript type inference errors."
        },
        "multipleNames": {
            "description": "The names of multiple things, as an array of names.",
            "type": "array",
            "items": {
                "$ref": "#/$defs/name"
            },
            "$comment": "`multipleNames` is necessary for `nameOrNames` to avoid TypeScript type inference errors."
        },
        "seriesName": {
            "description": "The name of a series, as a non-empty string. This is identical to `name`, but specified for semantic reasons",
            "$ref": "#/$defs/name"
        },
        "displayType": {
            "description": "How a facet should be displayed on the graph.",
            "type": "object",
            "properties": {
                "type": {
                    "description": "What type of chart element represents the facet.",
                    "enum": [
                        "axis",
                        "marking",
                        "area",
                        "angle",
                        "text"
                    ]
                },
                "orientation": {
                    "description": "What type of chart element represents the facet.",
                    "enum": [
                        "horizontal",
                        "vertical"
                    ]
                },
                "minDisplayed": {
                    "description": "The lowest value displayed on this axis of the chart. Defaults to zero for the dependent axis and the minimum independent value of any series for the independent axis.",
                    "type": "number"
                },
                "maxDisplayed": {
                    "description": "The highest value label displayed on this axis of the chart. Defaults to the maximum value of any series relative to this axis.",
                    "type": "number"
                }
            },
            "required": [
                "type"
            ],
            "additionalProperties": false,
            "$comment": "Additional validation: The other properties should be only those relevant to the type."
        },
        "representationStructure": {
            "description": "Describes how the chart groups, nests, or otherwise organizes one or more facets.",
            "type": "object",
            "properties": {
                "role": {
                    "description": "A lowercase ASCII token naming the intended organizational role of the step.",
                    "$ref": "#/$defs/name",
                    "$comment": "Additional validation: Check that the role is only lowercase ASCII."
                },
                "facetKeys": {
                    "description": "An array of facet keys which are organized according to the role.",
                    "type": "array",
                    "items": {
                        "$ref": "#/$defs/name"
                    },
                    "minItems": 1,
                    "$comment": "Additional validation: Check that the keys all match keys in facets."
                }
            },
            "required": [
                "role",
                "facetKeys"
            ],
            "additionalProperties": false
        },
        "settings": {
            "description": "The settings needed to present a chart in ParaCharts.",
            "type": "object",
            "properties": {
                "sonification": {
                    "description": "Sonification Settings",
                    "type": "object",
                    "properties": {
                        "isSoniEnabled": {
                            "description": "Whether sonification is enabled for this chart. Defaults to true.",
                            "type": "boolean"
                        }
                    }
                },
                "aspectRatio": {
                    "description": "The ratio of the height to the width of the chart on the screen (i.e. x-axis size / y-axis size). Defaults to 1 (i.e. a square chart).",
                    "type": "number"
                },
                "axis": {
                    "description": "Settings for each Axis",
                    "type": "object",
                    "properties": {
                        "x": {
                            "description": "X Axis Settings",
                            "$ref": "#/$defs/axisSettings"
                        },
                        "y": {
                            "description": "Y Axis Settings",
                            "$ref": "#/$defs/axisSettings"
                        }
                    }
                }
            }
        },
        "axisSettings": {
            "description": "Settings for a particular Axis",
            "type": "object",
            "properties": {
                "minValue": {
                    "description": "The minimum value of the axis.",
                    "$ref": "#/$defs/axisExtremeValue"
                },
                "maxValue": {
                    "description": "The maximum value of the axis.",
                    "$ref": "#/$defs/axisExtremeValue"
                }
            }
        },
        "axisExtremeValue": {
            "description": "Settings for an extreme of a particular Axis",
            "oneOf": [
                {
                    "$ref": "#/$defs/number"
                },
                {
                    "$ref": "#/$defs/constUnset"
                }
            ],
            "tsType": "number | 'unset'"
        },
        "number": {
            "description": "A number.",
            "type": "number",
            "$comment": "`number` is necessary for `axisExtremeValue` to avoid TypeScript type inference errors."
        },
        "constUnset": {
            "description": "The constant 'unset'.",
            "const": "unset",
            "$comment": "`constUnset` is necessary for `axisExtremeValue` to avoid TypeScript type inference errors."
        }
    }
}
```


