<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>openapi.v3.ParametersOrReferences</code>
 */
class ParametersOrReferences extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedParameterOrReference additional_properties = 1;</code>
     */
    private $additional_properties;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type array<\Openapi\V3\NamedParameterOrReference>|\Google\Protobuf\Internal\RepeatedField $additional_properties
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedParameterOrReference additional_properties = 1;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getAdditionalProperties()
    {
        return $this->additional_properties;
    }

    /**
     * Generated from protobuf field <code>repeated .openapi.v3.NamedParameterOrReference additional_properties = 1;</code>
     * @param array<\Openapi\V3\NamedParameterOrReference>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setAdditionalProperties($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \Openapi\V3\NamedParameterOrReference::class);
        $this->additional_properties = $arr;

        return $this;
    }

}

