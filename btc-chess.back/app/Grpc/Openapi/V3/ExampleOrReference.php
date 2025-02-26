<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: openapi/v3/openapi.proto

namespace Openapi\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>openapi.v3.ExampleOrReference</code>
 */
class ExampleOrReference extends \Google\Protobuf\Internal\Message
{
    protected $oneof;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Openapi\V3\Example $example
     *     @type \Openapi\V3\Reference $reference
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Openapi\V3\Openapi::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Example example = 1;</code>
     * @return \Openapi\V3\Example|null
     */
    public function getExample()
    {
        return $this->readOneof(1);
    }

    public function hasExample()
    {
        return $this->hasOneof(1);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Example example = 1;</code>
     * @param \Openapi\V3\Example $var
     * @return $this
     */
    public function setExample($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\Example::class);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Reference reference = 2;</code>
     * @return \Openapi\V3\Reference|null
     */
    public function getReference()
    {
        return $this->readOneof(2);
    }

    public function hasReference()
    {
        return $this->hasOneof(2);
    }

    /**
     * Generated from protobuf field <code>.openapi.v3.Reference reference = 2;</code>
     * @param \Openapi\V3\Reference $var
     * @return $this
     */
    public function setReference($var)
    {
        GPBUtil::checkMessage($var, \Openapi\V3\Reference::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getOneof()
    {
        return $this->whichOneof("oneof");
    }

}

