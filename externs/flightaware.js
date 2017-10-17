/**
 * @externs
 */

var ol;

// See FAMap.Util.InteractionShims
ol.interaction;
ol.interaction.DragPan;
ol.interaction.DragPan.handleUpEvent_ = function(){};
ol.interaction.Interaction;
ol.interaction.Interaction.pan = function(){};
ol.interaction.Interaction.zoomWithoutConstraints = function(){};
ol.interaction.Interaction.rotateWithoutConstraints = function(){};
ol.interaction.Interaction.zoomByDelta = function(){};

// See FAMap.olExtras.Control.Attribution
ol.control;
ol.control.Attribution;
ol.control.Attribution.prototype.getSourceAttributions = function(){};

// loadFeatures is used in several Source classes; see FAMap.olExtras.Source.[*]
ol.source.Vector.prototype.loadFeatures = function(){};
// Used in FAMap.olExtras.Source.ClusterMeters
ol.source.Vector.prototype.getFeatures = function(){};
// Used in FAMap.olExtras.Source.Animated to correctly handle IDL wrapping
ol.source.Vector.prototype.forEachFeatureInExtent = function(){};

// Also used in FAMap.olExtras.Source.ClusterMeters
ol.source.Cluster.prototype.loadFeatures = function(){};
ol.source.Cluster.prototype.onSourceChange = function(){};
ol.source.Cluster.prototype.cluster = function(){};
ol.source.Cluster.prototype.createCluster = function(){};
